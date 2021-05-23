function DropDwon(dropdownElement) {
  let that = this;

  const input = dropdownElement.children[0];
  const toggler = dropdownElement.children[1];
  const menu = dropdownElement.children[2];

  this.element = dropdownElement;
  this.value = toggler.textContent;

  this.handleClickOut = function (e) {
    if (!that.element.contains(e.target)) {
      that.toggle(true);
    }
  };
  const setValue = function (item) {
    const value = item.textContent;
    toggler.textContent = value;
    that.value = value;
    that.toggle(true);
    that.element.dispatchEvent(that.newCustom("change"));
    toggler.focus();
    input.value = item.dataset.value;
  };
  const handleTogglerKeyDown = function (e) {
    e.preventDefault();
    if (e.keyCode == 9) {
      that.toggle(false); // open dropdwon
    } else if (e.keyCode == 27) {
      that.toggle(true); // close dropdwon
    } else if (e.keyCode == 13 || e.keyCode == 23) {
      setValue(e.target);
    } else if (e.keyCode == 38 && e.target.previousElementSibling) {
      e.target.previousElementSibling.focus();
    } else if (e.keyCode == 40 && e.target.nextElementSibling) {
      e.target.nextElementSibling.focus();
    }
  };
  toggler.addEventListener("click", function () {
    that.toggle(false);
  });
  toggler.addEventListener("keydown", handleTogglerKeyDown);
  for (var i = 0; i < menu.children.length; i++) {
    menu.children[i].addEventListener("keydown", handleTogglerKeyDown);
    menu.children[i].addEventListener("click", function () {
      setValue(this);
    });
  }
  this.toggle = function (expand) {
    if (expand === false) {
      menu.setAttribute("aria-expanded", "true");
      toggler.classList.add("active");
      menu.children[0].focus();
    } else {
      menu.setAttribute("aria-expanded", "false");
      toggler.classList.remove("active");
    }
  };
  // new custom pour IE qui ne support pas  dispatchEvent
  this.newCustom = function (eventName) {
    var event;
    if (typeof Event === "function") {
      event = new Event(eventName);
    } else {
      event = document.createEvent("Event");
      event.initEvent(eventName, true, true);
    }
    return event;
  };
}

const dropdown = new DropDwon(document.querySelector(".custom-select"));
document.addEventListener("click", dropdown.handleClickOut);
dropdown.element.addEventListener("change", function () {
  console.log(dropdown.value);
});
document.querySelector(".send").addEventListener("click", function (e) {
  e.preventDefault();
  console.log($("form").serialize());
});
