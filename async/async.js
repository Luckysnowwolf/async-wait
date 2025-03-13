const myAdvice = () => {
    return new myAdvice((resolve, reject) => {
    let outcome = Math.random() > 0.5;
    outcome ? resolve("good work") : reject("you have failed")
    
})
}

const result = async (id) => {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
        const data = await response.json();
        console.log(`advice (ID: ${id})`, data.slip.advice);
    } catch (reject) {
        console.log("reason of rejection no good advice found", reject);
    }
};
result();