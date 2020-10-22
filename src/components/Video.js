import React from 'react'

const Video = (props) => {

    if(!props.selectedVideo){
        return (
          <div className="video col-md-8">
            動画を読み込み中でーす。
          </div>
        )
    }

    const videoURL = 'https://www.youtube.com/embed/' + props.selectedVideo.id.videoId; //重要


    return (
        <div>
            <div>
                <iframe 
                    src={videoURL}
                />
            </div>
            <div>
                <h2></h2>
                <p></p>
            </div>
        </div>
    )
}

export default Video;