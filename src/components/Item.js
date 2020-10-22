import React from 'react'

const Item = (props) => {
    console.log("Propsを受け取りました");
  console.log(props);
    
    return(
            <li onClick={() => props.itemClicked(props.video)}>
                <div className="video-item">
                    <img src={props.video.snippet.thumbnails.medium.url} />
                    <h4>{props.video.snippet.title}</h4>
                </div>
            </li>
    )
}

export default Item;