function timeToWalk(steps,stepLength,speed) {
    let distance=steps*stepLength
    let rest=Math.floor(distance/500)
    let metersPerSecont=speed/3.6

    let time=distance/metersPerSecont
    
    let minutes=Math.floor(time/60)
    let seconds=Math.round(time - minutes*60)
    let hours=Math.floor(time/3600)
    console.log(`${hours<10?'0':''}${hours}:${minutes+rest<10?'0':''}${minutes+rest}:${seconds<10?'0':''}${seconds}`);
}
