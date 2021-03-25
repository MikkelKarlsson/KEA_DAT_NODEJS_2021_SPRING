new Promise((resolve, reject) => {
    resolve("Everything went well.");
}).then(message => {
    console.log(message);
});

setTimeout(() => {
    console.log("time has passed");
}, 4000);