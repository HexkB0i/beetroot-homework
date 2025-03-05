// 1) Auto object 

const auto= {
    make: 'Buick',
    model: 'Park Avenue',
    year: '1998',
    avgSpeed: '90',
    tankVolume: '72',
    avgFuelConsumption: '12',
    drivers: ['Patrick', 'Martin', 'Jesse'],
    
    info: function(){
        console.log(`Information about the car: \n Make: ${this.make} \n Model: ${this.model} \n Production year: ${this.year} \n Average speed: ${this.avgSpeed} km/h \n Fuel tank volume: ${this.tankVolume} litres\n Average fuel consumption (per 100km): ${this.avgFuelConsumption} litres \n Drivers: ${this.drivers.join(', ')}`);
    },
    
    addDriver: function(driver){
        let lowercaseArr = this.drivers.map((item) => item.toLowerCase());

        if (lowercaseArr.indexOf(driver.toLowerCase()) === -1){
            this.drivers.push(driver);
            console.log('Driver added.');
        }else{
            console.log('Driver already in the list.');
        };
    },

    checkDriver: function(){
        let lowercaseArr = this.drivers.map((item) => item.toLowerCase());

        if (lowercaseArr.indexOf(driver.toLowerCase()) === -1){
            console.log('Driver is not in the list.');
        }else{
            console.log('Driver is in the list.');
        };
    },

    calcFuelUse: function(distance){
        if (isNaN(+distance)){
            console.log('Please enter distance as a number.')
        }else{
            let time = distance / this.avgSpeed;
            let fuelPerKm = this.avgFuelConsumption / 100;
            let timeDisplay;
            
            let breakTime = 0;
            if (time >= 4){
                breakTime = time % 4
            }


            if (time <= 1){
                minutes = time * 60;
                timeDisplay = `${minutes.toFixed(0)} minutes`;
            }else{
                hours = time + breakTime;
                timeDisplay = `${hours.toFixed(1)} hours`; };

            let fuelDisplay = distance * fuelPerKm

            console.log(`With ${this.make} ${this.model} you are able to travel ${distance}km in about ${timeDisplay} (with breaks) while consuming about ${fuelDisplay.toFixed(1)} litres of fuel.`)
        };
    },
};

auto.info()


// 2) Time display object

let dateTime = new Date();

const adjustableTime = {
    hours: dateTime.getHours(),
    minutes: dateTime.getMinutes(),
    seconds: dateTime.getSeconds(),
    
    printTime: function(){
        console.log(`Time right now is ${this.hours}:${this.minutes}:${this.seconds}`)
        return `${this.hours}:${this.minutes}:${this.seconds}`
    },

    // operation takes a number. 1 for adding, 0 for subtracting
    changeTime: function(addHour, addMinute, addSecond, operation){
       console.log(`Unadjusted time is: ${this.hours}:${this.minutes}:${this.seconds}`)

       if (operation === 1){

            this.hours = this.hours + addHour;
            this.minutes =  this.minutes + addMinute;
            this.seconds = this.seconds + addSecond;

            if (this.seconds >= 60){
                this.seconds -= 60;
                this.minutes++;
            };
            if (this.minutes >= 60){
                this.minutes -= 60;
                this.hours++;                
            };
            if (this.hours >= 24){this.hours = 0};

            console.log(`Adjusted time is: ${this.hours}:${this.minutes}:${this.seconds}`)

            return `${this.hours}:${this.minutes}:${this.seconds}`

        } else if (operation === 0){
            this.hours = this.hours - addHour;
            this.minutes =  this.minutes - addMinute;
            this.seconds = this.seconds - addSecond;

            if (this.seconds <= 0){
                this.seconds += 60;
                this.minutes--;
            };
            if (this.minutes <= 0){
                this.minutes += 60;
                this.hours--;
            };
            if (this.hours <= 0){this.hours += 24};
           
            console.log(`Adjusted time is: ${this.hours}:${this.minutes}:${this.seconds}`)
            return `${this.hours}:${this.minutes}:${this.seconds}`
        }
    },
};

// Time calculator UI
let currentTimeEl = document.querySelector('.time-current');

function refreshTime(){
    return currentTimeEl.innerText = `The current time is ${adjustableTime.printTime()}`;
};

setInterval(refreshTime, 1000);


let hourInput = document.querySelector('#hour-input').valueAsNumber;
let minuteInput = document.querySelector('#minute-input').valueAsNumber;
let secondInput = document.querySelector('#second-input').valueAsNumber;

let btnAdd = document.querySelector('#btn-add');
let btnSubtract = document.querySelector('#btn-subtract');
 
function addTime() {
    let res = adjustableTime.changeTime(hourInput, minuteInput, secondInput, 1);
    document.querySelector('.adjust-result').innerHTML = `<span>The adjusted time is ${res}</span>` 
};

function subtractTime() {
    let res = adjustableTime.changeTime(hourInput, minuteInput, secondInput, 0);
    document.querySelector('.adjust-result').innerHTML = `<span>The adjusted time is ${res}</span>` 
};

btnAdd.addEventListener('click', addTime);
btnSubtract.addEventListener('click', subtractTime);
