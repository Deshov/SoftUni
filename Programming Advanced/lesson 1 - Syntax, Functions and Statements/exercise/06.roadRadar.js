function roadRadar(speed,zone){
    let limit;
    let status;
    let difference;
    switch (zone) {
        case "motorway":
            limit=130;
            break;

        case "interstate":
            limit=90;
            break;

        case "city":
            limit=50;
            break;

        case "residential ":
            limit=20;
            break;
    
        }

    
    difference=Number(speed)-Number(limit);

    if (difference>0&&difference<20) {
        status="speeding"
    }else if(difference<40){
        status="excessive speeding"
    }else {
        status="reckless driving"
    }
    if(difference<=0){
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }else{
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

roadRadar(21,'residential')