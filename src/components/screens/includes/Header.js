import React from 'react'
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
 


function Header() {
  return (
    <HeaderContainer>
        <LeftBox>
            <Logo src={require("../../../assets/images/Logo.svg").default} alt="image"/>
        </LeftBox>
        <MiddleBox>
          <StyledList> 
            <StyledList1Link to="/">Shop</StyledList1Link>
          </StyledList>
          <StyledList> 
            <StyledListLink to="men">Men</StyledListLink>
          </StyledList>
          <StyledList> 
            <StyledListLink to="women">Women</StyledListLink>
          </StyledList>
          <StyledList> 
            <StyledListLink to="combos">Combos</StyledListLink>
          </StyledList>
          <StyledList> 
            <StyledListLink to="joggers">Joggers</StyledListLink>
          </StyledList>
        
         
          <InputBox>
          <SearchImage src={require("../../../assets/images/search.svg").default} alt='image'/>
          <Input type="text" placeholder="Search" />
          </InputBox>
        </MiddleBox>
        <RightBox>
           <IconImage src={require("../../../assets/images/wishlist.svg").default} alt="image"/>
           <IconImage src={require("../../../assets/images/account.svg").default} alt='image'/>
           <IconImage src={require("../../../assets/images/cart.svg").default} alt='image'/>
        </RightBox>
    </HeaderContainer>
    
  )
}
const HeaderContainer= styled.div`
    width:90%;
    max-width: 1280px;
     margin: 0 auto;
     padding: 30px 0;
     display:flex;
     justify-content:space-between;
     align-items:center;


    

    
`;
const LeftBox= styled.div`

`;
const Logo= styled.img`

display:block;`;
const MiddleBox= styled.div`
display:flex;
justify-content:space-between;


@media (max-width: 1280px) {
margin-left:40px;
}


 


 `;
const StyledList= styled.li`
display:inline-block;
margin:12px;


@media (max-width: 480px) {
 display:none;
 }

`;
const StyledList1Link= styled(Link)`

appearance: none;
text-style: none;
color: #3C4242;
font-family: Varela Round;
font-size: 22px;
font-weight: 700;
line-height: 26.4px;
text-align: left;
text-style: none;
text-decoration: none;

@media (max-width: 768px) {
  font-size: 18px;
    }

`;
const StyledListLink= styled(Link)`

appearance: none;
text-style: none;
color: #807D7E;
font-family: Varela Round;
font-size: 22px;
font-weight: 700;
line-height: 26.4px;
text-align: left;
text-style: none;
text-decoration: none;
@media (max-width: 768px) {
  font-size: 18px;
    }
`;
const InputBox= styled.div`
display:flex;
justify-content:space-between;
padding: 12px 40px ;
border-radius: 8px  ;
background: #F6F6F6;
margin-left:150px;

@media (max-width: 1280px) {
margin-left:60px;

}
@media (max-width: 1100px) {
  display:none;
   }


`;

const SearchImage= styled.img`
width: 20px;
height: 20px;
padding: 3px 2.83px 2.83px 3px;


`;
const Input= styled.input`

outline: none;
border: none;
height: 20px;
font-family: Varela Round;
font-size: 16px;
font-weight: 400;
line-height: 19.2px;
text-align: left;
background: #F6F6F6;
color: #807D7E;


`;
const RightBox= styled.div`

@media (max-width: 1280px) {
margin-left:40px;
}

`;
const IconImage= styled.img`

background: #F6F6F6;
margin:5px;
padding: 12px  ;
gap: 12px;
border-radius: 8px ;
opacity: 0px;


@media (max-width: 768px) {
  padding: 8px  ;
  width: 10px;



    }

`;


export default Header;