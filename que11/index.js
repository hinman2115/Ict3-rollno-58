// index.js
function isPalindrome(str) {
  if (typeof str !== 'string') throw new TypeError('Expected a string');
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

module.exports = isPalindrome;
