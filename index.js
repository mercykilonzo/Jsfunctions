// all alements in an array in ascending order
function reversedAsc(arr) {
    const reversedArry = arr.map(str =>str.split("").reverse().join(""))
    return reversedArry.sort();
}
console.log(reversedAsc(["Mercy", "Joy", "Anne", "Purity"]));

// 2. Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero



function positiveNeg(arr){
    arr.map(num=> {
        if(num >0) {
            console.log("positive");
       }
       else if(num == 0){
            console.log("zero");
       }
   
   else{
       console.log("negative");
       


}})};
   

positiveNeg([-2, 5, 0, 0, 5, 12, 10])

// 3. 



// 4.Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function double(arr) {
    arr.forEach(num =>{
        console.log(num *2);
        
    })};
    double([5,10,20,15,7]);


//  5.Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5
    function mutipleAddition(arr){

       let newArr=[]
        arr.forEach(num => { 
        if(num < [5]){
            console.log( num * 8); 
            newArr.push(num)           
        }
        if(num >arr.length-2) {
            newArr.push(num)
            
        }
            return newArr         
    })
    };
    const newArr = mutipleAddition([1,2,3,4,5,6,7,8])
    console.log({newArr});
    