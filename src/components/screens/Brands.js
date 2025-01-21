import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

function Brands() {
  return (
    <div>
        <Helmet>
            <title>Brands | euphoria</title>
        </Helmet>
        <BrandContainer>
        <Heading>Top Brands Deal</Heading>
        <Items>
        <Small>Up To </Small>
        <Span> 60%</Span>
        <Small>off on brands</Small>
        </Items>
        <BrandLogos>
        <LogoImages>
          <LogoImage src={require("../../assets/images/nike.jpg")}alt="image" /> 
        </LogoImages>
        
        <LogoImages>
           <LogoImage src={require("../../assets/images/H&M.jpg")}alt="image" />
        </LogoImages>
       
        <LogoImages>
           <LogoImage src={require("../../assets/images/levis.jpg")}alt="image" />
        </LogoImages>
       

        <LogoImages>
          <LogoImage src={require("../../assets/images/USPA.jpg")}alt="image" />
        </LogoImages>
       
       <LogoImages>
          <LogoImage src={require("../../assets/images/puma.jpg")}alt="image" />
       </LogoImages>
        
        </BrandLogos>
        </BrandContainer>

    </div>
  );
}
const BrandContainer= styled.div`
 width:90%;
  max-width: 1280px;
 margin: 0 auto;
 padding: 30px 0;
 width: 1233px;


border-radius: 12px ;
border: 1.07px;
opacity: 0px;
border: 1.07px solid;
background: #323232;


@media (max-width: 1366px) {
  width: 1200px;
  }

@media (max-width: 1280px) {
  width: 1110px;
   
  
   }
   @media (max-width: 1100px) {
    width: 950px;
     
   }
    @media (max-width: 1024px) {
    width: 880px;
     
   }
  @media (max-width: 1024px) {
   width: 830px;
   }
   @media (max-width: 768px) {
    width: 600px;  
}
    @media (max-width: 480px) {
    width: 350px;}
               
@media (max-width: 390px) {
  width: 300px; 
 
  }
     
`;
const Heading= styled.h1`

font-family:  "Urbanist", serif;
font-size: 50px;
font-weight: 800;
line-height: 49.1px;
text-align: center;
margin :0 auto;
color: #FFFFFF;

@media (max-width: 480px) {
   font-size: 40px;
    }
                 
@media (max-width: 390px) {
   
 font-size: 30px;
  }
 

`;
const Items= styled.div`
display:flex;
 
justify-content:center;
align-items:center;
margin-top:30px;
margin-bottom:70px;
`;
const Small= styled.small`
font-family: "Urbanist", serif;
font-size: 22px;
font-weight: 400;
line-height: 26.4px;
text-align: center;
color: #FFFFFF;


@media (max-width: 480px) {
  font-size: 17px;
   }

`;
const Span= styled.label`
font-family: "Urbanist", serif;
font-size: 22px;
font-weight: 700;
line-height: 26.4px;
text-align: center;
color: #FBD103;


@media (max-width: 480px) {
  font-size: 17px;
   }

`;
const BrandLogos= styled.div`
display: flex;
  flex-wrap: wrap;
justify-content:center;
align-items:center;
gap:20px;

`;

const LogoImage= styled.img`
width: 149.08px;
  height: 53.47px;

@media (max-width: 1024px) {
   width: 100px; 
   }
    @media (max-width: 480px) {
    width: 80px;
   
    }
    
`;

const LogoImages= styled.div`
  width: 177.52px;
  height: 85.55px;
  border-radius: 12px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:30px;

   @media (max-width: 768px) {
    width: 160px;
}
    @media (max-width: 480px) {
    width: 90px;
    height: 70px;
    }
     
     
}


 
  
`;


export default Brands;