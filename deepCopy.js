function deepCopy(obj) {
    let copyObj = {};  
    for (let key in obj) {
       if (typeof obj[key] === 'object') { 
            copyObj[key] = deepCopy (obj[key]) 
       } else {
            copyObj[key] = obj[key] 
       }
    }
    return copyObj 
}