import { useContext } from 'react';
import { PlacesContext } from '../contexts/PlacesContext';

const usePlacesContext = () => {
    return useContext(PlacesContext);
};

export default usePlacesContext;