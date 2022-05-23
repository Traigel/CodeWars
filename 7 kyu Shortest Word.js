function findShort(s){
    let arr = s.split(' ');
    let mArr = arr.map( u => u.length);
    let sArr = mArr.sort ( (a,b) => {return a - b})
    return sArr[0];
}

//Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.