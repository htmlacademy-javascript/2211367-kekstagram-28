const validateStr = (str, maxLength) => str.length <= maxLength;

const validatePolidrom = (str) =>
  str.replace(/\s/g, '').toLowerCase() ===
  str.replace(/\s/g, '').toLowerCase().split('').reverse().join('');
const validateNumber = (value) => {
  if (typeof value === 'number') {
    const val = value > 0 ? value : value * -1;
    value = String(val);
  }
  const data = value
    .replace(/\s/g, '')
    .split('')
    .map((it) => {
      if (typeof Number(it) === 'number' && !isNaN(Number(it))) {
        return it;
      } else {
        return '';
      }
    })
    .join('');
  return data.length ? Number(data) : NaN;
};

const copySymbol = (str, n, char) => {
  const diff = n - str.length;
  if (diff > 0) {
    const extra = char.repeat(Math.ceil(diff / char.length)).substring(0, diff);
    return extra + str;
  } else {
    return str.substring(-diff); // обрезаем с конца, если n < str.length
  }
};

validateStr('nikita', 10);
validatePolidrom('cocok');
validateNumber('2023 hello');
copySymbol('a', 3, 'qq');


