let data = [

{ name: "abc", roll: 1 },

{ name: "xyz", roll: 2 },

{ name: "one", roll: 3 }

]

const updatedData = data.map(eachObj=>({
    
    details:Object.values(eachObj)
    
})
)
console.log(`TYPE OF DATA = ${typeof(data)}`)

//console.log(updatedData[0]);

let final = {
    headers:['name','roll'],
}

//console.log(typeof(updatedData))

let output = []
output.push(final)

for(let eachDetails of updatedData){
    output.push(Object.values(eachDetails))
}
console.log(output)
