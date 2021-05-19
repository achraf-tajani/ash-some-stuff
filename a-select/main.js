function createCustomSelect() {
  var x, i, j, l, ll, selElmnt, a, b, c;
  x = document.getElementsByClassName("custom-select");
  l = x.length;

  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];

    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("tabindex", i + 2);
    a.setAttribute("class", "select-selected");

    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");

    for (j = 1; j < ll; j++) {
      selElmnt[j].setAttribute("tabindex", -1);
      /*for each option in the original select element,
          create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      // pour style 1 on ajoute un icon check
      if (x[i].dataset.select === "style1") {
        c.innerHTML =
          "<span>" +
          selElmnt.options[j].innerHTML +
          '</span><i class="far fa-check-circle"></i>';
      } else {
        c.innerHTML = selElmnt.options[j].innerHTML;
      }
      c.setAttribute("role", "option");
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
              and the selected item:*/
        var y, ii, k, s, h, sl, yl, dataSet;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (ii = 0; ii < sl; ii++) {
          if (s.options[ii].innerHTML == this.childNodes[0].textContent) {
            s.selectedIndex = ii;
            h.innerHTML = this.childNodes[0].textContent;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            // show the check icon for selected option

            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);

    a.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/

      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
      this.parentElement.dataset.selected = "true";
    });
    a.addEventListener("keyup", function (e) {
      e.stopPropagation();
      var allSelect = document.getElementsByClassName("custom-select"),
        valueOption;
      //  chercher si les deux class select-hide select-arrow-active sont presente pour faire un toggle
      // select-hide est pour les options
      // select-arrow-active est pour la valeur affiché
      if (e.key === "Enter") {
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        valueOption = getValueOfselectedOption(this.nextSibling.childNodes);
        this.innerHTML = valueOption.childNodes[0].textContent;
        valueOption.classList.remove("tabIndexOPtion");
        for (var i = 0; i < this.nextSibling.childNodes.length; i++) {
          this.nextSibling.childNodes[i].classList.remove("same-as-selected");
        }
        valueOption.classList.add("same-as-selected");
      } else if (e.key === "Tab" || e.code === "ShiftLeft") {
        for (var i = 0; i < allSelect.length; i++) {
          closeAllSelect(allSelect[i]);
        }
        this.parentElement.dataset.selected = "true";
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        moveFocus(this.nextSibling, "First");
      } else if (e.key === "ArrowUp") {
        moveFocus(this.nextSibling, "Up");
      } else if (e.key === "ArrowDown") {
        console.log(this.nextSibling);
        moveFocus(this.nextSibling, "Down");
      } else {
        for (var i = 0; i < allSelect.length; i++) {
          closeAllSelect(allSelect[i]);
        }
      }
    });
  }
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var c,
    x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  c = document.getElementsByClassName("custom-select");
  for (var i = 0; i < c.length; i++) {
    if (c[i].dataset.selected === "true") {
      c[i].dataset.selected = "false";
    }
  }
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

function setState(newState) {
  switch (newState) {
    case "initial":
      csState = "initial";
      break;
    case "opened":
      csState = "opened";
      break;
    case "closed":
      csState = "closed";
  }
}

function moveFocus(listOption, direction) {
  const lengthOption = listOption.childNodes.length;
  let cursorOption;
  switch (direction) {
    case "First":
      for (var i = 0; i < listOption.childNodes.length; i++) {
        listOption.childNodes[i].classList.remove("tabIndexOPtion");
      }
      listOption.firstChild.classList.add("tabIndexOPtion");
      break;
    case "Up":
      cursorOption = getPositionOfOption(listOption.childNodes);
      if (cursorOption > 0) {
        for (var i = 0; i < listOption.childNodes.length; i++) {
          listOption.childNodes[i].classList.remove("tabIndexOPtion");
        }
        listOption.childNodes[cursorOption - 1].classList.add("tabIndexOPtion");
      }
      break;
    case "Down":
      cursorOption = getPositionOfOption(listOption.childNodes);
      console.log(cursorOption);
      if (cursorOption < lengthOption - 1) {
        for (var i = 0; i < listOption.childNodes.length; i++) {
          listOption.childNodes[i].classList.remove("tabIndexOPtion");
        }
        listOption.childNodes[cursorOption + 1].classList.add("tabIndexOPtion");
      }
      break;
  }
}

function toArray(ObbjArray) {
  return $.map(ObbjArray, function (value, index) {
    return [value];
  });
}

function getPositionOfOption(NodeOptionChildrens) {
  for (var i = 0; i < NodeOptionChildrens.length; i++) {
    if (
      toArray(NodeOptionChildrens[i].classList).indexOf("tabIndexOPtion") > 0
    ) {
      return i;
    }
  }
  return 0;
}

function getValueOfselectedOption(NodeOptionChildrens) {
  for (var i = 0; i < NodeOptionChildrens.length; i++) {
    if (toArray(NodeOptionChildrens[i].classList).length > 0) {
      return NodeOptionChildrens[i];
    }
  }
}
// close all select
for (var i = 0; i < document.getElementsByTagName("input").length; i++) {
  document
    .getElementsByTagName("input")
    [i].addEventListener("keyup", closeAllSelect);
}

createCustomSelect();
document.addEventListener("click", closeAllSelect);
