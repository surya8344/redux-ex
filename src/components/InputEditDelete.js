import React, { useState } from 'react';
import './InputEditDelete.css'

export const InputEditDelete = () =>{
    const [value, setValue] = useState('');;
    const [list, setList] = useState([]);
    const [edit, setEdit] = useState (false);
    const [editText, setEditText] = useState('');
    const [currentValue,setCurrentValue]=useState();
    
    const FormSubmit=(e)=>{
        e.preventDefault();
        const data={value}
        if( value ){
            setList((ls)=>[...ls,{id:list.length+1,text:data.value}])
            setValue("")
            console.log("FormSubmit",[list]);

        }
    }
    const FormEditSubmit=(e)=>{
        e.preventDefault();
        const data={editText}
        if( editText ){
            setList((ls)=>[...ls,{id:list.length+1,text:data.value}])
            setEditText("")
            console.log('FormEditSubmit',[list]);
        }
    }
    const ClearAll=()=>{
        setList([]);
    }
    const DeleteButton=(value)=>{
    const deleteList = list.filter((data)=>data.id !== value)
    setList(deleteList)
    }
    const editButton=(text)=>{
        setEdit(true);
        // setCurrentValue({...value});
        setEditText(text)
    }
    const InputEditValue=(e)=>{
        setCurrentValue({...currentValue,text:e.target.value});
        console.log(currentValue)
        setEditText(e.target.value)
    }
    // console.log("list",value);
    return(
            <div className='boxShadowInput'>
                <div>
                    <h2>Grocery Bud</h2>
                </div>
                <div className='InputBtn'> 
            {
                edit?
                    <form onSubmit={FormEditSubmit}>
                        <input type="text" className='inputField' value={editText} onChange={InputEditValue} />
                        <button className='submitEditBtn' type="submit">Done</button>
                    </form> :
                    <form onSubmit={FormSubmit}>
                        <input type="text" className='inputField' value={value} onChange={(e)=>setValue(e.target.value)} />
                        <button className='submitEditBtn' type="submit">Submit</button>
                    </form> 
            }
                </div>               
                <div className='outPutSection'>                   
                    <p>{
                        list.map((data)=>
                            <li  className='outPut'>
                                {data.text}
                                <button className='valBtn' onClick={()=> DeleteButton(data.id)}>Delete</button> 
                                <button className='editBtn'onClick={()=>editButton(data.text)}>Edit</button>
                            </li>
                         )}
                    </p>
                </div>
                <div>
                    <button onClick={ClearAll} >Clear Items</button>
                </div>
            </div>
    )
}

