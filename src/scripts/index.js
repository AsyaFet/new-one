import "@fortawesome/fontawesome-free/js/all";
import "../styles/index.scss";
import "bootstrap";

let importantAndUrgent;
let importantAndNotUrgent;
let notImportantAndUrgent;
let notImportantAndNotUrgent;

(function () {
  importantAndUrgent = document.getElementById("importantAndUrgent");
  importantAndNotUrgent = document.getElementById("importantAndNotUrgent");
  notImportantAndUrgent = document.getElementById("notImportantAndUrgent");
  notImportantAndNotUrgent = document.getElementById(
    "notImportantAndNotUrgent"
  );
  const quadrants = [
    importantAndUrgent,
    importantAndNotUrgent,
    notImportantAndUrgent,
    notImportantAndNotUrgent,
  ];

  quadrants.forEach((quadrant) => {
    const button = quadrant.getElementsByTagName("button")[0];
    button.addEventListener("click", () => {
      addNewTask(quadrant);
    });
  });
})();

function addNewTask(quadrant) {
  console.log(quadrant);
  const value = getInputValue(quadrant);
  if (value) {
    addNewItem(value, quadrant);
  } else {
    alert("Please add value to input");
  }
}

function getInputValue(quadrant) {
  return quadrant.getElementsByClassName("new-task-input")[0].value;
}

function addNewItem(value, quadrant) {
  const list = quadrant.getElementsByClassName("todoList")[0];
  const newLi = getLiWithText(value, quadrant);
  list.appendChild(newLi);
}

function moveIntoDone(li, quadrant) {
  const secondList = quadrant.getElementsByClassName("doneList");
  secondList[0].appendChild(li);
}

function getLiWithText(value, quadrant) {
  const newListItem = document.createElement("li");

  const checkbox = getCheckBox();
  const text = document.createTextNode(" " + value);
  const space = document.createTextNode(" ");
  const icon = getDeleteIcon();

  newListItem.appendChild(checkbox);
  newListItem.appendChild(text);
  newListItem.appendChild(space);
  newListItem.appendChild(icon);

  checkbox.addEventListener("click", () => {
    moveIntoDone(newListItem, quadrant);
  });

  icon.addEventListener("click", () => {
    newListItem.remove();
  });

  return newListItem;
}

function getCheckBox() {
  const input = document.createElement("input");
  input.type = "checkbox";
  return input;
}

function getDeleteIcon() {
  const i = document.createElement("i");
  const span = document.createElement("span");
  i.className = "fas fa-trash";
  span.appendChild(i);
  return span;
}
