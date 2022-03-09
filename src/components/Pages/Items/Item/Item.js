import React , {useState , useCallback} from "react";
import './Item.scss';

const Item = ({id,title,name,image,body,addCounter}) => {

    const [play, setPlay] = useState(false);

    const playVideo = useCallback(
        () => {
            setPlay(true)
        },[],
    );

    const closeVideo = useCallback(
        () => {
            setPlay(false)
        },[],
    );

    return (
        <>
            <div className="item">
                <i  className="fa fa-close"></i>
                <div className="item-img">
                    <img src={image} alt="img"/>
                </div>
                <p  className="item-body">{body}</p>
                <div className="item-order__content">
                    <button className="item-order__button"
                            onClick={addCounter}
                            >   
                            by Order
                    </button>
                </div>
                <div className="item-see__content">
                    <button  className="item-see__button" onClick={playVideo}>
                        By See
                    </button>
                    <div className={play ? "movie-video active" : "movie-video"}>
                        <div className="movie-video__block">
                            <video className="video" controls  >
                                <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4"/>
                            </video>
                            <button className="close" onClick={closeVideo}>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default Item;