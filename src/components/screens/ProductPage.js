import React, { useState  } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
 import HoodieImage from "../../assets/images/img-16.jpg";
 import Slider from "react-slick";
 import { useRef } from 'react';
 


function ProductPage() {
     var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:  false,
        vertical: true,
        verticalSwiping: true,
       
      };
      const SliderRef = useRef();
    const [hoodieImage, setHoodieImage] = useState(require("../../assets/images/img-25.jpg"));

    const handleImageClick = (imageSrc) => {
        setHoodieImage(imageSrc);
      };
     

   
  return (
    <div>
        <Helmet>
            <title>ProductPage| euphoria</title>
        </Helmet>
       
       
       
        
        <ProductPageContainer>
        <PageContainer>
        
            <SlideContainer>
            <Slider ref={SliderRef} {...settings}>
           
            <SlideImages  src={require("../../assets/images/img-25.jpg")} alt="img" />
            <SlideImages src={require("../../assets/images/img-16.jpg")} alt='img'/>
            <SlideImages src={require("../../assets/images/img-26.jpg")} alt='img'/>
           
            </Slider>     
                <UparrowButton onClick={() => SliderRef.current.slickPrev()} >
                <Uparrow src={require("../../assets/images/right-arrow-light.svg").default} alt='image'/>
                </UparrowButton>
                <DownarrowButton onClick={() => SliderRef.current.slickNext()}>
                <Downarrow src={require("../../assets/images/arrow-down.svg").default} alt='image'/>
                </DownarrowButton >
               
            </SlideContainer>
           

            <HoodieContainer hoodieImage={hoodieImage} >
            
            </HoodieContainer>

            <CartContainer>
                <ShopItems>
                    <ShopItem>Shop</ShopItem>
                    <ShopArrow src={require("../../assets/images/right-arrow-light.svg").default} alt='image'/>
                    <ShopItem>Women</ShopItem>
                    <ShopArrow src={require("../../assets/images/right-arrow-light.svg").default} alt='image'/>
                    <ShopItem>Top</ShopItem>
                    </ShopItems>
                    <Heading>Raven Hoodie With  <br />
                    Black colored Design</Heading>
                    <StarItems>
                        <StarImage src={require("../../assets/images/star.svg").default} alt='img'/>
                        <StarImage src={require("../../assets/images/star.svg").default} alt='img'/>
                        <StarImage src={require("../../assets/images/star.svg").default} alt='img'/>
                        <StarImage src={require("../../assets/images/star.svg").default} alt='img'/>
                        <StarImage src={require("../../assets/images/star.svg").default} alt='img'/>
                        
                        <Span>3.5</Span>
                        <MessageImage src={require("../../assets/images/message.svg").default} alt='image'/>
                        <Small>120 comment</Small>
                    </StarItems>
                    <Small2>Select Size </Small2>
                    <Small9> Select Size</Small9>
                    <Arrow src={require("../../assets/images/arrow-right.svg").default} alt='image'/>

                    <Sizes>
                        <SizeBg>
                            <Smalls>XS</Smalls>
                        </SizeBg>
                        <SizeBg>
                            <Smalls>S</Smalls>
                        </SizeBg>
                        <SizeBg>
                            <Smalls>M</Smalls>
                        </SizeBg>
                        <SizeBg1>
                            <Smalls1>L</Smalls1>
                        </SizeBg1> 
                        <SizeBg> 
                            <Smalls>XL</Smalls>
                        </SizeBg>
                    </Sizes>

                    <Paragraph>Colours Available </Paragraph>
                    <ColorContainer>
                    <ColorsBg>
                    <Colors1></Colors1>
                    </ColorsBg>
                    
                    <Colors2></Colors2>
                    <Colors3></Colors3>
                    <Colors4></Colors4>
                    </ColorContainer>

                    <Carts>
                        
                        <AddcartButton onClick={()=>alert("Add to cart!..")}>
                        <CartImage src={require("../../assets/images/cart.svg").default} alt='image'/>
                        Add to cart
                        </AddcartButton>
                            
                       
                        <PriceButton>$63.00</PriceButton>
                    </Carts>

                    <PaymentContainer>
                    <PaymentImageBg>
                    <PaymentImage src={require("../../assets/images/credit card.svg").default} alt='image'/>
                    </PaymentImageBg>
                        
                        <SmallPayment>Secure payment</SmallPayment>
                        <PaymentImageBg>
                        <SizeImage src={require("../../assets/images/Size&Fit.svg").default} alt='image'/>
                        </PaymentImageBg>
                        
                        <SmallSize>Size & Fit</SmallSize>
                    </PaymentContainer>

                    <ShippingContainer>
                    <ShippingImageBg>
                    <ShippingImage src={require("../../assets/images/truck.svg").default} alt='image'/>
                    </ShippingImageBg>
                        
                        <SmallShipping>Free shipping</SmallShipping>
                        <ShippingImageBg>
                        <RiturnImage src={require("../../assets/images/Free-Shipping&Returns.svg").default} alt='image'/>
                        </ShippingImageBg>
                        
                        <SmallReturn>Free Shipping & Returns</SmallReturn>
                    </ShippingContainer>
               
            </CartContainer>
            </PageContainer>
         </ProductPageContainer>

            
    </div>
  );
}
const ProductPageContainer= styled.div`
background: #F6F6F6;
border-top: 1px solid #BEBCBD;
  


`;
const PageContainer= styled.div`

display:flex;
flex-wrap:wrap;
     justify-content:flex-start;
     width:90%;
     max-width: 1280px;
     margin: 0 auto;
     padding: 0px 0;


    
    

     
`;
const SlideContainer= styled.div`

     width: 100px;
height: 590px;
margin-top:110px;
overflow: hidden;
margin-right:20px;


@media (max-width: 1100px) {
margin-left:80px;
}

@media (max-width: 480px) {
    margin-left:30px;
    }
    @media (max-width: 480px) {
     margin-top:30px;
      height: 350px; 
      margin-left:150px;
     
    }
@media (max-width: 390px) {
 margin-left:120px;
}
     
   



    
`;
const SlideImages= styled.img`
display: block;
max-width: 100%;
   width:68.04px;
    height: 68.04px;
    border-radius: 9.07px;
   
    margin-top: 10px;


    @media (max-width: 1100px) {
      width:100%;
        }
 
        
    

`;
const UparrowButton= styled.button`
display:block;
margin-left:35px;
margin-top:20px;
width: 21.17px;
height: 21.17px;
background: #FFFFFF;
border-radius:50%;
border:none;
cursor:pointer;


`;
const Uparrow= styled.svg`
display:block;
color: #3C4242;
width: 5.29px;
height: 8.23px;
top: 8.47px;
left: 14.82px;
transform: rotate(-90deg);


`;

