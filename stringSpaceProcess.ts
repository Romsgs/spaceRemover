export function processName(nameRaw) {
  nameRaw = nameRaw.trim().split(' ');
  const arr = [];
  nameRaw.forEach((e) => {if (e != '') {arr.push(e)}});
  return arr.join(' ');
}
