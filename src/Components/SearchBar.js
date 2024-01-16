import {useState} from 'react';

import SearchImages from '../Services/services';

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <div>SearchBar</div>

            <input type='text' placeholder={props}/>
            <button>Search</button>
        </div>
    )
  };
  export default SearchBar;