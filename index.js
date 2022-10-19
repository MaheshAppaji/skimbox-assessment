let arr = [2,5,7,9];
let output = [];

// let index_list = arr.findIndex((eachItem)=>{
//     console.log(eachItem)
// })

function searchIndex(arr,val){
    // arr.map(eachItem=>{
    //     if(eachItem === val){
    //         console.log(arr.indexOf(eachItem))
    //     }else{
    //         console.log(-1);
    //     }
        
        
    // })

    for(let eachItem in arr){
        //console.log(eachItem, arr[eachItem])
        if(arr[eachItem] === val){
            output.push(eachItem);
        } else{
            output.push(-1)
        }
        
    }
    return output

    
}
// searchIndex(arr,10)

let result = searchIndex(arr,7)
console.log(result);