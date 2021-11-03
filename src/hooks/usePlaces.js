import { useEffect, useState } from "react";


const usePlaces = () => {
    const [places, setPlaces] = useState(null);
    useEffect(() => {
        fetch('/placesData.json').then(r => r.json()).then(d => setPlaces(d));
    }, []);
    console.log(places);

    function getPlaceByID(id) {
        return places[id];
    }
    return {
        places, setPlaces, getPlaceByID
    };
};

export default usePlaces;