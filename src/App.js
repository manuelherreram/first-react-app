import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <div className="cont-princ">
        <div id="cards" className="row align-center">
          <PostList />
        </div>
      </div>
    </div>
  );
}

export default App;
