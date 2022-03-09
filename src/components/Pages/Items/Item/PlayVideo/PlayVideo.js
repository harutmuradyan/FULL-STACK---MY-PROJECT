import React  from "react";
import './PlayVideo.scss';

const PlayVideo = () => {

    return (

        <div className="movie-video">
            <div className="movie-video__block">
                <video className="video" controls  >
                    <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default PlayVideo;