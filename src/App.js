import React, { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
//import { useEffect } from 'react'
//import axios from 'axios'


export default function App(){
//  
 // state hook 
   const [newitem, setnewitem]  = useState('');
   const [items,setitems] = useState([]);
   const [edit,setedit]=useState(0);
   const [text,settext]=useState("");

  // helper function
   function additem(){

    if(!newitem){
      alert("Add an Item.")
      return
    }
    const item ={
    id:Math.floor(Math.random() * 1000),
    value: newitem
    
  
   }
   setitems(oldlist=>[...oldlist,item])
   setnewitem("")

  }

 
  function deletitem(id){
    const newarray = items.filter( item=>item.id !==id )
      setitems(newarray)
   } 
  function edititem(text,id)
  {


const newtext={
  id:Math.floor(Math.random() * 1000),
  value:text,
  
}

deletitem(id);
setitems(oldlist=>[...oldlist,newtext])
  }
  
  
 

  return(
    <div className='App'>
      


    <div className=' container' >
      {/* // header  */}
       <h5>TODO LIST APP</h5>  
      {/* // INPUT   */}
    
      <input

          type="text"
          placeholder='ADD an item'
          value={newitem}
          onChange={e=> setnewitem(e.target.value)}
          className='input'
          >
          </input>
          <button className='add-button' onClick={()=>additem()}> add 

           </button> 
           {/* // list of item  */}
           { <ul>
            {items.map( item=>{
              
              return(
              <li key={item.id}>{item.value} <button className='delet-button' onClick={() => deletitem(item.id)}>delet</button>
              <button className='edit-button' onClick={() => setedit(item.id)}>Edit</button>
              {
                edit===item.id?
                (
                  <div>
                  <input
          type="text"
          placeholder='ADD an item'
          value={text}
          onChange={e=> settext(e.target.value)}
          className='input'
          
          >
          </input>
                  <button className='delet' onClick={() => edititem(text,item.id)}>update</button>
                  </div>
                ):null
              }
              </li>
        
                
              )
              
               
            })
            
            }
            
         
          </ul>} 
 </div>
          
         
          </div>
       
     
       
       
       
    
  
  
  )
}