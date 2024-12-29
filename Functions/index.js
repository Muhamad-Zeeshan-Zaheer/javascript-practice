//function is used to reuseable code
function sayhehlo()
{
     console.log("hello")
}

sayhehlo()
sayhehlo()
sayhehlo()
sayhehlo()
sayhehlo()


function add()
{
    let ans=0
    for(let i=0;i<arguments.length;i++)
    {
        ans=ans+arguments[i]
    }
    return ans
}

let result=add(6,7) //known as calling of function 
console.log(result)





//parameters can while creting the function 

//argument is used while calling a function 


function  multiply(a,b){

    return a*b
}



multiply(3,5)





function div()
{


}
//in js there is object named arguments which is used to pass unlimited paramters to the function 




function add4(...numbers)
{
    let ans=0
    for(let i=0;i<numbers.length;i++)
    {
        ans=ans+numbers[i]
    }
    return ans
}

 result=add(6,7,98) //known as calling of function 
console.log(result)