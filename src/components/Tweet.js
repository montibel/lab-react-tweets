import React from "react"
function Tweet({tweet}) {
  console.log({tweet})
  return (
    <div className="tweet">
      <img
        src={tweet.user.image}
        className="profile"
        alt="profile"
      /> 

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{tweet.user.name}</span>
            <span className="handle">{tweet.handle}</span>
          </span>
         

          <span className="timestamp">Nov 30, 2020</span>
        </div>

        <p className="message">
          {tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
