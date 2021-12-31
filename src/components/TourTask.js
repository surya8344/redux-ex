
import React, { useState } from 'react'
import {TourData} from '../data/Tourdata';
import './TourTask.css'

export default function TourTask() {
const [value, setValue] = useState(TourData)

const removeElement=(id)=> {
    const deleteData = value.filter((data)=>data.id !== id)
    setValue(deleteData)
 }

    return (
        <div>
           
            <div className='mainContainer'>
                <div className='header'>
                    <h1>Our Tours</h1>
                    <hr className='HeadLine' />
                    
                </div>
                {
                    value.map((data)=>
                    <>
                    <div>
                        <img src={data.image} alt="/" className='sectionImg'/>
                    </div>
                    <div className='namePrice'>
                        <h2 className='tourName'>{data.name}</h2>
                        <h2 className='tourPrice'>$ {data.price}</h2>
                    </div>
                    <div>
                        
                        <ReadMore info={data.info} className='info' ></ReadMore>
                    </div>
                    <div className='notInterestBtn'>
                        <button  className='notInterestButton' onClick={()=> removeElement(data.id)} >Not Interested....</button>
                    </div>
                    
                    </>)
                }
            </div>
           
        </div>
    )
}

const ReadMore=({info})=>{
    const [readMoreLess,setReadMoreLess]=useState(true)
    const MoreLess=()=>{
        setReadMoreLess(!readMoreLess);
    }
    return(
        <p className='moreLeft'>
            {readMoreLess ? info.slice(0,100):info}
            <span onClick={MoreLess} className='contentRead'>{!readMoreLess ?  "ReadLess...":"ReadMore..."}</span>
            
        </p>
    )
}