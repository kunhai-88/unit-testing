 
module.exports = (name, cb) => {
  setTimeout(()=>cb(`Hi ${name}`, `you are beautifil`),  1000);
};