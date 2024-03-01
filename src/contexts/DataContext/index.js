import PropTypes from "prop-types";
import {
  createContext,
  useContext,
  useState,
} from "react";
import datas from "./../../datas/events.json"; /* Importations des données dans le fichier events.json. */

const DataContext = createContext(); /* Suppression de l'objet api pour simplifier le code et le chargement des données. */

export const DataProvider = ({ children }) => {

  
  
  /* Ajout du tri des événements. */
  
  const loadData = () => {
    const datasLoaded = datas;
    let datasSorted = {};
    datasSorted.events = datasLoaded.events.sort((evtA, evtB) => {
      return new Date(evtA.date) - new Date(evtB.date);
    });
    datasSorted.focus = datasLoaded.focus.sort((evtA, evtB) => {
      return new Date(evtA.date) - new Date(evtB.date);
    });
    return datasSorted;
  }
  
  const [data, setData] = useState(loadData());
  
  /* Ajout d'une méthode pour simuler une erreur lors d'un test. */
  const isError = () => false;
  const [error, setError] = useState(isError()); 

  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        error
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

