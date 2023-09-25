(() => {
    // 1. Lexical scope & Dynamic scope
    // function printName() {
    //     console.log(this)
    // }
    // printName()

    // 2. How to know whai is 'This'
    // function printName() {
    //     console.log(this)
    //     console.log(`My name is ${this.name}`)
    // }
    // // 2.1 Invoker object
    // const kittipol = {name:'Kitti', printName}
    // const nomain = {name: 'nomain', printName}

    // kittipol.printName();
    // nomain.printName();

    //2.2 Global object (window,global)
    // name = 'global'
    // printName()

    //2.3 Constructor function
    // function Person(name) {
    //     this.name = name;
    //     this.printName = printName
    // }

    // const kitti = new Person('Kitti');
    // kitti.printName();

    //3. call(), apply(), bind()

    function printName(nationality,city) {
        console.log(this);
        console.log(`My name is ${this.name}, I'm ${nationality} and I live in ${city}`);
    }

    function Person(name, nationality, city) {
        this.name = name;
        this.nationality = nationality;
        this.city = city;

        printName(this.nationality,this.city)
        printName.call(this,this.nationality,this.city)
        printName.apply(this,[this.nationality,this.city])

        const printKitti = printName.bind(this);
        printKitti(this.nationality,this.city)
    }

    const kitti = new Person('Kitti', 'Thai', 'bangkok');

})();