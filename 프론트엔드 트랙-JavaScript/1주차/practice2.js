// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Click!!!!!")
// });


// var num=0;
// document.getElementById('plus').addEventListener("click", function(){
//     num++;
//     document.getElementById("num").innerHTML=num;
// })

// var num=0;
// document.getElementById('minus').addEventListener("click", function(){
//     num--;
//     document.getElementById("num").innerHTML=num;
// })


document.querySelector(".bar").addEventListener("click",function(){
    document.querySelector(".bar").innerHTML="눌렀어!";
    
    document.querySelector(".newbar").classList.toggle("show");
});

