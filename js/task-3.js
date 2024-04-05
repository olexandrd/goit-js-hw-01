function getNumericValue(value) {
  return parseFloat(value);
}

function getElementWidth(content, padding, border) {
  const contentWidth = getNumericValue(content);
  const paddingWidth = getNumericValue(padding);
  const borderWidth = getNumericValue(border);

  return contentWidth + 2 * paddingWidth + 2 * borderWidth;
}

console.log('Task 3');

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
