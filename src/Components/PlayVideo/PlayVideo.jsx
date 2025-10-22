import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import tebogo from '../../assets/tebogo.jpg'
import user_profile from '../../assets/user_profile.jpg'


const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Day in the life of a software engineer at  Zanzibar </h3>
        <div className='play-video-info' >
            <p>126 views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className='publisher'>
            <img src={tebogo} alt="" />
            <div>
                <p>neTma Group</p>
                <span>2435 Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel that gives insight of industry trends and best practices.</p>
            <p>Subscribe neTma Group for more content!</p>
            <hr />
            <h4>130 comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Tebogo Mashabane <span>1 day ago</span></h3>
                    <p>We are being inspired by your</p>
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
                    <h3>Tebogo Mashabane <span>1 day ago</span></h3>
                    <p>We are being inspired by your</p>
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
                    <h3>Tebogo Mashabane <span>1 day ago</span></h3>
                    <p>We are being inspired by your</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo
