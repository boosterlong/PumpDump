import { tierOneLifts,
    squatTierTwo,
    firstWorkout,
    secondWorkoutSquats,
    thirdWorkoutSquats,
    secondWorkoutBench,
    thirdWorkoutBench,
    secondWorkoutDeadlift,
    thirdWorkoutDeadlift,
    firstReps,
    secondReps,
    thirdReps
   } from './workouts'

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}


function generateWorkout(lift) {
    if (lift == "squat"){
        return `First do ${lift}s for ${firstReps[getRandomInt(firstReps.length)]}.\n\nThen perform ${secondWorkoutSquats[getRandomInt(secondWorkoutSquats.length)]} for ${secondReps[getRandomInt(secondReps.length)]}\n\nFinally, do ${thirdWorkoutSquats[getRandomInt(thirdWorkoutSquats.length)]} for ${thirdReps[getRandomInt(thirdReps.length)]}`
    }
    else if (lift == "bench") {
        return `First do ${lift} for ${firstReps[getRandomInt(firstReps.length)]}.\n\nThen perform ${secondWorkoutBench[getRandomInt(secondWorkoutBench.length)]} for ${secondReps[getRandomInt(secondReps.length)]}\n\nFinally, do ${thirdWorkoutBench[getRandomInt(thirdWorkoutBench.length)]} for ${thirdReps[getRandomInt(thirdReps.length)]}`
    }
    else if (lift == "deadlift") {
        return `First do ${lift}s for ${firstReps[getRandomInt(firstReps.length)]}.\n\nThen perform ${secondWorkoutDeadlift[getRandomInt(secondWorkoutDeadlift.length)]} for ${secondReps[getRandomInt(secondReps.length)]}\n\nFinally, do ${thirdWorkoutDeadlift[getRandomInt(thirdWorkoutDeadlift.length)]} for ${thirdReps[getRandomInt(thirdReps.length)]}`
    }
}



export {
    getRandomInt,
    generateWorkout
}