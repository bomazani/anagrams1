function alphabetize(word) {
    return word.toLowerCase().split("").sort().join("").trim();
}

// adds function to the user button //
// document.getElementById("findButton").onclick = function() {
//     // your code will go here ...
//     let typedText = document.getElementById("input").value;

    // Testing on 3 words (lair, liar, rail, dog) //
    let word="liar";
    let dictionary = ['rail', 'liar', 'rail', 'dog'];
    for (i=0; i<4; i++){
        alphabetize(dictionary[i])
        if(alphabetize(word) === alphabetize(dictionary[i])) {
            console.log(dictionary[i] + ", ")
        }
       
       
    
      
        
    }
 


// End test //

// function alphabetize(a) {
//     return a.toLowerCase().split("").sort().join("").trim();
//    }

