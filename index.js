
// document.getElementById('memory1').addEventListener('click', function(){

//     const memory1 = document.getElementById('exta-memory');
//     const memoryNumber = memory1.innerText;
//     memory1.innerText = parseFloat(memoryNumber) + 100;
    
    
// })
function updateCaseNumberPhone(isInreasingPhone){
    const memory1 = document.getElementById('exta-memory');
    let memoryNumber = memory1.innerText;
    //let memoryNumber2 = memory1.innerText

    if( memoryNumber < 1){
        memoryNumber  = parseFloat(memoryNumber) + 100;  
    }
    else{
        console.log('kothao bhul hoise')
    } 
    memory1.innerText = memoryNumber;  
    // const bestPrice = document.getElementById('best-price');
    // bestPrice.innerText = memoryNumber + 1299;

    // totla price
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText =parseFloat( memoryNumber) + 1299;

} 
//best price 
 
document.getElementById('memory1').addEventListener('click', function(){
    updateCaseNumberPhone(true);    
})

// Storage Memory .............................

function storeagearea(abc){
    const storage1 = document.getElementById('storage');
    let storageNumber = storage1.innerText;
    if(storageNumber < 1){
        storageNumber = parseFloat(storageNumber) + 150;

    }
    else{
        console.log('apnar kothao bhul hoise boss');
    }
    storage1.innerText = storageNumber;

    const totalPricee = document.getElementById('total-price');
    totalPricee.innerText =parseFloat( storageNumber) + 1299;


}

document.getElementById('storege-inpot').addEventListener('click', function(){
    storeagearea(true);

})
function delivaryKartehobeRe(boss){
    const delivary1 = document.getElementById('delivary');
    let delivaryNumber = delivary1.innerText;
    if(delivaryNumber < 1){
        delivaryNumber = parseFloat(delivaryNumber) + 20 ;
    }
    else{
        console.log('kothao bhul hoise re hala');
    }
    delivary1.innerText = delivaryNumber;

    const totalPrices = document.getElementById('total-price');
    
    
    totalPrices.innerText =parseFloat( delivaryNumber ) + 1299;
}

//Friday,your delivary opton  delivary-input  delivary
//........................................................//
//........................................................//

document.getElementById('delivary-input').addEventListener('click',function(){
    delivaryKartehobeRe(true);

})
