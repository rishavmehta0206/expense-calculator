import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

const List = () => {
  const { list } = useContext(AppContext);
  return (
    <Container>
      <Wrapper>
        <MainContainer>
          {list.map((item) => {
            return (
              <ItemContainer amount={item.amount}>
                <ItemText>{item.text}</ItemText>
                <ItemAmount>{item.amount}</ItemAmount>
              </ItemContainer>
            );
          })}
        </MainContainer>
      </Wrapper>
    </Container>
  );
};

export default List;

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
  display: flex;
  flex-direction: column;
`;
const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 20px;
  margin-bottom: 10px;
  padding: 10px;
  border-right: ${props=>props.amount>0?"5px solid green":"5px solid red"}
`;
const ItemText = styled.div``;
const ItemAmount = styled.div``;
