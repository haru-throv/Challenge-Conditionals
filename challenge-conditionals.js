/* 
    ? Challenge
    * answer in Discord in #project-showcase
    * create an age variable
    * create a country variable
    * if a user is > 21 and country is US, they can drink
    * if a user is > 18 an country is Germany, they can drink
    * if a user is > 16 and country is US, they can drive
    * if a user is > 18 and the country is Germany, they can drive
    * if a user is < 18 the user is underage
    ! Spicey Mode: what if the value of a variable is something wrong? How will you handle it?
*/



let age = 20;
let country = "US";

if (typeof age !== "number" || age < 0) {
    console.log("Invalid age.");
} else if (country !== "US" && country !== "Germany") {
    console.log("Invalid country.");
} else {
    if (country === "US" && age > 21) {
        console.log("You can drink.");
    } else if (country === "Germany" && age > 18) {
        console.log("You can drink.");
    }

    if (country === "US" && age > 16) {
        console.log("You can drive.");
    } else if (country === "Germany" && age > 18) {
        console.log("You can drive.");
    }

    if (age < 18) {
        console.log("You are underage.");
    }
}