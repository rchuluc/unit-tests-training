// This function is private
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// This function is private
function convertToLowerCase(text) {
  return text.toLowerCase();
}

// This function is public
function formatText(text) {
  const upperCase = convertToUpperCase(text);
  const lowerCase = convertToLowerCase(text);

  return {
    original: text,
    upperCase,
    lowerCase,
  };
}

module.exports = { formatText };
