import PropTypes from "prop-types";
import datas from "./../../datas/events.json"; /* Importations des données dans le fichier event.json. */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext(); /* Suppression de l'objet api pour simplifier le code et le chargement des données. */

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(datas); /* Suppression de l'état d'erreur du contexte d */
  
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
/* Fin du correctif. */
DataProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useData = () => useContext(DataContext);

export default DataContext;
