const myAdvice = new Promise((resolve, reject) => {
    let result = 1 + 1
    if (result == 2){
        resolve("good work")
    } else {
        reject("you have failed")
    }
})

const result = async () => {
    try {
        const value = await myPromise;
        console.log(value);
    } catch {rejection} {
        console.log("reason of rejection" + rejection);
    }
};
result();