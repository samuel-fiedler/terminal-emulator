// Function for converting terminal arguments into JavaScript arguments

function split(data){
  var result = [""];
  var stufe = 0;
  var goosefeets = false;
  for (var i = 0; i < data.length; i++) {
    switch (data[i]){
      case " ":
        if (!goosefeets) {
          result.push("");
          stufe++;
        } else {
          result[stufe] += data[i];
        }
        break;
      case "'":
        goosefeets = !goosefeets;
        break;
      case '"':
        goosefeets = !goosefeets;
        break;
      default:
        result[stufe] += data[i];
        break;
    }
  }
  return result;
}

// Function for fast element selecting

function getID (id) {
  return document.getElementById(id);
}

// Terminal setup

function term_setup() {
  functions.startup({});
  terminal.print("\n" + pathname + " > ");
  getID('terminal').innerHTML += '<input id="terminput" type="text" onchange="term_function()"/>';
}

// Builtin terminal functions

var terminal = {
  "print": function (text) {
    getID('terminal').innerText += text;
  },
  "prompt": function (text) {
    return prompt(text);
  },
  "clear": function () {
    getID('terminal').innerText = "";
  }
};

// Evaluate a command

function term_function () {
  var function_content = getID('terminput').value;
  getID('terminal').innerHTML += function_content + "\n";
  function_content = split(function_content);
  var function_name = function_content.shift();
  if (functions[function_name]) {
    functions[function_name](function_content);
  } else {
    terminal.print('ERROR: Command „' + function_name + '“ is not defined!');
  }
  terminal.print("\n" + pathname + " > ");
  getID('terminal').innerHTML += '<input id="terminput" type="text" onchange="term_function()"/>';
  getID('terminput').focus();
}

// Pathname of the device

var pathname = "terminal-emulator/";

var files = {};

window.addEventListener('DOMContentLoaded', term_setup);