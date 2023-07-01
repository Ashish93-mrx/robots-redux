import React from "react";

const SearchBox = ({searchfield, searchchange}) =>{
    return (
        <div className="pa2">
        <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder="search robots" maxLength={15}
        onChange={searchchange}
        />
        </div>

    );
}

export default SearchBox;