import styles from '../style';

const LocationInfo = ({ location, clearLocation }) => {
    if (!location) {
        return null;
    }

    return (
        <div className={`p-4 ${styles.boxWidth} mt-4 bg-slate-300 rounded-md shadow-md`}>
            <h2 className="text-lg font-semibold">Location Information</h2>
            <p>Postal Code: {location['post code']}</p>
            <p>Country: {location.country}</p>
            <p>State: {location.places[0].state}</p>
            <p>Place Names:</p>
            <ul className="pl-4">
                {location.places.map((place, index) => (
                    <li key={index}>
                        {place['place name']} (Longitude: {place.longitude}, Latitude: {place.latitude})
                    </li>
                ))}
            </ul>
            <button
                onClick={clearLocation}
                className="p-2 mt-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
            >
                Clear Location
            </button>
        </div>
    );
};

export default LocationInfo;