const DownarrowButton =styled.button`
display:block;
margin-left:35px;
margin-top:20px;
width: 21.17px;
height: 21.17px;
top: 21.17px;
left: 21.17px;
gap: 0px;
opacity: 0px;
angle: -180 deg;
background: #3C4242;
border-radius:50%;
border:none;
cursor:pointer;
`;
const Downarrow= styled.img`
display-block;
width: 5.29px;
height: 8.23px;
top: 13.76px;
left: 6.35px;
gap: 0px;
opacity: 0px;
angle: 90 deg;
color: #FFFFFF;

@media (max-width: 480px) {
      margin-bottom:0px;
    }

`;
const HoodieContainer= styled.div`
display:block;
width: 470px;
height: 700px;
background-image: url(${HoodieImage });
background-size: cover;
background-position: center;
margin-top:0px;
margin-right:0px;


@media (max-width: 1100px) {
   width: 430px; 
  height: 600px;
  margin-left:250px;
  }

@media (max-width: 768px) {
 margin-left:50px;
     width: 380px; 
  
  }
@media (max-width: 480px) {
     width: 300px; 
      height: 350px; 
      margin-top:20px;
       margin-left:70px;
    }
@media (max-width: 390px) {
 margin-left:30px;
}




`;


const CartContainer= styled.div`
margin-left:60px;
background:transparent;

@media (max-width: 1100px) {
margin-top:0;
   margin-left:250px;
  }


@media (max-width: 768px) {
    margin-left:150px;
       
     
     }
    @media (max-width: 480px) {
    
       margin-left:50px;
         margin-top:30px;
    }
@media (max-width: 390px) {
 margin-left:20px;
}


`;
const ShopItems= styled.ul`
display:flex;
gap:15px;
`;
const ShopItem= styled.li`
font-family: "Urbanist", serif;
font-size: 18px;
font-weight: 500;
line-height: 21.6px;
text-align: left;
color: #807D7E;
list-style:none;


`;
 const ShopArrow=styled.img``;
const Heading= styled.h4`
margin-top:0px;
margin-bottom:0px;
font-family: "Varela Round", serif;
font-size: 34px;
font-weight: 600;
line-height: 47.6px;
letter-spacing: 0.02em;
text-align: left;
color: #3C4242;


@media (max-width: 390px) {
 font-size: 30px;
}

`;
const StarItems= styled.div`
display:flex;
gap:10px;
margin-top:20px;
margin-bottom:30px;

`;
const StarImage= styled.img`
display:inline-block;

`;
const Span= styled.span`
margin-right:10px;
font-family: "Urbanist", serif;
font-size: 18px;
font-weight: 500;
line-height: 21.6px;
text-align: left;
color: #807D7E;


@media (max-width: 390px) {
    font-size: 15px;
   }


`;
const MessageImage= styled.img`
display:inline-block;
`;
const Small= styled.small`
font-family: "Urbanist", serif;
font-size: 18px;
font-weight: 500;
line-height: 21.6px;
text-align: left;
color: #807D7E;


@media (max-width: 390px) {
    font-size: 15px;
   }

`;
const Small2= styled.small`
font-family: "Urbanist", serif;
font-size: 18px;
font-weight: 600;
line-height: 21.6px;
text-align: left;
color: #3F4646;
margin-right:20px;
`;

