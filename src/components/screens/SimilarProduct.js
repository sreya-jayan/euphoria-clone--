import React from 'react'
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocation,useParams  } from 'react-router-dom';


import img1 from '../../assets/images/img-20.jpg';
import img2 from '../../assets/images/img-22.jpg';
import img3 from '../../assets/images/img-23.jpg';
import img4 from '../../assets/images/img-24.jpg';
import WishList from '../../assets/images/wishlist.svg';

function SimilarProduct() {
  const { id } = useParams(); 
  const location = useLocation();
  const [similars, setSimilars]=useState([])

  const selectedImage = location.state ? location.state.selectedImage : null;



  useEffect(()=>{
    const similarsView =[
      {
        "id":1,
        "image1":img1,
        "image":WishList,
        "name":"White T-Shirt" ,
        "price":"$13.00",
        "Brand":"Priya’s  Brand"
  
      },
      {
        "id":2,
        "image1":img2,
        "image":WishList,
        "name":"Dark Green Sweatshirt...." ,
        "price":"$127.00",
        "Brand":"Roboto’s  Brand"
  
      },
      {
        "id":3,
        "image1":img3,
        "image":WishList,
        "name":"Levender Sweatshirt ...." ,
        "price":"$133.00",
        "Brand":"Jhanvi’s  Brand"
  
      },
      {
        "id":4,
        "image1":img4,
        "image":WishList,
        "name":"Urban jacket with white ...." ,
        "price":"$79.00",
        "Brand":"Sagar’s  Brand"
  
      }
    ];
    setSimilars(similarsView);
  },[]);
  useEffect(() => {
    if (selectedImage) {
      setSimilars((prevSimilars) => {
        const updatedSimilars = [...prevSimilars];
        updatedSimilars[0] = { ...updatedSimilars[0], image1: selectedImage }; 
        return updatedSimilars;
      });
    }
  }, [selectedImage]);
  


  const renderSimilars =()=> {
    return similars.map((similar)=>(
      <Containers key={similar.id}>
      <SimilarImage src={similar.image1} alt={similar.name} />
      < WhishListBg>
         <WhishList src={similar.image} alt={similar.name}/>
      </WhishListBg>
      

         <PriceContainers>
         <Heading4>{similar.name}</Heading4>
         <PriceBg>
         <Price>{similar.price}</Price>
         </PriceBg>
         
         </PriceContainers>
         <Small>{similar.Brand}</Small>

 </Containers>


    ));

  };
  return (
    <div>
        <Helmet>
            <title>SimilarProduct| euphoria</title>
        </Helmet>
        <SimilarContainer>
            <SimilarProducts>
            <Redtangle></Redtangle>
            <Heading>Similar Products</Heading>
            </SimilarProducts>

            <ImageContainers>{renderSimilars()} </ImageContainers>

        </SimilarContainer>
    </div>
  )
}
const SimilarContainer=styled.div`
 width:90%;
  max-width: 1280px;
 margin: 0 auto;
 padding: 30px 0;`;
const SimilarProducts=styled.div`
display:flex;
 margin-left:20px;
 `;
const Redtangle= styled.div`
width: 6px;
height: 30px;
border-radius: 10px ;
background: #8A33FD;`;
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
`;
const ImageContainers=styled.div`
display:flex;
flex-wrap:wrap;
 justify-content:space-around;
 margin-top:30px;
 `;
const Containers=styled.div`
 position: relative;
  display: inline-block; 


  

 `;
const SimilarImage=styled.img`
 display-block;
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
const PriceContainers=styled.div`
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



export default SimilarProduct;