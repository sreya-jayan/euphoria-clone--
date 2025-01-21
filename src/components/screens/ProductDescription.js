import React from 'react'
import { Helmet } from 'react-helmet';
import styled from 'styled-components';


function ProductDescription() {
  return (
    <div>
        <Helmet>
            <title>ProductDescription | euphoria</title>
        </Helmet>
       
        <BottomProduct>
       <TitleproductContainer>
        <DescriptionContainer>
            <Redtangle></Redtangle>
            <Heading>Product Description</Heading>
        </DescriptionContainer>
        
        <Users>
            <Small3>Description</Small3>
            <Small4>User comments</Small4>
            <Spanbg>
            <Span>21</Span>
            </Spanbg>
            <Small4>Question & Answer</Small4>
            <Spanbg>
            <Spans>4</Spans>
            </Spanbg>
            </Users>
        <Paragraph4>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew <br /> neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, <br /> anywhere. Infinite range of matte-finish HD prints.</Paragraph4>
        
    </TitleproductContainer>
    <ProductDetialContainer>

    <Table>
  
    <Tr>
      <Th>Fabric</Th>
      <Th>Pattern</Th>
      <Th>Fit</Th>
    </Tr>
  
 
    <Tr>
      <Td>Bio-washed Cotton</Td>
      <Td>Printed</Td>
      <Td>Regular-fit</Td>
    </Tr>
    <Tr>
      <Th>Neck</Th>
      <Th>Sleeve</Th>
      <Th>Style</Th>
    </Tr>
    <Tr>
      <Td>Round Neck</Td>
      <Td>Half-sleeves</Td>
      <Td>Casual Wear</Td>
    </Tr>
 
</Table>
    </ProductDetialContainer>
  </BottomProduct>
 
  </div>
  );
}
 const BottomProduct= styled.div`
 display:flex;
 flex-wrap:wrap;
   
     width:90%;
     max-width: 1280px;
     margin: 0 auto;
     padding: 70px 0;`;
 const TitleproductContainer= styled.div`
 @media (max-width: 1100px) {
margin-left:100px;

  }
@media (max-width: 768px) {
    margin-left:50px;
     }
    @media (max-width: 480px) {
 margin-left:20px;

  }
 
`;
 const DescriptionContainer= styled.div`
 display:flex;
 margin-left:10px;

 
`;
 const Redtangle= styled.div`
 width: 6px;
height: 30px;
border-radius: 10px ;
background: #8A33FD;`;
 const Heading= styled.h4`
 display:inline;
margin-top:0px;
margin-bottom:0px;
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
 const Users= styled.div`
 display:flex;
 margin-top:10px;
 margin-left:10px;

  @media (max-width: 390px) {
    margin-left:0px;
   }
  `;
  
 const Spanbg = styled.div`
 width: 20px;
height: 20px;
border-radius: 4px ;
background: #8A33FD;
margin-top:15px;
margin-left:15px;

@media (max-width: 480px) {
  margin-left:0px;
  
    }


 `;
 const Span= styled.span`
 font-family:"Urbanist", serif;
font-size: 10px;
font-weight: 500;
line-height: 12px;
text-align: center;
color: #FFFFFF;
margin-left:5px;



 `;
 const Spans= styled.span`
 font-family:"Urbanist", serif;
font-size: 10px;
font-weight: 500;
line-height: 12px;
text-align: center;
color: #FFFFFF;
margin-left:7px;`;
 const Paragraph4= styled.p`
 font-family:  "Urbanist", serif;
font-size: 16px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0.02em;
text-align: left;
color: #807D7E;
margin-left:10px;

@media (max-width: 1366px) {
font-size: 15px;
}
@media (max-width: 1100px) {
font-size: 16px;

  }
@media (max-width: 480px) {
font-size: 14px;
letter-spacing: 0em;

  }
 




`;
 const ProductDetialContainer= styled.div`
   width: 612px;
height: 185px;
border-radius: 12px ;
margin-left:30px;

background: #F6F6F6;


@media (max-width: 1400px) {
  margin-left:20px;
        }
 
 
@media (max-width: 1280px) {
 width: 530px;
}
 @media (max-width: 1100px) {
  width: 612px;
  }

  @media (max-width: 1100px) {
margin-left:100px;

  }
@media (max-width: 768px) {
    margin-left:50px;
     }
     @media (max-width: 480px) {
 margin-left:20px;

  }
 @media (max-width: 390px) {
  
    margin-top:30px;
  
   }







 `;
 const Table= styled.table`
 width: 100%; 
  border-collapse: collapse; 
  background: #f6f6f6;
  border-radius: 12px; 
  overflow: hidden;
  
    
   
  
`;
  


 
 const Td= styled.td`

  padding: 16px;
  font-family: "Urbanist", serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #3c4242;
  border-right: 1px solid #e0e0e0;
   
  border-bottom: none;
   
  &:last-child {
    border-right: none;
  }
@media (max-width: 390px) {
   font-size: 15px;;
   }

 `;
  
 const Th= styled.th`
  
 
 
 padding: 12px;
  font-family: "Urbanist", serif;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #807d7e;
 border-right: 1px solid #e0e0e0;
 
   &:last-child {
    border-right: none;
  }

   @media (max-width: 390px) {
   font-size: 15px;;
   }
  
`;
 const Tr= styled.tr`
  &:not(:last-child) td {
    border-bottom: 1px solid #e0e0e0; 
  }

  `;
 
const Small3= styled.small`
font-family: "Urbanist", serif;
font-size: 16px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0.02em;
text-align: left;
color: #3C4242;

margin-top:20px;

@media (max-width: 480px) {
 font-size: 15px;
 margin-left:20px;
 }


`;

const Small4= styled.small`
font-family: "Urbanist", serif;
font-size: 16px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0.02em;
text-align: left;
color: #807D7E;

margin-top:20px;


@media (max-width: 480px) {
 font-size: 15px;
 margin-left:20px;
 }
 @media (max-width: 390px) {
   font-size: 12px;;
   }
`;




export default ProductDescription;