import React, { useState } from 'react'
import {userData} from './data';

export default function TaskOne() {
    const [hidden, setHidden] = useState(false);
    const [value, setValue] = useState(userData);

    
    const ClearAll=()=>{
        setValue([]);
    }
    
    return (
        <div  className='main'>
           <div className='boxShadow'>
               <div>
            <h1>Today BirthDay List.......</h1>
            {!hidden ?
             <div>
        <div>
            <p> <span className='counter'>{value.length}</span> BirthDay's Today</p>
        </div>
          {
           value.map((data)=>
           <div className='imageName'>
                {/* <div> */}
                    <img src={data.img} alt="/" className='roundImg' />
                {/* </div>
                <div> */}
                    <p>{data.name}</p>
                    <p className='ageStyle'>{data.age} Years</p> 
                {/* </div> */}
            </div>
       
           )
       }
       <button onClick={ClearAll}>Clear All......</button>
       
       <button onClick={() => setHidden(true)}>Clear All</button>
       </div> 
       : <p>No birthday today</p>}
       </div>
    </div>
    {/* {!hidden ?  <h1>hide</h1>:<h1>Show</h1>} */}
        </div>
    )
}

    

// count today birth day
// circle img name age
// button clear all => 0 birthday