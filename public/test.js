const items= [
    { id: "A222", name : "coffee"},
    { id:"B333" , name : "tea" },
    { id:"C555", name : "juice"}
  ]
const  item = items.filter(item => item.id != "C555" )
console.log(item);