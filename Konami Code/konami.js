(() => {
    const konamiCode = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a'
    ];

    let index = 0;

    function onKeyDown(event) {
        event.key === konamiCode[index] ? index++ : (index = 0);

        console.log(event)

        if (konamiCode.length === index) {
            startSnowing();
        }
    }

    function run() {
        document.addEventListener('keydown', onKeyDown);
    }

    run();

    const canvas = document.getElementById('falling-snow-canvas');
    const canvasContext = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numberOfSnowBalls = 250;

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createSnowBalls(canvas, numberOfSnowBalls) {
        return [...Array(numberOfSnowBalls)].map(() => {
            return {
                x: random(0, canvas.width),
                y: random(0, canvas.height),
                opacity: Math.random(),
            };
        });
    }

    function drawSnowBall(canvasContext, snowBall) {
        canvasContext.beginPath();
        canvasContext.arc(snowBall.x, snowBall.y, 4, 0, 2 * Math.PI);
        canvasContext.fillStyle = `rgba(255, 255, 255, ${snowBall.opacity})`;
        canvasContext.fill();
        canvasContext.closePath();
    }

    function moveSnowBall(snowBall) {
        snowBall.x += 5;
        snowBall.y += 5;

        // Wrap snowballs around the canvas
        if (snowBall.x > canvas.width + 5 || snowBall.y > canvas.height + 5) {
            snowBall.x = random(0, canvas.width);
            snowBall.y = random(0, canvas.height);
        }
    }

    function startSnowing() {
        const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
        setInterval(() => {
            canvasContext.clearRect(0, 0, canvas.width, canvas.height);
            snowBalls.forEach((snowBall) => {
                drawSnowBall(canvasContext, snowBall);
                moveSnowBall(snowBall);
            });
        }, 50);
    }
})();
