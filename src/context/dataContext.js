import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const setDataContext = createContext();

export const useDataContext = () => {
  const context = useContext(DataContext);
  return context;
};

export const useSetDataContext = () => {
  const context = useContext(setDataContext);
  return context;
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <DataContext.Provider value={data}>
      <setDataContext.Provider value={setData}>
        {children}
      </setDataContext.Provider>
    </DataContext.Provider>
  );
};

export default DataProvider;
