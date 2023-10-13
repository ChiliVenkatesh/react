import React from 'react'
import img2 from '../Images/Youtube.png'
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <>
            <div className='col-md-2 bg-white'>
                <i className='fa-solid fa-bars'></i>
                <img src={img2} width={100} />
                <span style={{ fontSize: "20px", fontFamily: "caliberi" }}>Youtube</span>
                <hr></hr>
                <div className='text-center'>
                </div>
                <div className='sidebar'>
                    <ul>
                        <Link to="Home"><li><i class="fa-solid fa-house"></i>Home</li></Link><br></br>
                        <Link to="Shorts"><li><i class="fa-solid fa-bolt"></i>Shorts</li></Link><br></br>
                        <li><i class="fa-solid fa-credit-card"></i>  Subscriptions</li>
                        <hr></hr>
                        <li><i class="fa-sharp fa-solid fa-download"></i> download</li>
                        <br></br>
                        <li><i class="fa fa-history" aria-hidden="true"></i>  History</li>
                        <br></br>
                        <li><i class="fa-solid fa-trash"></i>  trash Bin</li>
                        <hr></hr>
                        <li><i class="fa-solid fa-tags"></i> Tags</li>
                        <br></br>
                        <li><i class="fa-solid fa-video"></i> movies</li>
                        <br></br>
                        <li><i class="fa-solid fa-headphones"></i> Songs</li>
                        <hr></hr>
                        <li><i class="fa-solid fa-chevron-down"></i> Show more</li>
                        <br></br>
                    </ul>
                </div>

            </div>

        </>
    )
}
export default Sidebar;