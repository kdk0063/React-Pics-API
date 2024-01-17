import {useState} from 'react';

import './SearchBar.css';

function SearchBar({onSubmit}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(searchTerm);
    }
    
    return (
        <div className="search-bar">        
            <form  onSubmit={handleSubmit}>
                <label>Enter Search Term</label>
                <input 
                    type='text' 
                    onChange={e => setSearchTerm(e.target.value)} 
                    value={searchTerm}/>
                {/* <button onClick={handleSubmit}>Search</button> */}
            </form>
        </div>
    )
  };
  export default SearchBar;