module.exports = name => {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Hi ${name}`), 1000);
  });
};
