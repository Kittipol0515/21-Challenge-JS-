(() => {
    // 1. NaN
    // if (NaN === NaN) {
    //     console.log('Equality')
    // } else {
    //     console.log('Inequality')
    // }
    
    // // Check NaN
    // const result = 1 / 'hello world';
    // if (Number.isNaN(result)) {
    //     console.log('Equal to NaN')
    // }
    
    // 2. Type Conversion
    if ( 3 > 2 > 1) {
        console.log('Inside Type Conversion')
    }

    console.log(2 - '1')
    console.log(2 + '1')
    console.log(2 + Number.parseInt('1',10))

    // 3. Interpreter & compiler
    function getPerson() {
        return {
            name: 'John',
            age: 25
        };
    }
    console.log(getPerson())

    // 4. Checking object type

    const person = {};
    if(typeof person === 'object' && person != null) {
        console.log('True Object')
    } else {
        console.log('False Object')
    }
})();