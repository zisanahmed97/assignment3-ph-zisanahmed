function validOtp(otp){
    if(typeof otp !== 'string'){
        return "invalid";
    }else if(otp.length !== 8){
        return false;
    }else if(!otp.startsWith("ph-")){
        return false;
    }else{
        return true;
    }
}

const result = validOtp(["ph-10985"] );
console.log(result);