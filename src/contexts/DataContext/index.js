import PropTypes from "prop-types";
import datas from "./../../datas/events.json";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(datas);
  
  return (
    <DataContext.Provider
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    value={{
      data
    }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useData = () => useContext(DataContext);

export default DataContext;
