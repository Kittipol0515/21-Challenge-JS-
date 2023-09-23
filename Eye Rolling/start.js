(() => {
    function run() {
        const bodyElem = document.querySelector('body')
        const eyeElem = document.querySelector('eye')

        function onMouseMove({pageX,pageY}) {
            eyeElem.forEach((eyeElem) => {
               const {left,top} =  eyeElem.getBoundingClientRect()

               const eyeCenterX = left + eyeElem.offsetWidth / 2
            })
        }

        bodyElem.addEventListener('mousemove', onMouseMove)
    }
    run()
})();