import { createContext } from "react";

// cp means context provider
export const cp = createContext();

const Context = ({ children }) => {
  return <cp.Provider value={"Hi i am context"}>{children}</cp.Provider>;
};

export default Context;
