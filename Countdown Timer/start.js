 (() => {
    const SECOND = 1000
    const MINUTE = 60 * SECOND
    const HOUR = 60 * MINUTE
    const DAY = 24 * HOUR

    function setElementInnnerText(id,text) {
        const element = document.getElementById(id)
        element.innerText = text
    }

    function countDown() {
        const now = new Date().getTime()
        const newYear = new Date('December 31, 2023 23:59:59').getTime()
        const unixTimeLeft = newYear - now

        // const daysElem = document.getElementById('days')
        // daysElem.innerHTML = Math.floor(unixTimeLeft / DAY)
        setElementInnnerText('days',Math.floor(unixTimeLeft / DAY))
        setElementInnnerText('hours',Math.floor(unixTimeLeft % DAY / HOUR))
        setElementInnnerText('minutes',Math.floor(unixTimeLeft % HOUR / MINUTE))
        setElementInnnerText('seconds',Math.floor(unixTimeLeft % MINUTE / SECOND))
    }
    
    
    function run(){
        countDown()
        setInterval(countDown,SECOND)
    }
    run()
 })()