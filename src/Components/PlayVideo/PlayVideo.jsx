import React, { use, useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import tebogo from '../../assets/tebogo.jpg'
import user_profile from '../../assets/user_profile.jpg'
import jack from '../../assets/jack.png'
import {API_KEY, value_converter} from '../../data'
import moment from 'moment'

const PlayVideo = ({videoId}) => {

    const [apiData, setApiData] = useState(null);

    const fetchVideoData = async () => {
        //fetching data from youtube api
        const videoDetails_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
    }
    useEffect(() => {
        fetchVideoData();
    }, []);

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder ="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

    
        <h3>{apiData?apiData.snippet?.title:"loading...."}</h3>
        <div className='play-video-info' >
            <p>{apiData?value_converter(apiData.statistics.viewCount):"17k"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
            <div>
                <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):"125"}</span>
                <span><img src={dislike} alt="" />{apiData?value_converter(apiData.statistics.dislikeCount):"2"}</span>
                <span><img src={share} alt=""/>Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className='publisher'>
            <img src={tebogo} alt="" />
            <div>
                <p>NeTma Group</p>
                <span>17M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>{apiData?apiData.snippet?.description.slice(0, 250):"Loading description..."}</p>
            <hr />
            <h4>130 comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Tebogo Mashabane <span>1 day ago</span></h3>
                    <p> GREAT content from the Netma Group!🔥 </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />

                    </div>
                </div>
            </div>
             <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Lethabo Maepa <span>6 day ago</span></h3>
                    <p>Dope trip ,next year its me and my girl🎯</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>434</span>
                        <img src={dislike} alt="" />
                        
                    </div>
                </div>
            </div>
             <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Kutullo Radiangone <span>5 days ago</span></h3>
                    <p>Lets keep pushing for our dreams!🙂‍💯</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>258</span>
                        <img src={dislike} alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo
