class MyString {
    reverse(revStr) {
        let splitStr = revStr.split("");
        let reverseStr = splitStr.reverse();
        let joinStr = reverseStr.join("");
        return joinStr;
    }

    ucFirst(capsStr) {
        let withoutFirst = capsStr.substring(1);
        let first = capsStr.charAt(0).toUpperCase();
        return first + withoutFirst;
    }

    ucWords(words) {
        let wordArr = words.split(' ');
        for (let i = 0; i < wordArr.length; i++) {
            wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].substring(1);
        }
        return wordArr.join(' ');
    }
}

var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'