function outer(x){
    return function inner(){
        return x*x;
    }
}

const outer (x)=>()=> x*x;


const innerFuc=outer(10);
cosnt result =innerFuc();
console.log(result);
