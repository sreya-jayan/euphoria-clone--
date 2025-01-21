import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useState, useEffect } from 'react';



import img1 from '../../assets/images/img-12.jpg';
import img2 from '../../assets/images/img-13.jpg';
import img3 from '../../assets/images/img-14.jpg';
import img4 from '../../assets/images/img-15.jpg';
import arrow from '../../assets/images/arrow-right.svg';

function CategoriesWomen() {
    const [womens, setWomens]=useState([])

useEffect(() => {
    const WomenView =[
        {
            "id":1,
            "image":img1,
            "name":"Hoodies & Sweetshirt",
            "arrow":arrow,
            "text":"Explore Now!"
        },
        {
            "id":2,
            "image":img2,
            "name":"Coats & Parkas",
            "arrow":arrow,
            "text":"Explore Now!"
        },
        {
            "id":3,
            "image":img3,
            "name":"Tees & T-Shirt",
            "arrow":arrow,
            "text":"Explore Now!"
        },
        {
            "id":4,
            "image":img4,
            "name":"Boxers",
            "arrow":arrow,
            "text":"Explore Now!"
        }
    ];
    setWomens(WomenView ) 

},[]);

const renderWomens=()=>{
    return womens.map((women)=>(
        <ContainerOne>
                 <DressImage src={women.image} alt='image' />

                    <ArrowContainer>
                    <Heading4>{women.name}</Heading4>
                    <ArrowImage src={women.arrow} alt='image1'/>
                    </ArrowContainer>
                    <Small>{women.text}</Small>

            </ContainerOne>

    ))
}
  return (
    <div>
        <Helmet>
            <title>CategoriesWomen | euphoria</title>
        </Helmet>
        <CategoriesWomenContainer>
        <TopContainer>
             <Rectagle></Rectagle>
             <Heading>Categories For Women</Heading>
            </TopContainer>
        
        <ImageContainer>{renderWomens()}</ImageContainer>


        </CategoriesWomenContainer>
                    

    </div>
  );
}

 const CategoriesWomenContainer= styled.div`
 width:90%;
  max-width: 1280px;
 margin: 0 auto;
 padding: 30px 0;
     `;
 const TopContainer= styled.div`
 display:flex;
 margin-left:20px;
 `;
 const Rectagle= styled.div`
 width: 6px;
height: 30px;
border-radius: 10px ;
background: #8A33FD;

@media (max-width: 480px) {
    margin-left:40px;
    }
           
@media (max-width: 390px) {
  margin-left:20px;
 
  }
`;
 const Heading= styled.h2`
 display:inline;
margin-top:0px;
margin-left:20px;
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
 const ImageContainer= styled.div`
 display:flex;
  flex-wrap: wrap;
 justify-content:space-around;
 margin-top:30px;
 
 `;
 const ContainerOne= styled.div`
 @media (max-width: 1100px) {
   margin-top:30px;
   }
 `;
 const DressImage= styled.img`
 
@media (max-width: 1280px) {
    width: 250px;
     height: 370px;
    
}
       

     `;
 const ArrowContainer= styled.div`
 display:flex;
justify-content: space-between;
`;

 const  Heading4 =styled.h4`
 font-family:"Varela Round", serif;
font-size: 17.88px;
font-weight: 700;
line-height: 27.93px;
letter-spacing: -0.04em;
text-align: left;
color: #2A2F2F;
margin-bottom:0px;
`;

 const ArrowImage= styled.img`
  display:inline;
  margin-top:30px; 
 `;

 const Small= styled.small`
 font-family:"Varela Round", serif;
font-size: 13.41px;
font-weight: 500;
line-height: 27.93px;
letter-spacing: -0.04em;
text-align: left;
color: #7F7F7F;`;





export default CategoriesWomen;