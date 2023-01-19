import { createContext, useState } from "react";

// cp means context provider
export const cp = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState(null);

  return <cp.Provider value={{ user, setUser }}>{children}</cp.Provider>;
};

export default Context;
