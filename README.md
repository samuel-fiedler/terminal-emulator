# Terminal Emulator

A simple terminal emulator written in JavaScript

## Usage

You can fork this repo and edit the `index.js`.  
In this file are all functions for the terminal. 

You have to define a `startup` function that is runned when the site is loaded.  
In the function, I will give you the command line parameters, so you can read arguments. 

For example:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8"/>
    <title>Terminal</title>
    <script src="term.js"></script>
    <link rel="stylesheet" href="style.css"/>
    <script>
      var functions = {
        startup: function (opt) {
          terminal.print("Hello World!");
        },
        echo: function (opt) {
          terminal.print(opt[0]);
        },
        clear: function (opt) {
          terminal.clear();
        }
      }
    </script>
  </head>
  <body>
    <noscript>You have to activate JavaScript!</noscript>
    <h1>Terminal Emulator</h1>
    <pre id="terminal"></pre>
  </body>
</html>
```

That's it!
