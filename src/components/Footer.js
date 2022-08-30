import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Addvalue } from "../context/AppActions";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { dispatch, income, expense, list } = useContext(AppContext);
  const [formfield, setFormField] = useState({
    text: "",
    amount: 0,
  });

  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [income, expense, dispatch, list]);

  const setChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formfield, [name]: value });
  };

  const addValue = (e) => {
    e.preventDefault();
    Addvalue(dispatch, formfield);
  };
  return (
    <Container>
      <Wrapper>
        <MainContainer>
          <Title>Add new expense.</Title>
          <Form>
            <FormParams>
              <label>Text</label>
              <Input
                name="text"
                onChange={setChange}
                placeholder="enter text"
              />
            </FormParams>
            <FormParams>
              <label>{`Amount (for income amount is start with positive and for expense amount starts with negative)`}</label>
              <Input
                name="amount"
                onChange={setChange}
                placeholder="enter amount"
              />
            </FormParams>
          </Form>
          <Button onClick={addValue}>Add</Button>
        </MainContainer>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 40vh;
  width: 100vw;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MainContainer = styled.div`
  height: 100%;
  width: 400px;
  background-color: white;
`;

const Title = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  font-size: 20px;
  margin-bottom: 10px;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const FormParams = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  padding: 10px;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  background-color: teal;
  color: white;
  border: none;
  height: 35px;
  font-size: 20px;
  font-weight: bolder;
`;
