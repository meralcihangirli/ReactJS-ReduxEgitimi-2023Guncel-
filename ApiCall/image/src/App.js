import searchImages from './Api'
import './App.css';
import SearchHeader from './SearchHeader'
import { useState } from 'react';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {   
   const result=await searchImages(term);
   setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder={images} />
    </div>
  );
}

export default App;
