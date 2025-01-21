import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import BgImage from "../../assets/images/bg-1.jpg";
import Slider from "react-slick";
import { useRef } from 'react';




function Dresses() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:  false,
   
  };
  const SliderRef = useRef();
  

  
  return (
    <>
        <Helmet>
            <title>Dresses | euphoria</title>
        </Helmet>

     
       
        <SpotlightContainer>
        <Button1 onClick={() => SliderRef.current.slickPrev()}  >
          <Image src={require("../../assets/images/left-arrow-bold.svg").default} alt="Previous" />
        </Button1>
        <Slider ref={SliderRef} {...settings}>
       
          <Items>
          <SmallText>Tshirt/Tops</SmallText>
          <Heading>Summer <br /> Value Pack</Heading>
           <Small>Cool/colorful/comfy</Small>
           <Button>Shop Now</Button>
          
          </Items>

          <Items>
          <SmallText>Tshirt/Tops</SmallText>
          <Heading>Summer <br /> Value Pack</Heading>
           <Small>Cool/colorful/comfy</Small>
           <Button>Shop Now</Button>
          
          </Items>

         
         
          </Slider> 
          
        <Button2 onClick={() => SliderRef.current.slickNext()}>
          <Image1 src={require("../../assets/images/right-arrow-bold.svg").default} alt="Next" />
        </Button2>
       
        </SpotlightContainer>
       
        
       
        
        
        

    </>
  );
}
const SpotlightContainer = styled.div`


 max-width: 1448px;
height: 710px;
background-image: url(${BgImage});
background-size: cover;
background-position: center;
 position: relative;
 margin-bottom:0;
 overflow: hidden;

@media (max-width: 480px) {
  height: 500px;
  }
  @media (max-width: 390px) {
  height: 450px;
  }

  

`;
const Items = styled.div`

padding: 30px 0px;
margin-left:170px;


@media (max-width: 768px) {
  margin-left:120px;
  }
  
 @media (max-width: 480px) {
  margin-left:60px;
  }

  
 
`;
const SmallText = styled.small`

 
 
font-family: Varela Round;
font-size: 32px;
font-weight: 500;
line-height: 37.77px;
letter-spacing: 0.15738007426261902px;
text-align: left;
color: #FFFFFF;

@media (max-width: 768px) {
font-size: 25px;
}
@media (max-width: 480px) {
 font-size: 20px;
  }







`;
const Heading= styled.h1`
font-family:"Urbanist", serif;
font-size: 78px;
font-weight: 800;
line-height: 93.62px;
letter-spacing: 0.31476014852523804px;
text-align: left;
color: #FFFFFF;

@media (max-width: 768px) {
font-size: 65px;
}
@media (max-width: 480px) {
 font-size: 50px;
 margin-bottom:0px;
 margin-top:0px;
  line-height: 70px;
  }
@media (max-width: 390px) {
 font-size: 40px;
  line-height: 50px;
  }


`;
const Small= styled.small`
font-family:  Varela Round;
font-size: 32px;
font-weight: 500;
line-height: 47.21px;
letter-spacing: 0.31476014852523804px;
text-align: left;
color: #FFFFFF;

@media (max-width: 768px) {
font-size: 25px;
}
@media (max-width: 480px) {
 font-size: 20px;
 
  }
`;
const Button= styled.button`
margin-top :30px;
padding: 16px 72px ;
border-radius: 8px;
font-family:  Varela Round;
font-size: 24px;
font-weight: 700;
line-height: 28.8px;
text-align: center;
color: #3C4242;
border: none;
display:block;

@media (max-width: 768px) {
font-size: 20px;
padding: 12px 60px ;
}
@media (max-width: 480px) {
 font-size: 15px;
 margin-top:10px;
 padding: 12px 50px ;
  }
   
@media (max-width: 390px) {
 
 margin-top:20px;
  
  }
 

`;
const Image= styled.img`
width: 24px;
height: 44.47px;

@media (max-width: 480px) {
 width: 15px;
  }



`;
const Image1= styled.img`
width: 24px;
height: 44.47px;

@media (max-width: 480px) {
 width: 15px;
  }

`;
const Button1= styled.button`
 position: absolute;
  top: 45%;
  left: 10px;
  border: none;
  cursor: pointer;
  background:  transparent;
   z-index: 10; 
  
   
  
`;
const Button2= styled.button`
 position: absolute;
  top: 45%;
  left: 1400px;
  border: none;
  cursor: pointer;
  background:  transparent;
   margin-left: 4px;
   z-index: 10; 

 @media (max-width: 1400px) {
   left: 1360px;
    @media (max-width: 1366px) {
   left: 1320px;


  }
    @media (max-width: 1280px) {
   left: 1230px;


  }
   @media (max-width: 1100px) {
  left: 1050px;
   }
  @media (max-width: 1024px) {
  left: 980px;
   }
  @media (max-width: 768px) {
  left: 940px;
   }
  @media (max-width: 480px) {
  left: 450px;
  }
  @media (max-width: 390px) {
 left: 350px;
 
  }
   
   
  
`;
export default Dresses;