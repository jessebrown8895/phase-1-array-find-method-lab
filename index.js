
function superbowlWin(arrayOfObjects){
    let winners = arrayOfObjects.find(record => record.result === "W")
    return winners ? winners.year : undefined
    // let winners = arrayOfObjects.find(function(record) { 
    //     return record.result === "W"
    // })
    // if (winners){
    //     return winners.year 
    // }
    // else{
    //     return undefined
    // }

}
