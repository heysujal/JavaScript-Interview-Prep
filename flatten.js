// expected
// {
//   "id": 1,
//   "user.name": "Sujal",
//   "user.address.city": "Delhi",
//   "user.address.coords.0": 28.61,
//   "user.address.coords.1": 77.23,
//   "tags.0": "dev",
//   "tags.1": "frontend",
//   "meta": null
// }
let target = {
  id: 1,
  user: {
    name: "Sujal",
    address: {
      city: "Delhi",
      coords: [28.61, 77.23],
      pincode: [], // edge case
      money: { // edge case
      }
    }
  },
  tags: ["dev", "frontend"],
  age: undefined,
  meta: null
};




// target = {
//   id: 1,
//   user: {
//     name: "Sujal",
//     address: {
//       city: "Delhi",
//       coords: [28.61, 77.23],
//       history: [
//         { year: 2020, city: "Mumbai" },
//         { year: 2021, city: "Bangalore" }
//       ]
//     }
//   },
//   tags: ["dev", "frontend"],
//   projects: [
//     {
//       name: "Tracker",
//       tech: ["React", "Node"]
//     },
//     {
//       name: "Portfolio",
//       tech: []
//     }
//   ],
//   isActive: true,
//   meta: null
// };


function helper(obj, path = "", res){
    if(obj === null || (typeof obj !== 'object' && !Array.isArray(obj))){ 
        // only checking for typeof obj !== 'object'
        // can check for both Array and Object
        res[path] = obj;
        return;
    }
    // Check for array
    if(Array.isArray(obj)){
        obj.forEach((item, i) => {
            const newPath = path ? `${path}.${i}` : `${i}`;
            helper(item, newPath, res);
        })
    }
    // Check for object
    else if(typeof obj === "object"){
        Object.entries(obj).forEach(([key, value]) => {
            const newPath = path ? `${path}.${key}` : `${key}`;
            helper(value, newPath, res);
        });
    }
}

function flatten(obj){
    let result = {};
    helper(obj, "", result);
    return result
}
let ans = flatten(target);

console.log(ans)