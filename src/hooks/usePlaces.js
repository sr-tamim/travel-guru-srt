import { useEffect, useState } from "react";


const usePlaces = () => {
    const [places, setPlaces] = useState(null);
    useEffect(() => {
        fetch('./placesData.json').then(r => r.json()).then(d => setPlaces(d));
    }, []);
    return places;
};

export default usePlaces;