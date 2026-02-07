function newPrice( currentPrice , discount){
     if(typeof currentPrice !== 'number'||typeof discount !== 'number'){
        return 'Invalid';

     }else if(discount < 0 || discount > 100){
        return 'Invalid';
     }
    const discounted = currentPrice * discount / 100;
    const finalPrice = currentPrice - discounted;
    return finalPrice.toFixed(3);

}

// const price = newPrice(500, "5" );
// console.log('final price is ',price);