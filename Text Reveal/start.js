(() => {

    function onScroll() {
        const sectionelems = Array.fromdocument.querySelectorAll('section')
        console.log(sectionelems)
    }

    function run(){
        document.addEventListener('scoll',onScroll)
    }
    run()
})();