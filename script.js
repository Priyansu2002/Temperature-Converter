

const tempLoad = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "#ffa41b";

    setTimeout(() => {
        temp.innerHTML = "&#xf2ca;";
        temp.style.color = "#ffa41b";
    }, 1000)

    setTimeout(() => {
        temp.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        temp.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        temp.innerHTML = "&#xf2c7;";
        temp.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    temp.style.color = "#ffa41b";
    tempLoad();
}, 9000);


tempLoad();

const calculateTemp = () => {
    const numberTemp = document.getElementById('temp1').value;
    // console.log(numberTemp);

    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valeTemp);


    // Convert temperature from Celcius to Fahrenheit
    const celciusTOfahrenheit = (cel) => {
        let fahrenheit = (cel * (9 / 5) + 32);
        return fahrenheit;
    }

    // Convert temperature from Fahrenheit to Celsius
    const fahTOcel = (fehr) => {
        let celsius = ((fehr - 32) * 5 / 9);
        return celsius;
    }

    let result;
    if (valeTemp == "cel") {
        result = celciusTOfahrenheit(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    } else {
        result = fahTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }

    setTimeout(() => {
        window.location.reload();
    }, 1500);
}

 