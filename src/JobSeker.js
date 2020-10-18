import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './JobSeeker.css';

function JobSeker() {
    const onbroadcast=()=>{
        alert('There are 300 recruiters similar to your skills, would you like to `review` or `broadcast` .');
    };
    return (
        <div className="jobseeker_form">
            <form>
                <div className="form_job">
                    <input type='text' /><span>Name</span>
                    <input type='email' /><span>Email</span>
                    <input type='number' /><span>Number</span>
                    <input type='radio' /><span>Fresher or Experienced</span>
                    <Autocomplete
      id="Job_seker"
      options={Job_Seker}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Enter your Search" variant="outlined" />}
    />
                     <Autocomplete
      id="Job_location"
      options={job_location}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Enter your Search" variant="outlined" />}
    />
    <input type='file' accept='pdf,docs'/><span>Upload Resume</span>
    <button type="submit" onClick={()=>onbroadcast()}>BroadCast</button>

                </div>
                </form>
        </div>
    )
}
const Job_Seker=[
    {title:'fresher job'},
    {title:'experice job'}
];
const job_location=[
    {title:'bengluru'},
    {title:'Delhi'}
]
export default JobSeker
