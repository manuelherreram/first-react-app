import { useState } from 'react';
import heart from './assets/icons/w-heart.svg';
import mensaje from './assets/icons/message.svg';

function Post({ id, image, author, text, updatedAt, likes, comments }) {
    const [like, setLike] = useState(likes)
    return (
      <div className="card m-1 flex-lg-fill flex-sm-fill" style={{maxWidth: "20em" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <div className="d-flex container-fluid postStatus">
                <div className='postDate'><span>{updatedAt}</span></div>
                <div className='postLike'>
                    <button className="btn btn-danger" onClick={() =>{setLike(like+1)}}><img className='icon' src={heart} alt="" /> {like} likes</button>
                </div>
                
            </div>
            <div className="container-fluid">
                <h5 className="card-title">@{author || "default title"}</h5>
                <p className="card-text">{text}</p>
                <p className='comment'><img className='icon' src={mensaje} alt="" /> Comments ({comments})</p>
            </div>
          
        </div>
      </div>
    );
  }
  
  export default Post;