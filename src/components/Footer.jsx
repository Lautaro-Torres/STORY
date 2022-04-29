import { Instagram, MailOutline, Phone, Room } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>STORY</Logo>
        <Description> Be part of someone else perception </Description>
        <SocialContainer>
          <a href="https://www.instagram.com/lautaro.t/">
            <SocialIcon>
              <Instagram />
            </SocialIcon>
          </a>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Phone /> +54 9 387 612 1599.
        </ContactItem>
        <ContactItem>
          <MailOutline />
          lautarogna6@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
