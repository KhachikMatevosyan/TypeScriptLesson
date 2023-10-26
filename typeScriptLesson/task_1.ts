const data = [
    {
        firstName: "Karen",
        lastName: "Karapetyan",
        age: null
    },
    {
        firstName: "Karen",
        lastName: "Karapetyan",
        age: 18,
        profession: undefined
    },
    {
        firstName: "Vardan",
        lastName: "Vardanyan",
        age: 18,
        profession: {
            name: "Programmer",
            level: "Middle",
            stack: [{ name: "Node JS" }, { name: "React JS" },{ name: undefined }]
        }
    }
];

 function removeNullUndefined(array:any[]){
    const result = array.map(function(item){
        const newDate: any = {}
            for(let key in item){
                if(item[key] !== null && item[key] !== undefined){
                    newDate[key]=item[key]
                }
            }
        return newDate
    })
    return result
}
  console.log(removeNullUndefined(data))