function countWords(message){
    var matchCount = message.match(/[\w\d\’\'-]+/gi);
    return matchCount ? matchCount.length : 0;
}
countWords('Good morning, I love JavaScript.');