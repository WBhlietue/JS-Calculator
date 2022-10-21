test = document.getElementsByClassName("btn");
answer = document.getElementById("answer");

var str = "0";
var isPositive = true;

for (var i = 0; i < test.length; i++) {
  test[i].innerHTML = test[i].id;
  test[i].setAttribute("onClick", "OnClick(this)");
}

function OnClick(value) {
  if (str == "Math Error") {
    Reset();
  }
  var ch = value.id[0];
  if (ch >= "0" && ch <= "9") {
    if (str == "0") {
      str = "";
    }
    str += value.id;
  }

  if (
    value.id == "+" ||
    value.id == "-" ||
    value.id == "*" ||
    value.id == "/"
  ) {
    str += value.id;
  }
  if (ch == "(" || ch == ")") {
    if (str == "0") {
      str = "";
    }
    str += value.id;
  }
  if (ch == ".") {
    if (str[str.length - 1] == ".") {
      RemoveLast();
    } else {
      str += ".";
    }
  }
  if (ch == "^") {
    str += value.id;
  }
  if (value.id == "AC") {
    Reset();
  }
  if (value.id == "Del") {
    RemoveLast();
  }
  if (value.id == "+/-") {
    if (isPositive) {
      isPositive = false;
      str = "-" + str;
    } else {
      isPositive = true;
      str = str.substring(1, str.length);
    }
  }

  if (ch == "=") {
    Calculate();
  }
  answer.value = str;
}

function RemoveLast() {
  str = str.substring(0, str.length - 1);
}

function Reset() {
  str = "0";

  isPositive = true;
}

function Calculate() {
  str = answer.value;
  var s = str.split("^");
  str = "";
  for (var i = 0; i < s.length; i++) {
    str += s[i];
    str += "**";
  }
  if (str != "") {
    RemoveLast();
    RemoveLast();
  }
  try {
    str = eval(str);
    isPositive = str[0] != "-";
    isDot = false;
  } catch {
    str = "Math Error";
  }
}

function Press(key){
    console.log(key);
}
