import { createContext, useState } from "react";
import { AsyncStorage } from "react-native";
// cp means context provider
export const cp = createContext();

const Context = ({ children }) => {
  const [expensePop, setExpensePop] = useState(false);
  const [incomePop, setIncomePop] = useState(false);
  const [gender, setGender] = useState(null);
  const [user, setUser] = useState(null);
  const [data, setData] = useState([
    {
      name: "Maley",
      age: "21 months old",
      gender: "cow",
    },
    {
      name: "Tarey",
      age: "23 months old",
      gender: "cow",
    },
    {
      name: "Gure",
      age: "21 months old",
      gender: "ox",
    },
    {
      name: "Baccho",
      age: "1 months old",
      gender: "calves",
    },
    {
      name: "tilke",
      age: "27 months old",
      gender: "ox",
    },
  ]);

  const [expense, setExpense] = useState([
    {
      name: "Maize",
      date: "09/11/2079",
      price: 12422,
    },
  ]);

  const [income, setEncome] = useState(
    {
      name: "Daily Milk",
      date: "2022-03-25",
      amount: 2500,
    },
    {
      name: "Basanti Sold",
      date: "2022-08-14",
      amount: 45000,
    },
    {
      name: "Doung sold",
      date: "2022-05-14",
      amount: 1550,
    }
  );
  return (
    <cp.Provider
      value={{
        user,
        setUser,
        popup: {
          expense: [expensePop, setExpensePop],
          income: [incomePop, setIncomePop],
        },
        selectedCattle: [gender, setGender],
        cattleInfo: [data, setData],
        expense: [expense, setExpense],
      }}
    >
      {children}
    </cp.Provider>
  );
};

export default Context;
