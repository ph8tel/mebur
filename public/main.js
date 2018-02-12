window.onload = function() {

    let seconds = 00;
    let minutes = 00;
    const secondsBlock = document.getElementById("seconds")
    const minutesBlock = document.getElementById("minutes")
    const startButton = document.getElementById('button-start');
    const stopButton = document.getElementById('button-stop');
    const totalButton = document.getElementById('button-reset');
    const totalDisplay = document.getElementById('total');
    const taxiImage = document.getElementById('taxi-image');
    const title = document.getElementById('title');

    let Interval;
    const rideTotal = (seconds, mins) => {
        let billTotal, meter;
        if (minutes) {
            meter = minutes === 1 ? "minute" : "minutes"
            billTotal = minutes * .25
            if (billTotal % 1 === .5) {
                billTotal += '0'
            }
            if (billTotal % 1 === 0) {
                billTotal += '.00'
            }
        } else {
            meter = "seconds"
            billTotal = '2 Flat rate'
        }
        const runningTemplate =
            `<p>Rate: .25$ / minute</p>
         <p>Amount Due: $${billTotal}</p>`
        return runningTemplate;
    }
    startButton.onclick = () => {
        console.log(taxiImage.src)
        taxiImage.src = "img/taxi-dribble.gif"
        totalDisplay.innerHTML = '<p>Flat rate of $2.00</p><p>until minimum is met</p> '
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
    }

    stopButton.onclick = () => {
        clearInterval(Interval);
        taxiImage.src = "img/taxi-dribble.png"

    }

    totalButton.onclick = () => {

        clearInterval(Interval);

        let meter = minutes === 1 ? 'minute' : 'minutes';
        const totalTemplate = `
        <p>Time: ${minutes} ${meter}</p>
        ${rideTotal(seconds, minutes)}
        `
        totalDisplay.innerHTML = totalTemplate;
        taxiImage.src = "img/taxi-dribble.png"
        seconds = "00";
        minutes = "00";
        minutesBlock.innerHTML = minutes;
        secondsBlock.innerHTML = seconds;

    }

    const startTimer = () => {
        seconds++;
        if (seconds > 59) {
            minutes++;
            seconds = 00;
            minutesBlock.innerHTML = minutes;
            totalDisplay.innerHTML = rideTotal(seconds, minutes);
        }
        if (seconds < 9) {
            secondsBlock.innerHTML = "0" + seconds;
        }
        if (seconds > 9) {
            secondsBlock.innerHTML = seconds;
        }
    }

}