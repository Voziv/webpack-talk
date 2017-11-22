# What I did to get this example started

`npm init` - First we initialize the repository to obtain `package.json`. All defaults accepted.

`npm install -D node-sass` - Adds `node-sass` which we'll use to compile `*.scss` files.

Next we'll add a script to run inside of `package.json`. This will let us convert our `app.scss` into `app.scss`

```json
{
 "scripts" : {
    "build-css": "node-sass --include-path scss assets/scss/app.scss dist/css/app.css"
  }
}
```

Here's a quick snippet to show the scss working.

```
$body-bg-color : #FFFFFF;
$text-color : #3E3E3E;

body {
    background-color : $body-bg-color;
    font-size        : 1.5em;
    font-family      : sans-serif;
    color            : $text-color;
}

.container {
    width   : 800px;
    margin  : auto;
    padding : 1em;
}
```

Now of course you're going to want to have node automatically watch our changes right?

Let's use `nodemon` to do just that. 

`npm install -D nodemon` - Adds `nodemon` which we'll use to watch our `*.scss` files for changes.

```json
{
 "scripts" : {
    "watch-css": "nodemon -e scss -x \"npm run build-css\""
  }
}
```