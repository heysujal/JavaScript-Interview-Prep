Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

let arr = ["Aman", "Harshit", "Sujal"];
let lengths = arr.myMap((x) => x.length);

console.log(lengths);
