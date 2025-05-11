let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a === 2) {
        resolve("Seccuess")
    } else {
        reject("Failed ")
    }
})
p.then((massege) => {
    console.log("THis is in the then", massege);
}).catch((massege) => {
    console.log("THis is in the Catch", massege);
})