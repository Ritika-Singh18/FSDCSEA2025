// console.log("Hello");

// const div = document.getElementsByTagName('div');
// console.log(div);
// div[0].innerText="HELLO WORLD";
// div[0].style.color='brown';

// const container = document.getElementsByClassName("container");
// console.log(container);
// container[0].innerHTML= '<h2 style=color:brown >Welcome to ABES</h2>'

// const h1 = document.createElement('h1');
// h1.innerHTML="CSE";
// h1.style.color='blue'
// console.log(h1);
// container[0].appendChild(h1);


// const img = document.createElement('img');
// img.src="https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649172.jpg";
// img.setAttribute("height","200px");
// img.setAttribute("width","300px");
// console.log(img);
// container[0].appendChild(img);


// const button = document.getElementById('btn');
// console.log(button);


// function displayData(){
//   document.getElementById('disp').innerHTML="<h2>Data is loading...</h2>"


//   setTimeout(() => {
    
//     console.log('Hi....inside display');
//   document.getElementById('disp').innerHTML="";
//   },1000);
  
  
  
// }
// button.addEventListener('click',displayData);


// const button = document.getElementById('btn');
// console.log(button);
// function longData(){
//   console.log("Start");
//   for(i=0;i<100000;i++){
//     console.log(i);
//   }
//   console.log("End");
// }
// button.addEventListener('click',longData);

// function msg(){
//   console.log("Welcome to JS");
// }
// console.log("Start");
// setTimeout(msg,0);
// console.log("End");

// function msg(mymsg){
//  return "Hello "+mymsg;
// }
// function msgHandler(arg,clbk){
//   const data = clbk(arg);
//   console.log(data);

// }
// const arr = ["Amit","Rahul","Vansh"];
// arr.forEach(element=>{
//   msgHandler(element,msg);
// })

// setTimeout(() =>{
//   console.log("First MSG");
//   setTimeout(() =>{
//     console.log("Second MSG");
//     setTimeout(()=>{
//       console.log("Third MSG");
//       setTimeout(()=>{
//         console.log("Fourth MSG");
//       },1000)
//     },1000)
//   },1000)
// },1000);

// const myPromise = new Promise((resolve,reject) =>{
//   const password = "5t234rfvbghy6789g9";
//   if(password.length>8){
//     resolve("Password is accepted and valid");
//   }
//   else{
//     reject("Password is rejected due to length");
//   }
// })
// console.log(myPromise);

// myPromise.then(msg=>{
//   console.log(msg);
// }).catch(err=>{
//   console.log(err);
// }).finally(msg=>{
//   console.log("Finally resources closed");
// })

// async function promiseHandler(){
//   try{
//     const data = await myPromise;
//     console.log(data);
//   }catch(err){
//     console.log(err);
//   }
// }
// promiseHandler();

const button = document.getElementById("btn");

async function fetchData(){
  console.log("Entered inside funtion");
  const response = await fetch("https://fakestoreapi.com/products");
  const jsonData = await response.json();

  const image = document.createElement('img');
  image.src = jsonData[1].image;
  image.style.width="200px";
  image.style.height="200px";

  const para = document.createElement('p');
  para.innerHTML = `Title: ${jsonData[0].title} Price: $${jsonData[0].price}`;
  
  const container = document.getElementsByClassName("container");
  container[0].appendChild(image);
  container[0].appendChild(para);

  console.log(jsonData);
}

button.addEventListener("click",fetchData);
