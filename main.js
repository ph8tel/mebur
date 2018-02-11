window.onload = function() {

    let seconds = 00;
    let tens = 00;
    const appendTens = document.getElementById("tens")
    const appendSeconds = document.getElementById("seconds")
    const buttonStart = document.getElementById('button-start');
    const buttonStop = document.getElementById('button-stop');
    const buttonReset = document.getElementById('button-reset');
    const totalDisplay = document.getElementById('total');

    let Interval;

    buttonStart.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = () => {
        let billTotal = seconds * .25
        totalDisplay.innerHTML = '$' + billTotal
        clearInterval(Interval);
    }

    buttonReset.onclick = () => {
        clearInterval(Interval);
        console.log(tens, seconds, 'times')
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    const startTimer = () => {
        tens++;

        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }

}