const color = ["red","yello","blue","black"] 
 
const randomColor = (arr:string[]):void =>{ 
  const newArray:number[] = [] 
    for(let i =0; i<arr.length;i++){ 
      let random= Math.floor(Math.random()*arr.length)           
        if(!newArray.includes(random)){ 
          console.log(arr[random]) 
          newArray.push(random) 
        }; 
    } 
} 
 
randomColor(color)