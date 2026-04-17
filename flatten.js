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
const target = {
  id: 1,
  user: {
    name: "Sujal",
    address: {
      city: "Delhi",
      coords: [28.61, 77.23]
    }
  },
  tags: ["dev", "frontend"],
  meta: null
};




function helper(obj, path = "", res){
    if(obj === null || (typeof obj !== 'object' && !Array.isArray(obj))){ 
        // only checking for typeof obj !== 'object'
        // can check for both Array and Object
        res[path] = obj;
        return;
    }
    if(Array.isArray(obj)){
        for(let i=0; i < obj.length; i++){
            let temp = path;
            if(path !== ""){
                path = `${path}.${i}`;
            }else{
                path = `${i}`
            }
            helper(obj[i], path, res);
            path = temp;
        }
    }
    else if(obj !== null && typeof obj === "object"){
        Object.entries(obj).forEach(([key, value]) => {
            let temp = path;
            if(path !== ""){
                path = `${path}.${key}`;
            }else{
                path = `${key}`
            }
            helper(value, path, res);
            path = temp;
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