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

function repeat(message, times = 2) {
  return Array(times).fill(message).join(' ');
}

function reverse(message) {
  return message.split('').reverse().join('');
}

function capitalize(message) {
  return message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();
}

console.log(greet());
console.log(farewell());
console.log(shout(greet('Claude')));
console.log(whisper(farewell('Claude')));
console.log(repeat(greet('Claude')));
console.log(reverse(greet('Claude')));
