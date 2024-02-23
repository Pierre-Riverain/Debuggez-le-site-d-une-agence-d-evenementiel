import PropTypes from "prop-types";
import {
  createContext,
  useContext,
  useState,
} from "react";
import datas from "./../../datas/events.json"; /* Importations des données dans le fichier events.json. */


const DataContext = createContext(); /* Suppression de l'objet api pour simplifier le code et le chargement des données. */

export const DataProvider = ({ children }) => {

  const datasLoaded = datas;

  let datasSorted = {};

  /* Ajout du tri des événements. */
  datasSorted.events = datasLoaded.events.sort((evtA, evtB) => {
    return new Date(evtA.date) - new Date(evtB.date);
  });
  datasSorted.focus = datasLoaded.focus.sort((evtA, evtB) => {
    return new Date(evtA.date) - new Date(evtB.date);
  });

  const [data, setData] = useState(datasSorted); 

  return (/* Remplacement de l'état d'erreur par l'état de génération de clés unique.*/
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

