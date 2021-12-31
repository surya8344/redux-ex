import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';


export default function Form() {
    // const [values] = useState({name:'',age:'',gmail:'',password:''})
    const navigate  = useNavigate()                                                
    
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [gmail, setGmail] = useState("")
    const [password, setPassword] = useState("")
    const [list, setList] = useState([]);


      const handleSubmit=(e)=>{
        e.preventDefault();
       
        const data={name,age,gmail,password}
        if( name && age && gmail && password ){
            navigate("dashboard/",data);
            console.log(data);

            setList((ls)=>[...ls,data])
            setName("")
            setAge("")
            setGmail("")
            setPassword("")
        }
    }
    useEffect(() => {
        // console.log([list]);
        
    }, [list])
    
  return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login Form</h2>
                <div>
                    <label>Name</label>
                    <input type="text" value={name}
                     name="name"
                     placeholder="Enter name"
                     onChange={(e)=>setName(e.target.value)} />
                </div>
                <div>
                    <label>Age*:</label>
                    <input  type="number" value={age}
                    name="age"
                    placeholder="Enter age"
                    onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div>
                    <label>gmail</label>
                    <input type="gmail" value={gmail} 
                     name="gmail"
                     placeholder="Enter gmail"
                     onChange={(e)=>setGmail(e.target.value)}/>
                </div>
                <div>
                    <label>password*:</label>
                    <input  type="password" value={password}
                     name="password"
                     placeholder="Enter password"
                     onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                    <button type="submit">Submit</button>
                    

             
         </form>
           {/* <Dashboard value={data}/> */}
          
        </div>
    )
}
