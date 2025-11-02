import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'            
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png' 
import mustang  from '../../assets/mustang.jpg'
import satya from '../../assets/satya.jpg'
import mustang1 from '../../assets/mustang1.jpg'
import buma from '../../assets/buma.jpg'
import setup from '../../assets/setup.jpg'



const Recommended = () => {
  return (
    <div className='recommended'>
        <div className="side-video-list">
            <img src={buma} alt="" />
            <div className="vid-info">
                <h4>Aprtment Update @ Cape Town</h4>
                <p>Tlou Masipa</p>
                <p>213k views</p>
            </div>
        </div>
         <div className="side-video-list">
            <img src={mustang1} alt="" />
            <div className="vid-info">
                <h4>Weekend getaway + New Car</h4>
                <p>Neo Nkidi</p>
                <p>20k views</p>
            </div>
        </div>
         <div className="side-video-list">
            <img src={thumbnail3} alt="" />
            <div className="vid-info">
                <h4>Shopping Vlogs at Sandton City |Chowing his money🔥</h4>
                <p>Netma Group</p>
                <p>23k views</p>
            </div>
        </div>
         <div className="side-video-list">
            <img src={setup} alt="" />
            <div className="vid-info">
                <h4>Day in the life of a Software Engineer|WFH</h4>
                <p>Kamogelo Mthombeni</p>
                <p>3.8k views</p>
            </div>
        </div>
         <div className="side-video-list">
            <img src={thumbnail5} alt="" />
            <div className="vid-info">
                <h4>Office Day Vlog </h4>
                <p>Boity Claire</p>
                <p>200k views</p>
            </div>
        </div>
         <div className="side-video-list">
            <img src={thumbnail6} alt="" />
            <div className="vid-info">
                <h4>Weekend getaway + New Car</h4>
                <p>Netma Group</p>
                <p>200k views</p>
            </div>
        </div>
         <div className="side-video-list">
            <img src={thumbnail7} alt="" />
            <div className="vid-info">
                <h4>Weekend getaway + New Car</h4>
                <p>Netma Group</p>
                <p>200k views</p>
            </div>
        </div>
         <div className="side-video-list">
            <img src={thumbnail8} alt="" />
            <div className="vid-info">
                <h4>Weekend getaway + New Car</h4>
                <p>Netma Group</p>
                <p>200k views</p>
            </div>
        </div>
    </div>
  )
}

export default Recommended