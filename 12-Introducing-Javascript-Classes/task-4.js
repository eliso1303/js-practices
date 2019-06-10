class MyString {
    reverse(revStr) {
        var newString = "";
        for (var i = revStr.length - 1; i >= 0; i--) {
            newString += revStr[i];
        }
        return newString;
    }

    ucFirst(capsStr) {
        let withoutFirst = capsStr.substring(1);
        let first = capsStr.charAt(0).toUpperCase();
        return first + withoutFirst;
    }

    ucWords(words) {
        let wordArr = words.split(' ');
        for (let i = 0; i < wordArr.length; i++) {
            wordArr[i] = this.ucFirst(wordArr[i]);
        }
        return wordArr.join(' ');
    }
}

var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'