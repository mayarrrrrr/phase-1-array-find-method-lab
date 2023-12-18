const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
];



function superbowlWin(finalResult) { 
    return finalResult.result === "W"
    
}
console.log(record.find(superbowlWin).year)