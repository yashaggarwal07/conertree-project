import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Recuiter.css';

function Recutier() {
    const onSubmit=()=>{
        alert('recommended a “job posting” for better reach, click to post a job.');
    }
    return (
        
            <div className="recutier_form">
            <form>
                <div className="form_job">
             <span>Name</span>         <input type='text' /> <br />
             <span>Email</span>        <input type='email' /> <br />
             <span>Number</span>       <input type='number'/>  <br />
                   
                    <Autocomplete
      id="recutier"
      options={recutier}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="which you mostly hire" variant="outlined" />}
    />
                     <Autocomplete
      id="Job_location"
      options={job_location}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Preffred location" variant="outlined" />}
    />
    <input type="radio"/><span>Fresher</span><br />
    <input type="radio"/><span>Junior to mid</span><br />
    <input type="radio"/><span>mid to senior</span><br />
    <input type="radio"/><span>CXO</span><br />
    <input type="radio"/><span>Yes</span>
    <input type="radio"/><span>No</span><br />
    <button type="submit" onClick={()=>onSubmit()}>Submit</button>

                </div>
                </form>
        </div>  
    )
}
const recutier=[
    {title:'fresher job'},
    {title:'experice job'}
];
const job_location=[
    {title:'bengluru'},
    {title:'Delhi'}
]
        
export default Recutier
