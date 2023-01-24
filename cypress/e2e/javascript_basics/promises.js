/**
 Cypress is promise aware so if you return a promise from inside commands like .then()
 Cypress will not continue until those promise resolve
 */

 function getNumber(currency) {
    return new Promise((resolve, reject) => {
        if (typeof currency != "number") {
            reject(new Error('currency is NOT a number !!!'))
        } else {
            resolve(currency)
        }
    })
}

getNumber("1000").then((val)=>{
    console.log('val',val)
})