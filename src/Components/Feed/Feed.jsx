import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import mustang from '../../assets/mustang.jpg'
import pukke from '../../assets/pukke.png'
import { Link } from 'react-router-dom'

const Feed = () => {
  return (
    <div className="feed">
        <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail1} alt="" />
            <h2>Day in the life of a software engineer at  Zanzibar </h2>
            <h3>neTma Group</h3>
            <p>400 views &bull; 4 hours ago</p>
        </Link>
        <div className='card'>
            <img src={mustang} alt="" />
            <h2>Taking Ford Mustang on a road trip</h2>
            <h3>neTma Group</h3>
            <p>118k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail3} alt="" />
            <h2>Day in the life of a software engineer </h2>
            <h3>neTma Group</h3>
            <p>1.2M views &bull; 2 days ago</p>
        </div>   
        <div className='card'>
            <img src={thumbnail4} alt="" />
            <h2>Day in the life of a software engineer </h2>
            <h3>neTma Group</h3>
            <p>15k views &bull; 2 days ago</p>
        </div> 
        <div className='card'>
            <img src={pukke} alt="" />
            <h2>PukkeConnect system demonstration</h2>
            <h3>neTma Group</h3>
            <p>764 views &bull; 1 day ago</p>
        </div>  
        <div className='card'>
            <img src={thumbnail6} alt="" />
            <h2>Day in the life of a software engineer </h2>
            <h3>neTma Group</h3>
            <p>1.2M views &bull; 2 days ago</p>
        </div> 
        <div className='card'>
            <img src={thumbnail7} alt="" />
            <h2>Day in the life of a software engineer </h2>
            <h3>neTma Group</h3>
            <p>1.2M views &bull; 2 days ago</p>
        </div> 
        <div className='card'>
            <img src={thumbnail8} alt="" />
            <h2>Day in the life of a software engineer </h2>
            <h3>neTma Group</h3>
            <p>1.2M views &bull; 2 days ago</p>
        </div>
    </div>
  )
}

export default Feed