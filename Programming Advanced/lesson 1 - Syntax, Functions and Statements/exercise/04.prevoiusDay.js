function prevDay(year,month,day) {
    let date=new Date(year,month-1,day)
    
    date.setDate(date.getDate(0) - 1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}
