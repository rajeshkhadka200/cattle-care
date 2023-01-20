import { createContext, useState } from "react";

// cp means context provider
export const cp = createContext();

const Context = ({ children }) => {
  const [expensePop, setExpensePop] = useState(false);
  const [incomePop, setIncomePop] = useState(false);
  return (
    <cp.Provider
      value={{
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
