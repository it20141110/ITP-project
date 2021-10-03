import React from 'react';
import garden from '../images/image 20.jpg';
import garden1 from '../images/image 8.jpg';
import garden2 from '../images/thinkstockphotos-185539853_1.jpg';

function Slider() {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={garden} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        <h5>Govi Saviya</h5>
                            
                        </div>
            </div>
                    <div class="carousel-item">
                    <img src={garden1} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Govi Saviya</h5>
                                
                            </div>
                    </div>
                        <div class="carousel-item">
                    <img src={garden2} class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Govi Saviya</h5>
                                   
                                </div>
                         </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
        );
}

export default Slider;