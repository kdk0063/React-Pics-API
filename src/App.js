import { useState } from 'react';

import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList/ImageList";
import searchImages from './Services/services';


function App() {
  const [images, setImages] = useState([]);

  const handleSearchImage = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  }

  return(
    <div> 
      <SearchBar onSubmit={handleSearchImage}/>
      <ImageList images={images}/>
    </div>
  ) 
}
export default App;