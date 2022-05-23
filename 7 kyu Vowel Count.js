function getCount(str) {
    let vowelsCount = 0;
    let arr = str.split('');
    let vowels = arr.filter( u => u === 'a' || u === 'e' || u === 'i' || u === 'o' || u === 'u')
    vowelsCount += vowels.length;
    return vowelsCount;
};

//Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.