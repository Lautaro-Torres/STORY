import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import imgA from "../assets/images/frames.jpg";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 90%;
  height: 100vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOptions = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #cacaca;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={imgA} />
        </ImageContainer>
        <InfoContainer>
          <Title> Space Age Love Song</Title>
          <Description> 20x40 cm Frame</Description>
          <Price>$600</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Size </FilterTitle>
              <FilterSize>
                <FilterSizeOptions>Large</FilterSizeOptions>
                <FilterSizeOptions>Medium</FilterSizeOptions>
                <FilterSizeOptions>Small</FilterSizeOptions>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
