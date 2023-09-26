(() => {
    
    let draggingElem;

    function onDragStart() {
        draggingElem = this;
    }

    function onDrop() {
        this.append(draggingElem);
        draggingElem = null;
    }

    function onDragOver(e) {
        e.preventDefault();
    }

    function onDragEnter(e) {
        e.preventDefault();
    }

    function run(){
        const taskElems = Array.from(document.querySelectorAll('.task'));
        const dropZoneElems = Array.from(document.querySelectorAll('.drop-zone'));
        
        taskElems.forEach((taskElem) => {
            taskElem.addEventListener('dragstart',onDragStart)
        })

        dropZoneElems.forEach((dropZoneElem) => {
            dropZoneElem.addEventListener('drop',onDrop);
            dropZoneElem.addEventListener('dragover',onDragOver);
            dropZoneElem.addEventListener('dragenter',onDragEnter);
        })
    }
    run();
})();