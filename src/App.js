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
