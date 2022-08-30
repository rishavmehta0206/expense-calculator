import React, { useReducer, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";
const initialValue = {
  list: [],
  income: 0,
  expense: 0,
  total: 0,
};
const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case "ADD": {
      let newFormData = [
        { id: new Date().getTime().toString(), ...payload },
        ...state.list,
      ];
      return {
        ...state,
        list: newFormData,
        income:
          payload.amount > 0
            ? state.income === 0
              ? Math.abs(Number(payload.amount))
              : Math.abs(Number(payload.amount)) + state.income
            : state.income,
        expense:
          payload.amount < 0
            ? state.expense === 0
              ? Math.abs(Number(payload.amount))
              : Math.abs(Number(payload.amount)) + state.expense
            : state.expense,
      };
    }
    case "TOTAL": {
      return { ...state, total: state.income - state.expense };
    }
  }
};

const AppReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialValue);
  return (
    <AppContext.Provider
      value={{
        dispatch,
        list: state.list,
        income: state.income,
        expense: state.expense,
        total: state.total,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppReducer;
