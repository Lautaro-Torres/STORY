import React from "react";
import styled from "styled-components";
import { Search, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  background-color: transparent;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const linkStyle = {
  textDecoration: "none",
};

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input />
            <Search style={{ fontsize: 10 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={linkStyle}>
            <Logo>STORY</Logo>
          </Link>
        </Center>

        <Right>
          <Link to="/register" style={linkStyle}>
            <MenuItem>Register</MenuItem>
          </Link>

          <Link to="/login" style={linkStyle}>
            <MenuItem>Sign In</MenuItem>
          </Link>

          <Link to="/cart" style={linkStyle}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCart />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
