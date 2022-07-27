function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    let attempts = 0;
    let count = 0;
    return new Promise((resolve, reject) => {
        if (count < 5){
            attempts ++
            let result = tossCoin();
            if (result === "heads"){
                resolve(count++, "Count is" + attempts)
            }
        else{
            reject("Not Heads Attempts Run:" + attempts)
        }
        return "It Took" + attempts;
        }
        
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");


