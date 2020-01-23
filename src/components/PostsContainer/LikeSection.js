import React, {useState} from 'react';



const LikeSection = props => {
  const [likes, setLikes]= useState(props.data.likes);
  function addLikes(){
    setLikes(likes=> likes+1);
  }//end func
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div onClick= {(e) => {addLikes()}} className="like-section-wrapper">
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
    {likes}</p>
</div>
  )
};

export default LikeSection;
