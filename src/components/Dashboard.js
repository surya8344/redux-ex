import React from 'react'

export default function Dashboard({value}) {
    // console.log([props]);
    return (
        <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>GMAIL</th>
                                <th>PASSWORD</th>
                            </tr>
                        </thead>
                         
                        {
                            value.map((a)=>
                        <>
                            <tbody>
                                <tr>
                                <td>{a.name}</td>
                                <td>{a.age}</td>
                                <td>{a.gmail}</td>
                                <td>{a.password}</td>
                                </tr>
                            </tbody>
                        </>
                            )
                        }
                    </table>
                </div>
        </div>
    )
}
