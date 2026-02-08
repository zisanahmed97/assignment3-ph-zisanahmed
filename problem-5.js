function analyzeText(str){
    if(typeof str !== 'string'){
        return 'Invalid';
    }
    if(str.trim() === ""){
        return 'Invalid';
    }

    let words = str.split(" ");
    let longWord = "";
    
    for(let w=0; w < words.length;w++){
        if(words[w].length>longWord.length){
            longWord=words[w];
        }
    }

    let total = str.split(" ").join("").length;

    return{
        longwords: longWord,
        token: total,
    }
}

console.log(analyzeText("I am a little honest person"));

