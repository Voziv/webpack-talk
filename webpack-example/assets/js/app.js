// Entry point for our app

require('../scss/app.scss');

import english, {spanish} from './modules/test';

console.log(english);
console.log(spanish);
let englishHello = new english();
let spanishHello = new spanish();

console.log(englishHello.sayHello());
console.log(spanishHello.sayHello());