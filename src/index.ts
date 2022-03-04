export enum TimeTypes {
    SECONDS,
    MINUTES,
    HOURS,
    DAYS,
    MONTHS,
    YEARS
}

export function TimeBalance(date1:Date, date2:Date, callback:(time:number, type:TimeTypes) => void){
    const time1 = date1.getTime()/1000  //got the number of seconds in the date since reference date
    const time2 = date2.getTime()/1000

    const diff = time1 - time2 
    
    if(diff < 60) callback(diff,TimeTypes.SECONDS)
    else if(diff < 60 * 60) callback(diff / 60,TimeTypes.MINUTES)
    else if(diff < 60 * 60 * 24) callback(diff / (60 * 60),TimeTypes.HOURS)
    else if(diff < 60 * 60 * 24 * 30) callback(diff / (60* 60 * 24),TimeTypes.DAYS)
    else if(diff < 60 * 60 * 24 * 30 * 12) callback(diff / (60* 60 * 24 * 30),TimeTypes.MONTHS)
    else callback(diff / (60* 60 * 24 * 30 * 12),TimeTypes.YEARS)
}

// TimeBalance(new Date("1995-12-20T04:30:30"), new Date("1990-12-17T03:24:00"), (time, type) => {
//     switch(type){
//         case TimeTypes.SECONDS:
//             console.log(`${time} seconds ago`)
//             break;
//         case TimeTypes.MINUTES:
//             console.log(`${time} minutes ago`)
//             break;
//         case TimeTypes.HOURS:
//             console.log(`${time} hours ago`)
//             break;
//         case TimeTypes.DAYS:
//             console.log(`${time} days ago`)
//             break;
//         case TimeTypes.MONTHS:
//             console.log(`${time} months ago`)
//             break;
//         case TimeTypes.YEARS:
//             console.log(`${time} years ago`)
//             break;
//     }
// })