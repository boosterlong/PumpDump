import { tierOneLifts, squatTierTwo } from './workouts'

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function generateWorkout(lift) {
    if (lift == "squat"){
        return squatTierTwo[getRandomInt(squatTierTwo.length)]
    }
    else if (lift == "bench") {
        return "Bench Press"
    }
    else if (lift == "deadlift") {
        return "Deadlift"
    }
}



export {
    getRandomInt,
    generateWorkout
}