import React from "react";
import LikeButton from "./like"

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">open state</label>
      <input type ="checkbox" checked={props.isPublished} id="check" onClick={()=>props.toggle()} ></input>
      <button onClick={()=>props.titleChange()}>title change</button>

      <h2>{props.blogTitle}</h2>
      <button onClick={()=>props.subscribed()}>{props.subscriptionMessage}</button>
      <LikeButton count={props.count}/>
    </div>
  )
}

export default Article;
