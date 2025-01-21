import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

function Footer() {
  return (
    <div>
        <FooterContainer>
            <LastItems>
                  <ListItem1>
                <ListItems>Need Help</ListItems>
                <ListItem>Contact Us</ListItem>
                <ListItem>Track Order</ListItem>
                <ListItem>Returns & Refunds</ListItem>
                <ListItem>FAQ's</ListItem>
                <ListItem>Career</ListItem>

                <IconImages>
                  <IconsBg>
                  <Icons src={require("../../assets/images/facebook.svg").default} alt="image"/>
                  </IconsBg>
                  <IconsBg>
                  <Icons  src={require("../../assets/images/instagram.svg").default} alt="image"/>
                  </IconsBg>
                  <IconsBg>
                  <Icons  src={require("../../assets/images/twitter.svg").default} alt="image"/>
                  </IconsBg>
                  <IconsBg>
                  <Icons  src={require("../../assets/images/linkedin.svg").default} alt="image"/>
                  </IconsBg>
                  
                </IconImages>
                </ListItem1>
                
           
                  <ListItem1>
                  <ListItems>Company</ListItems>
                <ListItem>About Us</ListItem>
                <ListItem>euphoria Blog</ListItem>
                <ListItem>euphoriastan</ListItem>
                <ListItem>Collaboration</ListItem>
                <ListItem>Media</ListItem>
                </ListItem1>
            
                <ListItem1>
                <ListItems>More Info</ListItems>
                <ListItem>Term and Conditions</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Shipping Policy</ListItem>
                <ListItem>Sitemap</ListItem>
                </ListItem1>

                <ListItem1>
                <ListItems>Location</ListItems>
                <ListItem>support@euphoria.in</ListItem>
                <ListItem>Eklingpura Chouraha, Ahmedabad Main Road</ListItem>
                <ListItem>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</ListItem>
                <ListItems>Download The App </ListItems>
                <ListImages>
                  <PlayImage src={require("../../assets/images/playstore.svg").default} alt="image"/>
                  <GooglePlay>
                    <Span>android app on</Span>
                    <Small>Google Play</Small>
                  </GooglePlay>
                  <PhoneImage src={require("../../assets/images/phone.svg").default} alt="image"/>
                  <Appstore>
                  <Span>Available on the</Span>
                  <Small>App Store</Small>
                 
                  </Appstore>
                    
                </ListImages>
                </ListItem1>
            </LastItems>

            <BottomContainer1>
              <Paragraph>Popular Categories</Paragraph>
             <DownArrow src={require("../../assets/images/arrow-down.svg").default} image="image"/>
            </BottomContainer1>
            <BottomContainer2>
               <Paragraph1>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</Paragraph1>
            </BottomContainer2>
        </FooterContainer>
    </div>
  );
}
const FooterContainer= styled.div`
  
 background: #3C4242;
  padding-bottom: 30px;
 `;
 const LastItems= styled.div`
 width:90%;
  max-width: 1280px;
 margin: 0 auto;
 padding: 30px 0px;
 

 display:flex;
  flex-wrap: wrap;
 justify-content:space-around;
 
 `;
 const ListItem1= styled.div`
`;
 const ListItems= styled.ul`
 
 font-family: "Urbanist", serif;
font-size: 28.58px;
font-weight: 700;
line-height: 61.99px;
text-align: left;
color: #F6F6F6;



@media (max-width: 768px) {
 font-size: 25px;
   
}

@media (max-width: 480px) {
 margin-bottom:0;
 
   }
                    
@media (max-width: 390px) {
  font-size: 20px;
  }

`;
 const ListItem= styled.li`
 margin-left:35px;
 font-family:"Urbanist", serif;
font-size: 18px;
font-weight: 500;
line-height: 39.04px;
text-align: left;
color: #F6F6F6;
list-style:none;


@media (max-width: 480px) {
  font-size: 15px;
  line-height: 33px;
 
   }



`;
 const IconImages= styled.div`
 display:flex;
 gap:10px;
 margin-top:50px;
 margin-left:35px;
 `;
 const IconsBg= styled.div`
 background: #F6F6F6;
 width: 37.02px;
height: 37.02px;
border-radius: 10.68px ;

 `;
 const Icons= styled.img`
 
width: 9.53px;
height: 17.8px;
color: #2A2F2F;
margin-left:14px;
margin-top:8px;

`;
 const ListImages= styled.div`
 display:flex;
margin-left:40px;
 
 `;
 const PlayImage= styled.img`
`;
 const GooglePlay= styled.div`
 `;
 const Span= styled.span`
 font-family: "Urbanist", serif;
font-size: 10px;
font-weight: 400;
line-height: 12px;
text-align: left;
color: #FFFFFF;
margin:10px;

 `;
 const Small= styled.small`
 display:block;
 font-family:  "Urbanist", serif;
font-size: 18px;
font-weight: 400;
line-height: 21.6px;
text-align: left;
color: #FFFFFF;
margin-left:10px;
`;

 const PhoneImage= styled.img`
 margin-left:30px;
`;
 const Appstore= styled.div``;

 const BottomContainer1= styled.div`
 

 border-top: 1px solid #BEBCBD;
border-bottom: 1px solid #BEBCBD;
display:flex;
justify-content:space-between;
width:1220px;
margin-left:110px;

@media (max-width: 1400px) {
 margin-left:90px;
}

@media (max-width: 1366px) {
 margin-left:70px;
}

@media (max-width: 1280px) {
  margin-left:30px;
  
   }

@media (max-width: 1100px) {
 
    margin-left:0px; 
       }
  `;
 const Paragraph= styled.p`
 font-family: "Urbanist", serif;
font-size: 28.58px;
font-weight: 700;
line-height: 57.16px;
text-align: left;
color: #F6F6F6;
margin-left:35px;

@media (max-width: 480px) {
 font-size: 20px;
   
       }

`;
 const DownArrow = styled.img`
 margin-right:30px;


@media (max-width: 1024px) {
  margin-right:220px;
 
   }
  @media (max-width: 980px) {
  margin-right:250px;
   }

@media (max-width: 768px) {
  margin-right:480px;
    
}


 `;
 const BottomContainer2= styled.div`
 


`;
 const Paragraph1= styled.p`
 font-family:"Urbanist", serif;
font-size: 18px;
font-weight: 700;
line-height: 36px;
text-align: center;
color: #FFFFFF;

@media (max-width: 480px) {
font-size: 15px;
}

@media (max-width: 390px) {
  font-size: 13px;
  }

`;
 

export default Footer;