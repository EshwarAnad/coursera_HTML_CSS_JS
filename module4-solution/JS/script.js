var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

let firstLetter = '';
for (let i = 0; i < names.length; i++) {
  firstLetter = names[i].charAt(0).toLowerCase();
  firstLetter == 'j' ? byeSpeaker.speak(names[i]) : helloSpeaker.speak(names[i]);
}

/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/
