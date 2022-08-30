import {useContext} from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const {total,expense,income} = useContext(AppContext)
  return (
    <Container>
      <Wrapper>
        <MainContainer>
          <BalanceContainer>
            <Title>Expense Tracker</Title>
            <ExpenseValues>
              <Title>Your Balance</Title>
              <Value>${total}</Value>
            </ExpenseValues>
            <Board>
              <ExpenseBoard>
                <Savings>
                  <Title>Income</Title>
                  <Value type="income">${income}</Value>
                </Savings>
                <Break />
                <Savings>
                  <Title>Expense</Title>
                  <Value type="expense">${expense}</Value>
                </Savings>
              </ExpenseBoard>
            </Board>
          </BalanceContainer>
        </MainContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 40vh;
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

const BalanceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3``;
const ExpenseValues = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 30px;
`;
const Value = styled.div`
  font-weight: bolder;
  color: ${(props) => (props.type === "income" ? "green" : "")};
  color: ${(props) => (props.type === "expense" ? "red" : "")};
`;

const Board = styled.div`
  width: 100%;
  height: 50%;
`;

const ExpenseBoard = styled.div`
  width: 90%;
  margin: auto;
  height: 80%;
  background-color: white;
  box-shadow: 0px 0px 4px 0px black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Savings = styled.div`
  flex: 1;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Break = styled.div`
  width: 1px;
  height: 70%;
  background-color: black;
`;
