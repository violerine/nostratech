
//CHALLENGE 1
function findKPK(n){
    let min = 1
    let kpk = 0
    let multiple = n
    
    while ( kpk === 0){
      for(var i= min; i<=n; i++){
        if(multiple % i !==0){
          break;
        }
        if(i == n){
          kpk = multiple
        }
      }
      multiple += n
    }
    return kpk
 }
 
 console.log(findKPK(10))


//CHALLENGE 2
 function fibonaci(idx){
    let arrTemp = [0,1]
    for(let i=2; i<idx; i++){
      let nextNumber = arrTemp[arrTemp.length-1] + arrTemp[arrTemp.length-2]
      console.log(nextNumber)
      console.log(idx)
      if(nextNumber>idx){
        return arrTemp
      }
      
      arrTemp.push(nextNumber)
    }
    return arrTemp
  }
  
  console.log(fibonaci(9))