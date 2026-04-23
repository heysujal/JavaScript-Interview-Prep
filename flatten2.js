let target1 = { "a.b": { c: 1 } };

let target2 = { a: [1, 2, { b: 3 }] };

let target3 = { a: { b: { c: 1 } } };

let target4 = { a: null, b: 1 };
// { "a": null, "b": 1 }

let target5 = { a: [], b: {} }; // edge case
// { "a": [], "b": {} }

let target6 = [
  {
    name: "sujal",
    games: ["x", "y", "z"],
  },
];

let target7 = [10, 20, 30]; // Root level array
// { "0": 10, "1": 20, "2": 30 }

// expected
// {
//   id: 1,
//   'user.name': 'Sujal',
//   'user.address.city': 'Delhi',
//   'user.address.coords.0': 28.61,
//   'user.address.coords.1': 77.23,
//   'user.hobbies': [],
//   'user.skills': {},
//   'tags.0': 'dev',
//   'tags.1': 'frontend',
//   age: undefined,
//   meta: null
// }

// Pre-Requiste

// typeof [] and typeof {} or typeof null both will give 'object'

// How to check if a variable is an array
// Array.isArray(x);

// How to check if a variable is an object
//  x !== null && !Array.isArray(x) && typeof x === 'object'

// How to iterate an object
// Object.entries(obj).forEach(([key, value]) => {
// })

// How to check length of object
// Object.entries(obj).length or Object.keys(obj).length

// function helper(obj, path, res){
//     if(obj === null || typeof obj !== 'object'){
//         // not an array and not an object
//         res[`${path}`] = obj;
//         return;
//     }

//     if(Array.isArray(obj)){
//         if(obj.length === 0){
//             res[path] = [];
//             return;
//         }
//         obj.forEach((value, index) => {
//             const newPath = path === "" ? index : `${path}.${index}`
//             helper(value, newPath, res);
//         })
//     }else{
//         if(Object.keys(obj).length === 0){
//             res[path] = {};
//             return;
//         }
//         Object.entries(obj).forEach(([key, value]) => {
//             const newPath = path === "" ? key: `${path}.${key}`
//             helper(value, newPath, res);
//         })
//     }
// }

// function flatten(obj){
//     let res = {};
//     helper(obj, "", res);
//     return res;
// }

let target = {
  id: 1,
  user: {
    name: "Sujal",
    address: {
      city: "Delhi",
      coords: [28.61, 77.23],
    },
    hobbies: [],
    skills: {},
  },
  tags: ["dev", "frontend"],
  age: undefined,
  meta: null,
};
function helper(obj, path, res) {
  // obj should not be an array or object
  if (obj === null || typeof obj !== "object") {
    res[path] = obj;
    return;
  }
  if (Array.isArray(obj)) {
      if(obj.length === 0){
        res[path] = [];
        return;
      }
    obj.forEach((value, index) => {
      const newPath = path === "" ? `${index}` : `${path}.${index}`;
      helper(value, newPath, res);
    });
  } else if (obj !== null && typeof obj === "object") {
    if (Object.entries(obj).length === 0) {
      res[path] = {};
      return;
    }
    Object.entries(obj).forEach(([key, value]) => {
      const newPath = path === "" ? `${key}` : `${path}.${key}`;
      helper(value, newPath, res);
    });
  }
}

function flatten(obj) {
  let res = {};
  helper(obj, "", res);
  return res;
}

console.log(flatten(target));
console.log(flatten(target1))
console.log(flatten(target2))
console.log(flatten(target3))
console.log(flatten(target4))

console.log(flatten(target5))
console.log(flatten(target6))

console.log(flatten(target7))
