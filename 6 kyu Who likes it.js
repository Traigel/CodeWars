function likes(names) {
    let likesArr = names;
    let x = likesArr.length - 2;
    if (likesArr.length === 0) {
        return 'no one likes this';
    }
    if (likesArr.length === 1) {
        return likesArr[0] + ' likes this';
    }
    if (likesArr.length === 2) {
        return likesArr[0] +' and '+ likesArr[1] + ' like this';
    }
    if (likesArr.length === 3) {
        return likesArr[0] +', '+likesArr[1] +' and '+ likesArr[2] + ' like this';
    }
    if (likesArr.length > 3) {
        return likesArr[0] +', '+likesArr[1] +' and '+ x +' others like this';
    }
}

//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
//
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.