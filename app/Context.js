import { createContext, useState } from "react";
import { AsyncStorage } from "react-native";
// cp means context provider
export const cp = createContext();

const Context = ({ children }) => {
  const [expensePop, setExpensePop] = useState(false);
  const [incomePop, setIncomePop] = useState(false);

  const [user, setUser] = useState(null);

  return (
    <cp.Provider
      value={{
        user,
        setUser,
        popup: {
          expense: [expensePop, setExpensePop],
          income: [incomePop, setIncomePop],
        },
      }}
    >
      {children}
    </cp.Provider>
  );
};

export default Context;
