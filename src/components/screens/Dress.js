import React from 'react'
import { Helmet } from 'react-helmet';
import DressImage from "../../assets/images/bg8.jpg";
import DressImage2 from "../../assets/images/bg9.jpg";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


function Dress() {
  const Navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Dress | euphoria</title>
      </Helmet>
     
      <ImageContainer>
        <ImageSection1>
           <TextContainer>
            <SmallText>Low Price</SmallText>
            <Heading2>High Coziness</Heading2>
            <Span>UPTO 50% OFF</Span>
            <Small onClick={()=> Navigate("/product/id")}>Explore Items</Small>
            </TextContainer>
        </ImageSection1>
        <ImageSection2>
        <TextContainer>
         <SmallText>Low Price</SmallText>
         <Heading2>High Coziness</Heading2>
         <Span>UPTO 50% OFF</Span>
        <Small onClick={()=>Navigate("/product/:id")}>Explore Items</Small>
        </TextContainer>
        </ImageSection2>
      </ImageContainer>
     
    </div>
  );
}
const ImageContainer= styled.div`
width: 90%;
max-width: 1280px;
padding: 80px 0px;
 margin: 0 auto;
 display:flex;
 flex-wrap:wrap;
 justify-content:center;
 gap:30px;
 align-items:center;

 @media (max-width: 390px) {
  padding: 0 ;
 gap:0px;
 margin-bottom:0px;
 overflow: hidden;  
 
  }


 `;
 
const ImageSection1= styled.div`
background-image:url(${DressImage});
width: 604.93px;
height: 356.2px;
background-position:  center; 
background-size: 100%;  /
box-shadow: 2px 2px 10px 0px #00000066;
 background-repeat: no-repeat;
 border-radius:8px;
  overflow: hidden;
 
  
 
 
 @media (max-width: 1366px) {
 width: 590px;
  }

 @media (max-width: 1280px) {
 
  }
 @media (max-width: 480px) {
   width: 350px;
    margin-top:0;
    margin-bottom:0;
   }
   @media (max-width: 390px) {
  width: 320px;
  height: 355.84px;
   gap:0;
    margin-top:0;
 
 
  }


`;

const ImageSection2= styled.div`

 
  background-image: url(${DressImage2});
  width: 604.93px; 
  height: 355.84px;
  background-position:  center; 
  background-size: 110%;
  background-repeat: no-repeat;
 border-radius: 8px;
  overflow: hidden;
  
   

 
 @media (max-width: 1366px) {
 width: 590px;
 height: 350.2px;
  }

  @media (max-width: 480px) {
   margin-top:0;
   
    width: 350px;
     background-size: 100%;
   overflow: hidden; 
   border-radius: 8px ; 
   }
@media (max-width: 390px) {
  width: 320px;
   height: 355.84px;
   background-size: 100%;
   border-radius: 8px ;
   overflow: hidden; 
    margin-top:0;
    gap:0;
   
  
 
  }




`;
const TextContainer= styled.div`

@media (max-width: 480px) {
  
  margin-top :100px;
 
  }

`;
const SmallText= styled.small`
font-family: Montserrat;
font-size: 18px;
font-weight: 800;
line-height: 30.07px;
letter-spacing: 0.2505565583705902px;
text-align: left;
color: #FFFFFF;
margin :25px;
 

`;
const Heading2= styled.h2`
font-family: "Urbanist", serif;
font-size: 34px;
font-weight: 800;
line-height: 45.1px;
text-align: left;
color: #FFFFFF;
margin :25px;

 @media (max-width: 480px) {
   font-size: 20px;
   margin :0px;
   margin-left :20px;
   }

`;
const Span= styled.label`
font-family:  "Urbanist", serif;
font-size: 16px;
font-weight: 500;
line-height: 25.06px;
letter-spacing: 0.2505565583705902px;
text-align: left;
color: #FFFFFF;
margin :25px;

`;
const Small= styled.small`
display:block;
font-family: "Urbanist", serif;
font-size: 20px;
font-weight: 800;
line-height: 30.13px;
text-align: left;
text-decoration-line: underline;
text-decoration-skip-ink: none;
color: #FFFFFF;
margin :25px;
cursor:pointer;


`;

export default Dress;