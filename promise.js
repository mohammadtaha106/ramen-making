
function getnoodles() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const noodles = "🍝"
            resolve(noodles)
        }, 2000);
    })


}
function getfishcake(noodles) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fishcake = "🍥"
            // reject("bad quality fishcake")
            resolve(fishcake)
        }, 2000);
    })


}
function makeramen(fishcake) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ramen = "🍜"
            resolve(ramen)
        }, 2000);
    })


}
getnoodles().then((noodles) => {
    console.log("here is the noodles ", noodles)
    return getfishcake(noodles)
        .then((fishcake) => {
            console.log("here is the fishcake ", fishcake)
            return makeramen(fishcake)
                .then((ramen) => {
                    console.log("here is your ramen", ramen)


                }).catch((data)=>{
                    console.log('badluck its our offtime',data);
                })
                .finally(()=>{
                    console.log("process finished");
                })

        })
})
// async function orderRamen()
//  {
//     try{
//     const noodles = await getnoodles()
//     console.log("here is the noodles ", noodles)

//    const fishcake = await getfishcake(noodles)
//     console.log("here is the fishcake ", fishcake)

//    const ramen = await  makeramen(fishcake)
//     console.log("here is your ramen", ramen)
//     }
//    catch (error) {
//     console.log('unknown error occured');
        
//     }
//     console.log('process finished');
// }
// orderRamen();