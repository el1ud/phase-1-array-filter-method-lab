// Code your solution here
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, Bobby){
    const matchingn= Bobby.toLowerCase()
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === matchingn)
    return matchingDrivers
}
function fuzzyMatch(drivers, driversName){
    return drivers.filter(driver => {
        return driver.toLowerCase().indexOf(driversName.toLowerCase()) === 0
    })
}

function matchName(drivers, name){
    return drivers.filter(driver =>{
        return driver.name === name
    })
}