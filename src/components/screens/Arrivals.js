import React, { useState, useEffect , useRef} from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';
import img3 from '../../assets/images/img-3.jpg';
import img4 from '../../assets/images/img-4.jpg';
import Slider from "react-slick";

function Arrivals() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:  false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
    centerPadding: '0',  
  focusOnSelect: true,
   
  };
  
  const [arrivals, setArrivals] = useState([]);
  const SliderRef = useRef();

  
  useEffect(() => {
   
    const ArrivalView = [
      {    
        "id": 1,
        "name": "Knitted Joggers",
        "image": img1
      },
      {
        "id": 2,
        "name": "Full Sleeve",
        "image": img2
      },
      {
        "id": 3,
        "name": "Active T-Shirts",
        "image": img3
      },
      {
        "id": 4,
        "name": "Urban Shirts",
        "image": img4
      }
    ];

    
    setArrivals(ArrivalView);
  }, []); 

  const renderArrivals = () => {
    return arrivals.map((arrival) => (
      <Container1 key={arrival.id}>
        <DressImage1 src={arrival.image} alt={arrival.name} />
        <HeadingOne>{arrival.name}</HeadingOne>
      </Container1>
    ));
  };

  return (
    <div>
      <Helmet>
        <title>Arrivals | euphoria</title>
      </Helmet>
      <ArrivalContainer>
        <TopContainer>
          <Rectagle></Rectagle>
          <Heading>New Arrival</Heading>
        </TopContainer>
        
        
        <ImageContainer>
       
        <Button onClick={() => SliderRef.current.slickPrev()}  >
          <Image src={require("../../assets/images/arrow-left.svg").default} alt="Previous" />
        </Button>
    
        <Slider ref={SliderRef} {...settings}>{renderArrivals()}</Slider> 
        <Button1 onClick={() => SliderRef.current.slickNext()}>
          <Image1 src={require("../../assets/images/arrow-right.svg").default} alt="Next" />
        </Button1>
       
        </ImageContainer>

        
     
     
      </ArrivalContainer>
    </div>
  );
}


const ArrivalContainer = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
   justify-content: center;
   gap: 10px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
`;

const Rectagle = styled.div`
  width: 6px;
  height: 30px;
  border-radius: 10px;
  background: #8A33FD;


@media (max-width: 480px) {
  margin-left: 40px;

 }
`;

const Heading = styled.h2`
  display: inline;
  margin-top: 0px;
  margin-left: 20px;
  font-family: "Urbanist", serif;
  font-size: 34px;
  font-weight: 600;
  line-height: 33.5px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #3C4242;


@media (max-width: 480px) {
    font-size: 30px;
 
   }
`;

const ImageContainer = styled.div`

 position: relative;
   width: 100%;
  margin: 20px auto;
 

@media (max-width: 1280px) {
 margin-left:20px;

  }
  
`;

const Container1 = styled.div`
  padding: 0;
 margin: 0; 
  display: flex;
  justify-content: center;
`;

const DressImage1 = styled.img`
 border-radius: 12px;
  
  
  height: auto;
 margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 200px;
 


@media (max-width: 1280px) {
  width: 230px;
   height: 230px;

 }
    @media (max-width: 1100px) {
  width: 200px;
   height: 200px;
   }
`;

const HeadingOne = styled.h4`
  font-family: Varela Round;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #3C4242;
   margin-top: 10px;


  @media (max-width: 1100px) {
   font-size: 15px;
   }
`;

 
const Button = styled.button`
 position: absolute;
  top: 50%;
  left: -30px; /* Adjust this for spacing */
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;


  }
   
  
`;
const Button1 = styled.button`
 
  

  position: absolute;
  top: 50%;
  right: -30px; /* Adjust this for spacing */
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;


    @media (max-width: 1366px) {
  right: -10px;
   }

   @media (max-width: 1100px) {
  right: -10px;
   }
  @media (max-width: 1024px) {
   
   }
   
  
 `;
const Image = styled.img`

width: 13.59px;
height: 12px;

 
`;
const Image1 = styled.img`


width: 13.59px;
height: 12px;




`;


export default Arrivals;