function greet(name = 'world') {
  return `Hello, ${name}!`;
}

function farewell(name = 'world') {
  return `Goodbye, ${name}!`;
}

function toUpperCase(message) {
  if (!message) return '';
  return message.toUpperCase();
}

function whisper(message) {
  if (!message) return '';
  return message.toLowerCase();
}

function repeat(message, times = 2) {
  if (times <= 0) return '';
  return Array(times).fill(message).join(' ');
}

function reverse(message) {
  return message.split('').reverse().join('');
}

function capitalize(message) {
  return message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();
}

function truncate(message, maxLength = 20) {
  if (!message) return '';
  return message.length <= maxLength ? message : message.slice(0, maxLength - 3) + '...';
}

function pad(message, length, char = ' ') {
  return message.padStart(Math.ceil((message.length + length) / 2), char)
                .padEnd(length, char);
}

function slugify(message) {
  return message.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
function countWords(message) {
  if (!message || !message.trim()) return 0;
  return message.trim().split(/\s+/).length;
}

console.log(greet());
console.log(farewell());
console.log(toUpperCase(greet('Claude')));
console.log(whisper(farewell('Claude')));
console.log(repeat(greet('Claude')));
console.log(reverse(greet('Claude')));
