import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { useEffect, useState } from 'react';


import img from "../../assets/images/span-1.svg";
import star from "../../assets/images/star1.svg";


function Feedback() {
    const [feeds, setFeeds]=useState([])

useEffect(()=>{
    const FeedView =[
        {
            "id":1,
            "image":img ,
            "starimage":star ,
            "name":"Floyd Miles",
            "discription":"Amet minim mollit non deserunt ullamco est sit aliqua  dolor do amet sint. Velit officia consequat duis enim velit  mollit.  Exercitation veniam consequat sunt nostrud amet. Amet  minim mollit non deserunt ullamco est sit aliqua dolor do  amet sint. Velit officia consequat duis enim velit mollit.  Exercitation veniam consequat sunt nostrud amet."
        },
        {
            "id":1,
            "image":img ,
            "starimage":star ,
            "name":"Ronald Richards",
            "discription":"ullamco est sit aliqua dolor do amet sint. Velit officia  consequat duis enim velit mollit. Exercitation veniam  consequat sunt nostrud amet."
        },
        {
            "id":1,
            "image":img ,
            "starimage":star ,
            "name":"Savannah Nguyen",
            "discription":"Amet minim mollit non deserunt ullamco est sit aliqua  dolor do amet sint. Velit officia consequat duis enim velit  mollit.  Exercitation veniam consequat sunt nostrud amet. Amet  minim mollit non deserunt ullamco est sit aliqua dolor do  amet sint. Velit officia consequat duis enim velit mollit.  Exercitation veniam consequat sunt nostrud amet."
        }
        
    ];
    setFeeds(FeedView)
},[]);

const renderFeeds =()=>{
    return feeds.map((feed)=>(
        <AllFeeds>
        <Feeds>
            <SpanImage src={feed.image} alt="image"/>
            <StarImage src={feed.starimage} alt="image"/>
        </Feeds>
        <Heading>{feed.name}</Heading>
        <Paragraph>{feed.discription}</Paragraph>
        </AllFeeds>


    ));
};
  return (
    <div>
        <Helmet>
            <title>Feedback | euphoria</title>
        </Helmet>
        <FeedbackContainer>
            <FeedbackTitle>
                <Redtangle></Redtangle>
                <Heading2>Feedback</Heading2>
            </FeedbackTitle>
            <FeedoneContainer>{renderFeeds()}</FeedoneContainer>
            </FeedbackContainer>
    </div>
  );
}
 const FeedbackContainer= styled.div`
 width:90%;
  max-width: 1280px;
 margin: 0 auto;
 padding: 30px 0;
 `;
 const FeedbackTitle= styled.div`
 display:flex;
 margin-left:20px;
 `;
 const Redtangle= styled.div`
 width: 6px;
height: 30px;
border-radius: 10px ;
background: #8A33FD;

@media (max-width: 480px) {
   margin-left:40px;
    }
`;
 const Heading2= styled.h2`display:inline;
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
`;
 const FeedoneContainer= styled.div`
display:flex;
  flex-wrap: wrap;
justify-content:space-around;
gap:20px;
margin-left:15px;

 `;
 const AllFeeds= styled.div`
width: 396.87px;
height: 292px;



border-radius: 10px ;
border: 1.8px solid #BEBCBD;


  
@media (max-width: 1280px) {
  

 
   }


 @media (max-width: 1100px) {
   width: 320px;
     }
`;
const Feeds= styled.div`
  display:flex;
  
 
`;
 const SpanImage= styled.img`
  margin-left:20px;
  margin-top:20px;
 `;
 const StarImage= styled.img`
 margin-left:50px;
 `;
 const Heading= styled.h3`

 font-family: "Urbanist", serif;
font-size: 22px;
font-weight: 500;
line-height: 21.6px;
letter-spacing: 0.02em;
text-align: left;
color: #3C4242;
margin-left:20px;


@media (max-width: 1100px) {
    font-size: 20px;
      
         }

`;
 const Paragraph= styled.p`
font-family: "Varela Round", serif;
font-size: 14px;
font-weight: 400;
line-height: 16.8px;
letter-spacing: 0.02em;
text-align: left;
color: #807D7E;
 margin-left:20px;
 margin-right:10px;
 overflow:hidden;


 @media (max-width: 1100px) {
 font-size: 12px;
   
      }
 
`;
 

export default Feedback;