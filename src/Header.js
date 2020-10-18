import React from 'react';
import { Avatar } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header_class">
                <Avatar />
                <div>
                <div className="header_search">
               <div className="header_searchContainer">
                   <SearchOutlined />
                   <Autocomplete
      id="listing"
      options={Job_listing}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Enter your Search" variant="outlined" />}
    />
               </div>
            </div>
                </div>
                <div className="header_Right">
                <a href="#home">Sign up/in</a>
                <a href="#contact">Post A Job</a>
                <a href="#about">Croadcast</a>
                <a href="#about">Expert support</a>
                </div>
            </div>
        </div>
    )
}
const Job_listing =[
    {title:'Marketing Job'}
];
export default Header
