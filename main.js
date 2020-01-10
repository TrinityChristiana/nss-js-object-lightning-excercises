const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
};

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

let empireStories = empireStateBuilding.stories;
let empireHeight = empireStateBuilding.height;
let empireSquareFeet = empireStateBuilding.squareFeet;
let empireEastWestLength = empireStateBuilding.eastWestLength;
let empiresNorthSouthLength = empireStateBuilding.northSouthLength;

console.log(
`   
    Stories: ${empireStories}
    Height: ${empireHeight}
    Square Feet: ${empireSquareFeet}
    East-West Length: ${empireEastWestLength}
    North-South Length: ${empiresNorthSouthLength}
`
);

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

let empireAddress = empireStateBuilding["address"];
let empireConstructionate = empireStateBuilding["constructionDate"];
let empireCost = empireStateBuilding["cost"];
let empireOwner = empireStateBuilding["owner"];
let empireArchitect = empireStateBuilding["architect"];

console.log(
`
    Address: ${empireAddress}
    Construction Date: ${empireConstructionate}
    Cost: ${empireCost}
    Owner: ${empireOwner}
    Architect: ${empireArchitect}
`
);

// **************************************************************


const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
let nssFullTime = nashvilleSoftwareSchool.instructors.fullTime;
let nssPartTime = nashvilleSoftwareSchool.instructors.partTime;

console.log(
`
    Part Time Instructors: ${nssPartTime.join(", ")}
    Full TIme Instructors: ${nssFullTime.join(", ")}
`);

// Lightning Exercise 2: Output only Andy and Zoe in the console.

console.log(
`
    ${nashvilleSoftwareSchool.instructors.fullTime[4]}
    ${nashvilleSoftwareSchool.instructors.partTime[0]}
`
);