function processString(stringRaw) {
  stringRaw = stringRaw.trim().split(' ');
  const arr = [];
  stringRaw.forEach((e) => {if (e != '') {arr.push(e)}});
  return arr.join(' ');
}
