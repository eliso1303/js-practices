function truncate(string, maxlength) {
    if (typeof string === 'string' && typeof maxlength === 'number') {
        if (string.length > maxlength) {
            let newStr = string.substring(0, maxlength - 3);
            return newStr + '...';
        }
    } else {
        throw new Error('Input Error');
    }
}

truncate('I wanna to say next thing about this topic', 22); // 'I wanna to say next...'