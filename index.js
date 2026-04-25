function greet(name = 'world') {
  return `Hello, ${name}!`;
}

function farewell(name = 'world') {
  return `Goodbye, ${name}!`;
}

function shout(message) {
  return message.toUpperCase();
}

function whisper(message) {
  return message.toLowerCase();
}

console.log(greet());
console.log(farewell());
console.log(shout(greet('Claude')));
console.log(whisper(farewell('Claude')));
