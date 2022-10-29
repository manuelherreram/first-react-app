import SearchBar from '../SearchBar';
import PostList from '../PostList';

function Home({searchI, dSearch}) {
    return (
        <div className="Home">        
            <SearchBar searchI={searchI} dSearch={dSearch}/>
            <PostList searchI={searchI}/>
        </div>
 );
}

export default Home;