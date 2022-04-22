import React from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@material-ui/icons"
import Badge from '@material-ui/core/Badge';



const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: 'center';
  justify-content: space-between;
`
const Logo = styled.h3`
  font-weight: bold;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding-left: 6px;
`

const Input = styled.input`
  border: none; 
`

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center
`

const Center = styled.div`
  flex: 1;
  text-align: center
`

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:'gray', fontSize:'16px'}} />
          </SearchContainer>
        </Left>
        <Center><Logo>AMOS</Logo></Center>
        <Right>
          <MenuItem>ENREGISTRER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;