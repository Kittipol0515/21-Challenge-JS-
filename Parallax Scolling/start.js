(() => {

    function onScroll(){
        const moonElem = document.querySelector('.moon')
        const wishElem = document.querySelector('.wish')

        moonElem.style.transform = `translate(${window.scrollY * 1.0}%, ${window.scrollY * -1.0}%)`;
        wishElem.style.transform = `translateY(${window.scrollY * -1.0}%`;

    }


    function run() {
        document.addEventListener('scroll', onScroll)
    }
    run()
})();