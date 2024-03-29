import searchImages from './Api'
import './App.css';
import SearchHeader from './SearchHeader'

function App() {
  const handleSubmit = (term) => {
    debugger;
    console.log(term);
    searchImages(term);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
    </div>
  );
}

export default App;
