function gonoVote(array){
    if(!Array.isArray(array)){
        return 'Invalid';
    }
    let yes = 0;
    let no = 0;

    for(let i = 0; i < array.length ; i++){
        if(array[i] === 'ha'){
            yes++;
        }else if(array[i] === 'na'){
            no++;
        }
    }

    if (yes > no){
        return true;
    }else if(yes === no){
        return 'equal';
    }else{
        return false;
    }
}



// console.log(gonoVote(["ha", "na", "ha", "na"])); 
// console.log(gonoVote(["ha", "na", "na"]));       
// console.log(gonoVote(["ha", "ha", "ha", "na"]));
// console.log(gonoVote("ha, na"));                 
// console.log(gonoVote(12345));                    