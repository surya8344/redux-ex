import React from 'react'
import ThirdTaskData from '../data/ThirdTaskData'
// import image from '../assets/item-1.jpeg'
export default function ThirdTask() {
    return (
        <div>
            {
                ThirdTaskData.map((data)=>
                <>
                {/* <img src={data.img} alt="/" />
                {data.id} */}
                <div>
                    <div className="navigation">
                        
                    </div>
                </div>
                </>)
            }
        </div>
    )
}
