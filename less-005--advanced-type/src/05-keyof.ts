console.log('<<<<< ========== KEYOF ========== >>>>>');

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log('extractValue(): ', extractValue({ name: 'Max' }, 'name'));
