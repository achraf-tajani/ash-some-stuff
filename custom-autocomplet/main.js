const wrapperRecherche = document.querySelector(".recherche-input");
const inputBox = document.querySelector(".recherche-input input");
const suggesBox = document.querySelector(".autocom-box");

inputBox.addEventListener("keyup", (e) => {
  if (e.keyCode > 64 && e.keyCode < 91) {
    let saisie = e.target.value;
    if (saisie) {
      lookData(saisie);
    } else {
    }
  }
});
function filDataInList(elementnode) {
  let li, text;
  while (suggesBox.lastElementChild) {
    suggesBox.removeChild(suggesBox.lastElementChild);
  }
  if (elementnode.length > 0) {
    elementnode.forEach((element) => {
      li = document.createElement("li");
      text = document.createTextNode(element.name);
      li.appendChild(text);
      suggesBox.appendChild(li);
    });
    wrapperRecherche.classList.add("active");
  } else {
    wrapperRecherche.classList.remove("active");
  }
}
function lookData(saisie) {
  fetch("./data.json")
    .then((response) => {
      return response.json();
    })
    .then(function (emptyArray) {
      let list = emptyArray.filter((item) => {
        return item.name.toLowerCase().startsWith(saisie.toLowerCase());
      });
      filDataInList(list);
    });
}

document.querySelector(".icon").addEventListener("click", function (e) {
  while (suggesBox.lastElementChild) {
    suggesBox.removeChild(suggesBox.lastElementChild);
  }
  inputBox.value = "";
  wrapperRecherche.classList.remove("active");
});
