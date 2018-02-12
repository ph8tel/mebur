window.onload = function() {

    let seconds = 00;
    let minutes = 00;
    const secondsBlock = document.getElementById("seconds")
    const minutesBlock = document.getElementById("minutes")
    const startButton = document.getElementById('button-start');
    const stopButton = document.getElementById('button-stop');
    const totalButton = document.getElementById('button-reset');
    const totalDisplay = document.getElementById('total');

    let Interval;
    const rideTotal = (seconds, mins) => {
        let billTotal, meter, time;
        if (minutes) {
            time = minutes
            meter = time === 1 ? "minute" : "minutes"
            billTotal = minutes * .25
        } else {
            time = seconds
            meter = "seconds"
            billTotal = '2 Flat rate';
        }
        const totalTemplate = `
          <h2>Your total for today</h2>
          <h3>Time: ${time} ${meter}</h3>
          <h3>Rate: .25$ / minute</h3>
          <h2>Total: $${billTotal}</h2>
        `
        totalDisplay.innerHTML = totalTemplate;
    }
    startButton.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
    }

    stopButton.onclick = () => {
        clearInterval(Interval);
    }

    totalButton.onclick = () => {

        rideTotal(seconds, minutes);

        clearInterval(Interval);
        seconds = "00";
        minutes = "00"
        minutesBlock.innerHTML = minutes;
        secondsBlock.innerHTML = seconds;
    }

    const startTimer = () => {
        seconds++;
        if (seconds > 59) {
            minutes++;
            seconds = 00;
            minutesBlock.innerHTML = minutes;
        }
        if (seconds < 9) {
            secondsBlock.innerHTML = "0" + seconds;
        }
        if (seconds > 9) {
            secondsBlock.innerHTML = seconds;
        }
    }

}