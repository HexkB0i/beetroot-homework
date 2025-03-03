// Minimum
//
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
                breakTime = time / 4
            }


            if (time <= 1){
                minutes = time * 60;
                timeDisplay = `${minutes.toFixed(0)} minutes`;
            }else{
                hours = time + breakTime;
                timeDisplay = `${hours.toFixed(1)} hours`;
            };

            let fuelDisplay = distance * fuelPerKm

            console.log(`With ${this.make} ${this.model} you are able to travel ${distance}km in about ${timeDisplay} (with breaks) while consuming about ${fuelDisplay.toFixed(1)} litres of fuel.`)
        };
    },
};

auto.info()

