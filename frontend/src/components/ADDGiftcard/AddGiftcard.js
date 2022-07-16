import React, { useState } from 'react'
import Table from './Table';
import FormInput from './FormInput';
import { useNavigate } from 'react-router-dom';

function AddGiftcard(){
    const [tableData, setTableData]=useState([])
    // const navigate = useNavigate();
    const[user,setUser]=useState({
        name:"",file:"",price:"",description:""
    });
      

const handleChange=(e)=>{
    const newInput=(data)=>({...data,[e.target.name]:e.target.value})
     setUser(newInput)
     
}
const handleAddgiftcard=(e)=>{
    e.preventDefault();
    // navigate("./table");
    
    const checkEmptyInput = !Object.values(user).every(res=>res==="")
    if(checkEmptyInput)
    {
      const newData = (data)=>([...data, user])
      setTableData(newData);
      const emptyInput= {name:'', file:'', price:'',description:''}
      setUser(emptyInput)
     }
     
}
return(
   <React.Fragment>
    <div className="container">
    <div className="row">
        <div className="col-sm-8">
        <FormInput handleChange={handleChange} user={user} handleAddgiftcard={handleAddgiftcard}/>
        <Table tableData={tableData}/>
        </div>
        <div className="col-sm-4">
        </div>
    </div>
   </div>
   </React.Fragment>
); 
}
   
export default AddGiftcard;