const Small9=styled.small`
font-family: "Urbanist", serif;
font-size: 18px;
font-weight: 600;
line-height: 21.6px;
text-align: left;
color: #807D7E;
`;
const Arrow= styled.img`
color:  #807D7E
display:inline-block;
margin-left:10px;`;

const Sizes= styled.div`
display:flex;
margin-top:20px;
gap:15px;
`;
const SizeBg= styled.div`
display:flex;
gap:10px;
width: 38px;
height: 38px;
border-radius: 12px ;
border: 1.5px solid #BEBCBD;
`;
const SizeBg1= styled.div` 
width: 38px;
height: 38px;
border-radius: 12px ;
background:#3C4242;
border: 1.5px solid #3C4242;
`;
const Smalls= styled.small`
font-family: "Urbanist", serif;
font-size: 14px;
font-weight: 500;
line-height: 16.8px;
text-align: center;
color: #3C4242;
margin-left:10px;
margin-top:10px;

`;
const Smalls1= styled.div`
margin-left:14px;
margin-top:8px;
`;
const Paragraph= styled.p`
font-family: "Urbanist", serif;
font-size: 18px;
font-weight: 600;
line-height: 21.6px;
text-align: left;
color: #3F4646;
margin-top:40px;
`;
const ColorContainer= styled.div`
display:flex;
gap:20px;
margin-top:20px;
margin-bottom:30px;
`;
const ColorsBg= styled.div`
border: 1px solid #3F4646;
border-radius:50%;
width: 30px;
height: 30px;


`;
const Colors1= styled.div`

margin-top:4px;
margin-left:4px;
width: 22px;
height: 22px;
border-radius:50%;
background: #3C4242;




`;
const Colors2= styled.div`
width: 22px;
height: 22px;
border-radius:50%;
background: #EDD146;
margin-top:5px;
`;
const Colors3= styled.div`
width: 22px;
height: 22px;
border-radius:50%;
background: #EB84B0;
margin-top:5px;
`;
const Colors4= styled.div`
width: 22px;
height: 22px;
border-radius:50%;
background: #9C1F35;
margin-top:5px;
`;
const Carts= styled.div`
display:flex;
gap:20px;
margin-bottom:30px;

`;
const AddcartButton= styled.button`;

display:block;
background: #8A33FD;
border:none;
width: 199px;
height:46px;
border-radius: 8px ;
font-family: "Urbanist", serif;
font-size: 18px;
font-weight: 600;
line-height: 21.6px;
text-align: center;
color: #FFFFFF;
cursor:pointer;


@media (max-width: 390px) {
    font-size: 15px;
    width: 170px;

   }
`;
const CartImage= styled.img`
margin-right:10px;
color: #FFFFFF;
display:inline-block;
`;
const PriceButton= styled.button`

font-family: "Urbanist", serif;
font-size: 18px;
font-weight: 700;
line-height: 21.6px;
text-align: center;
left: 224px;
padding: 12px 40px 12px 40px;
border-radius: 8px ;
border: 1px solid #3C4242;


@media (max-width: 390px) {
    font-size: 15px;
    padding: 12px 30px 12px 30px;

   }

`;



const PaymentContainer= styled.div`

border-top: 1px solid #BEBCBD;
display:flex;
justify-content:left;
gap:10px;

;
`;
 const PaymentImageBg=styled.div`
 margin-top:30px;
 width: 44px;
height: 44px;
border-radius:50%;
background: #F6F6F6;


@media (max-width: 480px) {
 margin-top:15px;  
}

 `;
const PaymentImage= styled.img`
margin-left:12px;
margin-top:12px;

@media (max-width: 480px) {
    margin-left:0px; 
   }
`;
const SmallPayment= styled.small`
 margin-top:40px;

@media (max-width: 480px) {
    margin-top:28px;
    margin-left:0px;  
   }

margin-right:70px;`;
const SizeImage= styled.img`
margin-left:12px;
margin-top:12px;

@media (max-width: 480px) {
    margin-left:0px;
   }
`;
const SmallSize= styled.small`
margin-top:40px;

@media (max-width: 480px) {
    margin-top:30px;  
    margin-left:0px;

   }
`;
const ShippingContainer= styled.div`
display:flex;
justify-content:left;
gap:20px;
margin-top:20px;


@media (max-width: 480px) {
    margin-top:0px;  
   }

`;
const ShippingImageBg=styled.div`
width: 44px;
height: 44px;
border-radius:50%;
background: #F6F6F6;
`;
const ShippingImage= styled.img`
margin-left:12px;
margin-top:12px;


@media (max-width: 480px) {
    margin-left:0px; 
   }
`;
const SmallShipping= styled.small`
margin-top:10px;
margin-right:70px;

@media (max-width: 480px) {
    margin-bottom:20px;  
   }


`;
const RiturnImage= styled.img`
margin-left:12px;
margin-top:12px;


@media (max-width: 480px) {
    margin-left:20px;
   }
    @media (max-width: 390px) {
    margin-left:40px;
   }



`;
const SmallReturn= styled.small`
margin-top:10px;


@media (max-width: 480px) {
    margin-top:10px;  
   }
;

`;

export default ProductPage;