var data = JSON.parse(localStorage.getItem("todolist"));

function ListingTodo() {
  for (let j = 0; j < data.length; j++) {
    let li = document.createElement("li");
    if (data[j].checked) {
      li.className.add("checked");
    }
    li.textContent = data[j].value;
    document.getElementById("list").appendChild(li);
  }
}
ListingTodo();

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    data.splice(i, 1);
    localStorage.setItem("todolist", JSON.stringify(data));
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    console.log(ev);
    if (ev.target.nodeName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
    data.push({ value: inputValue, checked: false });
    localStorage.setItem("todolist", JSON.stringify(data));
  }
  document.getElementById("task").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
