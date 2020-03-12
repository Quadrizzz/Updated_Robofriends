import React from 'react';

const Searchbox = ({searchfield , searchchange})=>{
    return(
        <div className = "pa2">
            <input type = "search" placeholder = 'Search Robots ' 
            className = "pa3  ba b--green br2 bg-lightest-blue shadow-5"
            onChange = {searchchange}
            ></input>
        </div>
    )
}

export default Searchbox;