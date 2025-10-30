const parent=document.getElementById('parent');
// console.log(parent)

 const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'brown',backgroundColor:'cyan'}},"ABES Engineering College");
// const li1=React.createElement("li",{},"React");
// const li2=React.createElement("li",{},"Java");
// const li3=React.createElement("li",{},"Python");
// const ul=React.createElement("ul",{style:{backgroundColor:'black',color:'white'}},li1,li2,li3);
// const img=React.createElement("img",{src:"https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg",style:{height:'100px',width:'100px',borderRadius:'50%'}});
// const myname=React.createElement('h3',{},"Vansh Tomar");

// const wrapper=React.createElement('div',{},h2,img,myname,ul);


//JSX
const h21=<h2>Hello, I m using JSX</h2>;


root.render(h21);