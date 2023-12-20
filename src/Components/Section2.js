import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.png';
import img7 from '../assets/images/7.png';
import img8 from '../assets/images/8.png';
export default function Section2() {
    return (
        <>
         <div className="container-fluid d-flex align-items-center justify-content-center" style={{backgroundColor: 'white'}}>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 my-4">
                <div>
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img src={img5}/>
                <img src={img6}/>
                <img src={img7}/>
                </div>
               </div>
            </div>
        </div>

        <div className="container-fluid" style={{backgroundColor: 'white'}}>
            <div className="row  d-flex align-items-center justify-content-center">
                <div className="col-lg-5 col-md-12 col-sm-12 my-4">
                        <h1>Create your own Web3 Masterpiece</h1>
                        <p>Most entrepreneurs want to create their own web3 sites, unfortunately, they dont know much about creating one. Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the hassle of leaving their favorite creation tools and by simple drag and drop functionality.</p>
                        <button className="btn btn-primary my-2" >Start Building</button>
               </div>
               <div className="col-lg-5 col-md-12 col-sm-12 my-4">
               <img src={img8} style={{height:'700px'}}/>
               </div>
            </div>
        </div>
        </>
    );
    }