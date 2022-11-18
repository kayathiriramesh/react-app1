// 

import logo from './logo.svg';
import './App.css';
//component decloration
function App() {
let name="kayu";
return (
  <div className="App">
    <h1>
      Hello,{name} 🎉🎉 -{10*20} followers{" "}
    </h1>
  </div>
);
}export default App;

// if you want print more time  in App() we used more time to call 
//App() component but we have one app() component is call only one 
//time so we create another component ex:Users() and it call more
// time inside the App() cpmponent

import logo from './logo.svg';
import './App.css';
//component decloration
function App() {
return (
  <div className="App">
    <User />
    <User />
    <User />
  </div>
);
// User Component decloration
function User(){
  let name="kayu";
  return(
    <h1>
      Hello,{name} 🎉🎉 -{10*20} followers{" "}
    </h1>
  );
}
}export default App;

//we need to print different person details print in same model 
//we use props method it's a like parameter.
//type of props is object

function App() {
  return (
    <div className="App">
    <User name="Kayu" />
    <User name="Uma" />
    <User name="Renu" />
    </div>
  );
  // User Component decloration
  function User(props){
    return(
      <h1>
        Hello,{props.name} 🎉🎉 -{10*20} followers{" "}
      </h1>
    );
  }
  }export default App;
  






import logo from './logo.svg';
import './App.css';
//component decloration
function App() {
  return (
    <div className='App'>
      <User 
      name="uma"
      pic="https://plus.unsplash.com/premium_photo-1661755677167-7580a8f560ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"      
      />
      <User 
      name="renu" 
      pic="https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.jpg?s=612x612&w=0&k=20&c=d8W_C2D-2rXlnkyl8EirpHGf-GpM62gBjpDoNryy98U="
      />
      <User 
      name="kayu" 
      pic="https://i.pinimg.com/236x/d0/96/b5/d096b575414fe865ece849188f42cae6--business-headshots-corporate-headshots.jpg"
      />
    </div>
  );
  }

  
function User({pic,name})
{
  //let name = "kayathiri";
  return(
    
    <>
    <img className="userpic"
    src={pic}
    alt={name}
     />
    <h1 className="username">
        Hello, <span className='username1 '>{name} </span>-{10*20} followers{" "}
      </h1>
      </>
  )
}
export default App;


import logo from './logo.svg';
import './App.css';
//component decloration
function App() {
  const name=["kayu","uma","renu"];
  const users =[
    {
      name:"uma",
      pic:"https://plus.unsplash.com/premium_photo-1661755677167-7580a8f560ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      name:"renu", 
      pic:"https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.jpg?s=612x612&w=0&k=20&c=d8W_C2D-2rXlnkyl8EirpHGf-GpM62gBjpDoNryy98U=",
    },
    {
      name:"kayu" ,
      pic:"https://i.pinimg.com/236x/d0/96/b5/d096b575414fe865ece849188f42cae6--business-headshots-corporate-headshots.jpg",
    },
  ];
  return (
    <div className='App'>
    {
      users.map((usr)=>(
        <User name={usr.name} pic={usr.pic} />
      ))}
    </div>
  );
  }

function User({pic,name})
{
  //let name = "kayathiri";
  return(
    <>
    <img className="userpic"
    src={pic}
    alt={name}
     />
    <h1 className="username">
        Hello, <span className='username1 '>{name} </span>-{10*20} followers{" "}
      </h1>
      </>
  )
}
export default App;

