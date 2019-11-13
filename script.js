function generate() {
    var numChars = prompt("How many chars do you want?");
    var specialChars = confirm("Do you want special chars?");
    var lowerChars= confirm("Do you want lowercase chars?");
    var upperChars = confirm("Do you want uppercase chars?");
    var numChars = confirm("Do you want numbers?");
} 
if (length > 8) {
    alert("Negative password length");
    return;
} else if (length > 128) {
    alert("Password length too large");
    return;
}



// function generate() {
    // var numChars = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    // var upperChars = ("'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'");
    // var lowerChars = ("'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'");
    // var specialChars = (" !#$%&()*+,-./:;<=>?@[\]^_`{|}~");
    // var randomPassword = numberChars + upperChars + lowerChars + specialChars;
    // var randPasswordArray = Array(passwordLength);
    // randomPasswordArray[0] = numberChars;
    // randomPasswordArray[1] = upperChars;
    // randomPasswordArray[2] = lowerChars;
    // randomPasswordArray[3] = specialChars;
    // randomPasswordArray = randomPasswordArray.fill(allChars, 4);
    // return shuffleArray(randomPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
// ​}

function copyPassword() {
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}
