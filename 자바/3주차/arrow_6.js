const getObject=()=>{
    return {
        name:"철수",
        age:20
    }
}


const getObject=()=>({
    name:"철수"
    age:20
});
const obj=getObject();
console.log(obj.name);
