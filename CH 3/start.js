(() => {

    // 1. How Async code work in JavaScript

    // function simulateAsyncAPI(text,timeout){
    //     setTimeout (() => console.log(text),timeout);
    // }
    // simulateAsyncAPI('A',1000)
    // simulateAsyncAPI('B',500)
    // simulateAsyncAPI('C',100)

    // 2. Callback
    // function simulateAsyncAPI(text,timeout,callback) {
    //     setTimeout(() => {
    //         console.log(text);

    //         if(callback){
    //             callback();
    //         } 
    //     },timeout);
    // };
    // simulateAsyncAPI('A',1000,() => {
    //     simulateAsyncAPI('B',500,() => {
    //         simulateAsyncAPI('C',100)
    //     })
    // })

    //3.Promise
    function simulateAsyncAPI(text,timeout){
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                console.log(text);
                resolve();
            },timeout);
        })
    }
    simulateAsyncAPI('A',1000)
    .then(() => {
        console.log('Promise')
    })
    simulateAsyncAPI('B',500)
    simulateAsyncAPI('C',100)

})()