import { useState } from "react";
import LocationInfo from "./LocationInfo";
import PostalCodeForm from "./PostalCodeForm";

const FetchData = () => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchLocationInfo = async (postalCode) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);

            if (!response.ok) {
                throw new Error('Error fetching location information');
            }

            const data = await response.json();
            setLocation(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const clearLocation = () => {
        setLocation(null);
        setError(null);
    };

    return (
        <div className="flex flex-col items-center justify-center mb-32 md:mb-40">
            <div className="p-8 rounded-md shadow-md bg-slate-500">
                <h1 className="mb-4 text-2xl font-bold text-center text-gray-100">Postal Code Location App</h1>
                <PostalCodeForm onSubmit={fetchLocationInfo} />
                {loading && <p className="text-blue-500">Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                <LocationInfo location={location} clearLocation={clearLocation} />
            </div>
        </div>
    )
}

export default FetchData
