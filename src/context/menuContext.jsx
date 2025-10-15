import { createContext, useContext, useState, useEffect } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu([]);
  }, []);
  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
export function useMenu() {
  return useContext(MenuContext);
}
