function foo(param){
    let students={}
    
    for(let student of param){
      student=student.split(" ")
      let name=student.shift()
      if(!students[name]){
        students[name]=student
      }else{
        for(let grade of student)
        students[name].push(grade)
      }
    }

    for(let key in students){
      let sum=0
      for(let grade of students[key]){
        sum+=Number(grade)
      }
      let avg=sum/students[key].length
      students[key]=avg
    }
    let arr=Object.entries(students).sort((a,b)=>{return a[0].localeCompare(b[0])})
    for(let student of arr){
      console.log(`${student[0]}: ${student[1].toFixed(2)}`);
    }
}