var functions = {
  "startup": function (opt) {
    terminal.print(String.raw`
  _______    ______    ____     _       _
 |__   __|  |  ____|  |  _ \   | \     / |
    | |     | |__     | |_| |  |  \   /  |
    | |     |  __|    |    /   |   \_/   |
    | |     | |____   | |\ \   | |\   /| |
    |_|     |______|  |_| \_\  |_| \_/ |_|

 Emulator

 Type „help“ for help!
`)
  },
  "echo": function (opt) {
    terminal.print(opt[0]);
  },
  "clear": function (opt) {
    terminal.clear();
  },
  "help": function (opt) {
    var help_docs = {
      "intro": String.raw`
Introduction
------------

In this article you will learn the basic commands that you can work with the terminal. 

ECHO

This is a very important function because it prints text. 
If you want to print only a word, you can write it without quotation marks. 
But if you want to print a whole sentence, you have to write before and after the sentence 
a single or double quotation mark. Else, the second word will be the second argument. 
This argument isn't recognized yet by the echo command.
`
    }
    terminal.print(String.raw`
Terminal Help
=============
`)
    if (!opt[0]) {
      terminal.print("\nType „help intro“ for an introduction ;-) \n");
    } else if (!help_docs[opt[0]]) {
      terminal.print("\nThis topic doesn't exist :-( \n");
    } else {
      terminal.print(help_docs[opt[0]]);
    }
  }
};

