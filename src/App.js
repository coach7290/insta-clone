
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';
import Post from './Post';
import {Modal, Button, Input} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

function App() {

  const [posts,setPosts]=useState([])
  const [open,setOpen] = useState(false)
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  useEffect(()=>{
    db.collection("posts").onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc => ({
        id : doc.id,
        post: doc.data()
      })))
    })
  })
  function getModalStyle() {
    const top = 50 
    const left = 50 
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const handleSignup = event =>{

  }
  return (
    <div className="App">
         <Modal
        open={open}
        onClose={()=>setOpen(false)}
        
      >
         <div style={modalStyle} className={classes.paper}>
           <form className="app__signup">
             <center>
            <img className="header__img" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"></img>  
           </center>
         <Input placeholder="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
         <Input placeholder="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <Input placeholder="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
         <Button onClick={handleSignup}>Sign Up</Button>
           </form>
           

        
      
      
      </div>
      </Modal>
      <div className="app__header">
       <img className="header__img" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png">
       
       </img>
       <Button onClick={()=>setOpen(true)}>Sign Up</Button>
      </div>
      {posts.map(({id,post})=>{
      return  <Post key={id} caption={post.caption} imageUrl={post.imageUrl} username={post.username}/>
      })}
      

   
    </div>
  );
}

export default App;
