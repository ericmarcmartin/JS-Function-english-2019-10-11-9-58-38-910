function palindrome(message){
    return message == message.split("").reverse().join("") ? true : false;
}
palindrome('hello');
palindrome('abcba');