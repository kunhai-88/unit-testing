 
module.exports = (name, cb) => {
  setTimeout(()=>cb(`hello, ${name}`, `you are beautifil`),  1000);
};