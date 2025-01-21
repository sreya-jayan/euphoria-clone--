import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import BackgroundImage1 from "../../assets/images/bg-4.jpg";
import BackgroundImage2 from "../../assets/images/bg-5.jpg";


function Fashion() {
  return (
    <div>
        <Helmet>
            <title> Fashion | euphoria</title>
        </Helmet>
        <FashionContainer>
            <BgSection>
                <Items>
                <Heading>WE MADE YOUR EVERYDAY <br />FASHION BETTER!</Heading>
                <Paragraph>In our journey to improve everyday fashion,<br /> euphoria presents EVERYDAY wear range - <br /> Comfortable & Affordable fashion 24/7</Paragraph>
                <Button>Shop Now</Button>
                </Items>
               
            </BgSection>
            <BgSection1>

            </BgSection1>
        </FashionContainer>
    </div>
  );
}
const FashionContainer=styled.div`
width:90%;
 max-width: 1280px;
margin: 0 auto;
padding: 30px 0;
display:flex;
  flex-wrap: wrap;


`;
const BgSection =styled.div`
background-image: url(${BackgroundImage1});
width: 614px;
height: 639.72px;
left: 614px;
gap: 0px;
opacity: 0px;
angle: -180 deg;
margin-left:25px;


@media (max-width: 1400px) {
  width: 600px;

   }
  @media (max-width: 1366px) {
 width: 590px;

}
@media (max-width: 1280px) {
  width: 550px;
  height: 600px;
   border-radius:10px 0 0 10px;
   }

   @media (max-width: 1100px) {
  width: 470px;
  height: 500px;
   }
    
 @media (max-width: 1024px) {
 border-radius:10px;
 margin:0 auto;
   }
  @media (max-width: 480px) {
   width: 350px;
   height: 350px;
   }


`; 
const Items =styled.div`
margin-left:70px;
margin-top:180px;


 @media (max-width: 1100px) {
  margin-top:100px;
   }
  @media (max-width: 480px) {
   margin-top:50px;
   margin-left:40px;

   }
`;
const Heading =styled.h1`
font-family: "Urbanist", serif;
font-size: 34px;
font-weight: 800;
line-height: 50px;
letter-spacing: 0.20758114755153656px;
text-align: left;
color: #FFFFFF;

@media (max-width: 480px) {
   font-size: 25px;
   line-height: 40px;
   }

`; 
const Paragraph=styled.p`
font-family:"Varela Round", serif;
font-size: 20px;
font-weight: 300;
line-height: 24px;
letter-spacing: 1px;
text-align: left;
color: #FFFFFF;

 @media (max-width: 1100px) {
  font-size: 15px;
   }
  @media (max-width: 480px) {
   font-size: 12px;
   line-height: 15px;
   
   }

`; 
const Button =styled.button`

padding: 12px 44px ;
gap: 12px;
border-radius: 8px ;
border:none;
font-family: "Varela Round", serif;
font-size: 18px;
font-weight: 600;
line-height: 21.6px;
text-align: center;
color: #3C4242;

@media (max-width: 480px) {
   font-size: 12px;
   
   
   }


`; 
const BgSection1 =styled.div`
background-image: url(${BackgroundImage2});
width: 626px;
height: 639.72px;
left: 614px;
angle: -180 deg;


@media (max-width: 1400px) {
  width: 600px;
  border-radius:0 10px 10px 0;

}
@media (max-width: 1366px) {
 width: 590px;

}




@media (max-width: 1280px) {
  width: 550px;
   height: 600px;
  
   }

   @media (max-width: 1100px) {
  width: 470px;
  height: 500px;
   }
  
 @media (max-width: 1024px) {
  border-radius:10px;
  margin:0 auto;
  margin-top:20px;
  
   }
  @media (max-width: 480px) {
   width: 350px;
   height: 350px;
   }


`; 




export default Fashion;