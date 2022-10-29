import { useState,useEffect } from "react";
import { getPosts } from "../service/data-service";
import Post from "./Post";

const initialState = [];

function PostList({searchI}) {
    const [posts, setPosts] = useState(initialState);
    
    useEffect(() =>{
        getPosts().then((posts) =>{
            setPosts(posts);
        });
    }, []);    
   
    return (
        <div className="p-1 d-flex flex-wrap justify-content-center">
        {posts === initialState 
        ? "Loading..." 
        : posts
            .filter((e) => e.text.includes(searchI))
            .map((post, i) => (
                <Post
                    key={i}
                    id={post.id}
                    image={post.image}
                    author={post.author.username}
                    text={post.text}
                    updatedAt = {post.updatedAt}
                    likes={post.likes}
                    comments={post.comments.length}
                />
            ))}
        </div>
    );
}

export default PostList;