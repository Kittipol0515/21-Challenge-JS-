(() => {

    function random(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createDucks() {
        return [...Array(5)].map(() => {
            return {
                x: random(0, window.innerWidth),
                y: random(0, window.innerHeight),
                speedX : random(-50,50),
                speedY : random(-50,50)
            }
        })
    }


    function setupDuckElement(duck) {
        const duckElem = document.createElement('div')
        duckElem.className = 'duck';
        duckElem.style.left = `${duck.x}px`;
        duckElem.style.top = `${duck.y}px`;
        duckElem.style.backgroundImage = 'url';
        document.body.appendChild(duckElem)
    }

    function run(){
        const ducks = createDucks()
        ducks.map(setupDuckElement)
    }
    run();
})()