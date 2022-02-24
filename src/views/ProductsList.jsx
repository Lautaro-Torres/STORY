import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductsList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Frames</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Serie
            </Option>
            <Option>Prints</Option>
            <Option>Frames</Option>
            <Option>Postcards</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>Prints</Option>
            <Option>Frames</Option>
            <Option>Postcards</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <option selected>newest</option>
            <option>Price</option>
            <option>Trending</option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductsList;
