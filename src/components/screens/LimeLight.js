import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import img1 from '../../assets/images/img-16.jpg';
import img2 from '../../assets/images/img-17.jpg';
import img3 from '../../assets/images/img-18.jpg';
import img4 from '../../assets/images/img-19.jpg';
import WishList from '../../assets/images/wishlist.svg';
import { Link, useNavigate } from 'react-router-dom';


function LimeLight() {
  
  const [limes, setLimes]=useState([]);
  const navigate = useNavigate();

useEffect(()=>{
  const LimeView =[
    {
      "id":1,
      "image1":img1,
      "image":WishList,
      "name":"Black Sweatshirt with ...." ,
      "price":"$123.00",
      "Brand":"Jhanvi’s  Brand"

    },
    {
      "id":2,
      "image1":img2,
      "image":WishList,
      "name":"line Pattern Black H..." ,
      "price":"$37.00",
      "Brand":"AS’s Brand"

    },
    {
      "id":3,
      "image1":img3,
      "image":WishList,
      "name":"Black Shorts" ,
      "price":"$37.00",
      "Brand":"MM’s Brand"

    },
    {
      "id":4,
      "image1":img4,
      "image":WishList,
      "name":"Levender Hoodie with ...." ,
      "price":"$119.00",
      "Brand":"Nike’s Brand"

    }
  ];
  setLimes(LimeView);

},[]);

const handleImageClick = (image) => {
  navigate(`/product/${image.id}`, { state: { selectedImage: image.image1 } });
};


const renderLimes =()=> {
  return limes.map((lime) => (
<ContainerOne  key={lime.id}   onClick={() => handleImageClick(lime)}>
       <Link to={`/product/${lime.id}`}>
         <LimeImage src={lime.image1} alt={lime.name} />
      </Link>
      <WhishListBg>
         <WhishList src={lime.image} alt={lime.name}/>
      </WhishListBg>
       <PriceContainer>
       <Heading4>{lime.name}</Heading4>
       <PriceBg>
       <Price>{lime.price}</Price>
       </PriceBg>
       
       </PriceContainer>
       <Small>{lime.Brand}</Small>

</ContainerOne>

  ));
};
  return (
    <div>
        <Helmet>
            <title>LimeLight | euphoria</title>
        </Helmet>
        <LimeLightContainer>
        <TopContainer>
             <Rectagle></Rectagle>
             <Heading>In The Limelight</Heading>
            </TopContainer>
        

        <ImageContainer>{renderLimes ()} </ImageContainer>

        </LimeLightContainer>
       

    </div>
  );
}

const LimeLightContainer=styled.div`
 width:90%;
  max-width: 1280px;
 margin: 0 auto;
 padding: 30px 0;`;
const TopContainer=styled.div`
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
  margin-bottom:0;
   margin-top:20px;
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
   margin-top:20px;
 font-size: 25px;
  }
`;
const ImageContainer=styled.div`
display:flex;
  flex-wrap: wrap;
 justify-content:space-around;
 margin-top:30px;

 @media (max-width: 1100px) {
 margin-left:10px;
 }
                    
@media (max-width: 390px) {
   
  margin-top:0;
  }
  


 `;
const ContainerOne=styled.div`
 position: relative;

 @media (max-width: 1100px) {
  
margin-top:30px;
  
   }

 

 `;
const LimeImage=styled.img`
@media (max-width: 1366px) {
  width: 270px;
}
  
  
@media (max-width: 1280px) {
  width: 250px;
height: 350px;
margin-left:15px;
  
   }

  
  
`;
const WhishList=styled.img`
 margin-left:8px;
 margin-top:8px;
 

 
 
 `;
 const WhishListBg=styled.div`
  position: absolute; 
  transform: translate(+700%, -1080%); 
background: #FFFFFF;
width: 32.36px;
height: 32.36px;
border-radius:50%;



@media (max-width: 1280px) {
  transform: translate(+650%, -1060%); 

 
  }
 `;
const PriceContainer=styled.div`
display:flex;
justify-content: space-between;`;
const Heading4=styled.h4`

font-family:"Varela Round", serif;
font-size: 17.88px;
font-weight: 700;
line-height: 27.93px;
letter-spacing: -0.04em;
text-align: left;
color: #2A2F2F;
margin-bottom:0px;

 @media (max-width: 1100px) {
   font-size: 15px;
margin-left:15px;
    }


`;
const PriceBg=styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  background: #F6F6F6;
width: 82.31px;
height: 36.58px;
border-radius: 8px;
margin-top:20px;

@media (max-width: 1100px) {
   width: 70px;

    }
`;

const Price=styled.h4`
margin-bottom:20px;
font-family: "Varela Round", serif;
font-size: 14px;
font-weight: 700;
line-height: 16.8px;
text-align: center;


@media (max-width: 1100px) {
 font-size: 12px;

   }


`;
const Small= styled.small`
font-family:"Varela Round", serif;
font-size: 13.41px;
font-weight: 500;
line-height: 27.93px;
letter-spacing: -0.04em;
text-align: left;
color: #7F7F7F;



@media (max-width: 1100px) {
  margin-left:15px;
 
    }
 


`;


export default LimeLight;