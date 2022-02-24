import React from "react";
import styled from "styled-components";
import RegisterImg from "/home/lautaro/story/src/assets/images/Register.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${RegisterImg});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #c0b9b9;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title> INGRESAR </Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Contraseña" />
          <Button>LOGIN</Button>
          <Link>Olvide mi contraseña</Link>
          <Link>Crear una cuenta</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;