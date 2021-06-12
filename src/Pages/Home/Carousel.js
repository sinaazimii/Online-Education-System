import React from 'react';
import {Carousel , Button} from 'react-bootstrap'
import './../Home/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const MyCarousel = () => {
    
        return (
          

            <div className='row'>
                <div className='column'>
                    <div className="img-container">
                      <img src={require('./../../assets/pic1.png')}
                      />
                    </div>
                </div>
                <div className="explain-container">
                    <p className="bilboard-txt">You can hold your clasess here.</p>
                    <p className="bilvoard-comment"> You can easily use this website and participate in yout class</p>
                    <p className="bilvoard-comment"> throgh your browser and also use everything else </p>
                    <p className="bilvoard-comment">that is provided for best using experience, never been easier </p>
                    <Button className="bilboard-button">Take me there</Button>{' '}
                </div>
              </div>  

          
        );
}
export default MyCarousel;