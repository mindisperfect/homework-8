import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ title, description , url, urlToImage, content , source, id, publishedAt, author}) => {
  return (
    <>
      <div className="card">
      <img src={urlToImage} alt={urlToImage} />
        <div className="contents">
          <h2><b>Author:</b> {author}</h2>
        <h1 style={{color: "purple"}}><b>Title:</b> {title}</h1>
        <h3><Link style={{width: "300px"}} to={`${url}`}>Link</Link></h3>
        <p><b>Desc:</b> {description}</p>
        <h4><b>Content: </b>{content}</h4>
        <h5><b>Name: </b>{source?.name}</h5>
        <h5>{source?.id}</h5>
        <h5><b>Published at:</b> {publishedAt}</h5>
        </div>
      </div>
    </>
  );
};

export default PostCard;
