// const input=prompt();
// if (!input){
//     console.log("입력값이 없습니다.")
// } else{
//     console.log(input);
// }

// const result=fetch("")
// console.log(result);

// fetch("")
// .then(res=>res.json())
// .then(console.log);
// console.log('test');

// const me ={
//     name: "유예빈",
//     age: 26,
//     gender: 'male'
// };

// const someone={
//     name: "홍길순",
//     age: 27,
//     gender: "female"
// };
//  function addMilitaryStateIfMale(person){
//      if(person.gender==='male'){
//          person.militaryState=false;
//      }
//     } 

//     addMilitaryStateIfMale(me);
//     addMilitaryStateIfMale(someone);

//     function parseBoolean(value){
//         if(value===true){
//             return "참";
//         } else if (value===false){
//             return "거짓";
//         }
//     }

//     // if (me.militaryState !==undefined){
//     //     console.log(parseBoolean(me.militaryState))
//     // }



//     // if (someone.militaryState !==undefined){
//     //     console.log(parseBoolean(me.militaryState))
//     // }

//     me.militaryState!==undefined&&console.log(parseBoolean(me.militaryState));
//     someone.militaryState!==undefined&&console.log(parseBoolean(someone.militrayState));


// const input=promp();

// if (input===""){
//     console.log("입력값이 없습니다.");
// } else{
//     console.log(input())
// }



// const me={
//     name: "유예빈",
//     age: 26,
// };

// const{name,age}=me;


// const name=me.name;

// console.log(name);

// const me={
//     name: "유예빈",
//     age: 26,
// }

// const militaryMe={
//     ...me,
//     militaryState: false,
// }

// console.log(military Me)

// const animals=["개","고양이"];
// const anotherAnimals=[...animals, "참새"];

// console.log(anotherAnimals);

const me={
    name: "유예빈",
    age: 26,
    militaryState: false,
}

const {militaryState, ...another}=me;

console.log(another);

const numbers=[0,1,2,3,4,5,6];

const [zero,...rest]=numbers;

console.log(rest);

