// import React, { useState } from 'react'

function Table({tableData}){
    // const [tableData, setTableData]=useState([])
      
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>File</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
{
                         tableData.map((data,index)=>{
                    return(
                        <tr key={index}>
                
                            <td>{data.name}</td>
                            <td>{data.file}</td>
                            <td>{data.price}</td>
                            <td>{data.description}</td>
                        </tr>)})}
                    
                
            
           
            </tbody>
        </table>
        
    )
}
export default Table;