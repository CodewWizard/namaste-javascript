console.log("promises");

const cart = ["shoes", "shirt", "t-shirt"];  

createOrder(cart)
// this will be called when promise get resolved
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
// this will be called when promise get rejected
.catch(function(err){
    console.log("in catch")
    console.log(err.message);
})

/// Producer

function createOrder(cart){
    const prom = new Promise((resolve, reject)=>{
        // createOrder
        // validateCart
        // orderId

        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        
        //logic for createOrder
        const orderId = '12345';
        if(orderId){
           setTimeout(() => {
                resolve(orderId)
           }, 3000);
        }
    })
    return prom;
}

function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    return new Promise((resolve, reject)=>{
        resolve("payment successful")
    })
}