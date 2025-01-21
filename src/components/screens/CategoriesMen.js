import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

function CategoriesMen() {
  return (
    <>
        <Helmet>
            <title>CategoriesMen | euphoria</title>
        </Helmet>
        <CategoriesContainer>
            <TopContainer>
                <RedTangle></RedTangle>
                <Heading>Categories For Men</Heading>
            </TopContainer>
            <TopImageContainer>
                <Container1>
                    <DressImage src={require("../../assets/images/img-5.jpg")} alt='image' />

                    <ArrowItems>
                    <Heading4>Shirts</Heading4>
                    <ArrowImage src={require("../../assets/images/arrow-right.svg").default} alt='image1'/>
                    </ArrowItems>
                    
                    <Small>Explore Now!</Small>
                </Container1>
                <Container1>
                    <DressImage src={require("../../assets/images/img-6.jpg")} alt='image'/>
  
                    <ArrowItems>
                    <Heading4>Printed T-Shirts</Heading4>
                    <ArrowImage src={require("../../assets/images/arrow-right.svg").default} alt='image2'/>
                    </ArrowItems>
                    
                   
                    <Small>Explore Now!</Small>
                </Container1>
                <Container1>
                    <DressImage src={require("../../assets/images/img-7.jpg")} alt='image'/>

                    <ArrowItems>
                    <Heading4>Plain T-Shirt</Heading4>
                    <ArrowImage src={require("../../assets/images/arrow-right.svg").default} alt='image3'/>
                    </ArrowItems>
                    
                    <Small>Explore Now!</Small>
                </Container1>
                <Container1>
                    <DressImage src={require("../../assets/images/img-8.jpg")} alt='image'/>

                    <ArrowItems>
                    <Heading4>Polo T-Shirt</Heading4>
                    <ArrowImage src={require("../../assets/images/arrow-right.svg").default} alt='image'/>
                    </ArrowItems>
                    
                    <Small>Explore Now!</Small>
                </Container1>
            </TopImageContainer>


           <BottomImageContainer>
               <Container2>
                  <DressImage2 src={require("../../assets/images/img-9.jpg")} alt='image'/>
                 
                    <ArrowItems2>
                        <HeadingTwo>Hoodies & Sweetshirt</HeadingTwo>
                        <ArrowImage2 src={require("../../assets/images/arrow-right.svg").default} alt='image'/>
                    </ArrowItems2>
                    <Small2>Explore Now!</Small2>
                  
               </Container2>

               <Container2>
                  <DressImage2 src={require("../../assets/images/img-10.jpg")} alt='image'/>
                 
                    <ArrowItems2>
                        <HeadingTwo>Jeans</HeadingTwo>
                        <ArrowImage2 src={require("../../assets/images/arrow-right.svg").default} alt='image'/>
                    </ArrowItems2>
                    <Small2>Explore Now!</Small2>
                 
               </Container2>

               <Container2>
                  <DressImage2 src={require("../../assets/images/img-1.jpg")} alt='image'/>
                 
                    <ArrowItems2>
                        <HeadingTwo>Activewear</HeadingTwo>
                        <ArrowImage2 src={require("../../assets/images/arrow-right.svg").default} alt='image'/>
                    </ArrowItems2>
                    <Small2>Explore Now!</Small2>
                  
               </Container2>

                <Container2>
                  <DressImage2 src={require("../../assets/images/img-11.jpg")} alt='image'/>
                 
                    <ArrowItems2>
                        <HeadingTwo>Boxers</HeadingTwo>
                        <ArrowImage2 src={require("../../assets/images/arrow-right.svg").default} alt='image'/>
                    </ArrowItems2>
                    <Small2>Explore Now!</Small2>
                 
               </Container2> 
           </BottomImageContainer>
        </CategoriesContainer>
       
    </>
  );
}
 const CategoriesContainer =styled.div`
 width:90%;
  max-width: 1280px;
 margin: 0 auto;
 padding: 30px 0;

`;
 const TopContainer =styled.div`
 display:flex;
 margin-left:20px;

`;

 const RedTangle =styled.div`
 width: 6px;
height: 30px;
border-radius: 10px;
background: #8A33FD;


@media (max-width: 480px) {
    margin-left: 40px;
  
   }
               
@media (max-width: 390px) {
  margin-left:20px;
 
  }
`;

 const Heading =styled.h2`
 margin-left:20px;
 margin-top:0px;
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
     
@media (max-width: 390px) {
 font-size: 25px;
 
  }




 `;

 const TopImageContainer =styled.div`
 display:flex;
  flex-wrap: wrap;
 justify-content:space-around;
 margin-top: 30px;
`;

 const Container1 =styled.div`
   @media (max-width: 1100px) {
     &:nth-child(4) {
margin-top:30px;
}
@media (max-width: 768px) {
     &:nth-child(3) {
margin-top:30px;
}
`;

 const DressImage =styled.img`
 width: 270.36px;
height: 393.26px;
border-radius: 10px ;


@media (max-width: 1280px) {
    width: 250px;
     height: 370px;
    
     }

    
   
   

`;
const ArrowItems =styled.div`
display:flex;
justify-content: space-between;
`;




 const Heading4 =styled.h4`
font-family:"Varela Round", serif;
font-size: 17.88px;
font-weight: 700;
line-height: 27.93px;
letter-spacing: -0.04em;
text-align: left;
color: #2A2F2F;
margin-bottom:0px;

`;
 const ArrowImage=styled.img`
 display:inline;
  margin-top:30px; 
 `;

 const Small =styled.small`
 font-family:"Varela Round", serif;
font-size: 13.41px;
font-weight: 500;
line-height: 27.93px;
letter-spacing: -0.04em;
text-align: left;
color: #7F7F7F;

`;


 const BottomImageContainer= styled.div`

 display:flex;
  flex-wrap: wrap;
 justify-content: space-around;
 margin-top: 40px;
`;
 const Container2= styled.div`
 @media (max-width: 1100px) {
     &:nth-child(4) {
margin-top:30px;
}
@media (max-width: 768px) {
     &:nth-child(3) {
margin-top:30px;
}
 `;

 const DressImage2= styled.img`
 width: 270.36px;
height: 393.26px;
border-radius: 10px ;


@media (max-width: 1280px) {
    width: 250px;
     height: 370px;
    
     }
    

`;

 const ArrowItems2= styled.div`

 display:flex;
justify-content: space-between;

 `;

 const HeadingTwo= styled.h4`
 font-family:"Varela Round", serif;
font-size: 17.88px;
font-weight: 700;
line-height: 27.93px;
letter-spacing: -0.04em;
text-align: left;
color: #2A2F2F;
margin-bottom:0px;
`;

 const ArrowImage2=styled. img`
 display:inline;
 margin-top:30px; 
 `;

 const Small2=styled.small`
 font-family:"Varela Round", serif;
font-size: 13.41px;
font-weight: 500;
line-height: 27.93px;
letter-spacing: -0.04em;
text-align: left;
color: #7F7F7F;
`;


export default CategoriesMen;