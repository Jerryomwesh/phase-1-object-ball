// console.log('Advanced debugging example running.')
// debugger

// // first, define the function.
// function goodPractices() {
//   let game = gameObject();
//   for (let gameKey in game) {
//     // are you ABSOLUTELY SURE what 'gameKey' is?
//     // use the debugger to find out!
//     debugger
//     let teamObj = game[gameKey]
//     for (let teamKey in teamObj) {
//       // are you ABSOLUTELY SURE what 'teamKey' is?
//       // use debugger to find out!
//       debugger

//       // what is 'data' at each loop through out this block?
//       // when will the following line of code work and when will it break?
//       let data = teamObj.player
//       for (let key in data) {
//         debugger
//       }
//     }
//   }
// }

// // then, call the function so it runs!
// goodPractices()



// Function to debug deeply nested objects
function goodPractices() {
    let game = gameObject();
    for (let gameKey in game) {
        debugger; // Check what gameKey is
        let teamObj = game[gameKey];

        for (let teamKey in teamObj) {
            debugger; // Check what teamKey is
            let data = teamObj.players; // Fixing typo (should be players, not player)

            for (let key in data) {
                debugger; // Check player data
            }
        }
    }
}

// Call function to trigger debugging
goodPractices();
