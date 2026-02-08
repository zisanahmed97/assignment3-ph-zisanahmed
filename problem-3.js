function finalScore(omr){
    if(typeof omr !== 'object'){
        return 'Invalid';
    }else if(Array.isArray(omr)){
        return 'Invalid';
    }else if(omr === null){
        return 'Invalid';
    }

    const right = omr.right;
    const wrong = omr.wrong;
    const skip = omr.skip;

    const total = right + wrong + skip;

    if(total !== 100){
        return 'Invalid';
    }

    const score = right - (wrong * 0.5);

    return Math.round(score);

}

const result = finalScore({  right: 80, wrong: 25, skip: 0});
console.log(result);