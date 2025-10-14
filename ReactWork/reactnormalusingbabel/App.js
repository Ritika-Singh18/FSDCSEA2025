const parent = document.getElementById('parent');
// console.log(parent);

const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement("h2",{style:{textAlign:"center"}},"ABES Engineering College");
// const line = React.createElement('hr',{});
// const h4 = React.createElement('h4',{},"Skills");
// const li1 = React.createElement("li",{},"React");
// const li2 = React.createElement("li",{},"Java");
// const li3 = React.createElement("li",{},"Python");
// const li4 = React.createElement("li",{},"JavaScript");
// const li5 = React.createElement("li",{},"HTML");
// const ul = React.createElement('ul',{style:{color:'black'}},li1,li2,li3,li4,li5);

// const img = React.createElement('img',{src:"https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=600&h=400",style:{borderRadius:"50%",height:"100px",width:"100px",}});
// const myname = React.createElement('h3',{style:{paddingLeft:"50px",paddingTop:"20px"}},"Ritika Singh");
// const container = React.createElement('div',{style:{display:"flex",flexDirection:"row"}},img,myname);

// const wrapper = React.createElement('div',{},h2,container,line,h4,ul);


//JSX
const h21 = 
<>
  <h2>ABES Engineering College</h2>
  <div>
    <img src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=600&h=400" style={{height:"100px",height:"100px"}}></img>
  </div>
</>
root.render(h21);