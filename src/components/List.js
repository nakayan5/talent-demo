import React from 'react'
import Item from './Item'

const List = (props) => {

    const Items = props.videos.map((video) => {
        return <Item video={video} key={video.id.videoId} itemClicked={props.itemClicked}/>
    });

    return (
        <div className="video-container">
            <ul>
                {Items}
            </ul>
        </div>
    )
}

export default List;