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
                {loading ? (
                    <div className="flex items-center justify-center">
                        <div className="w-16 h-16 border-t-4 border-b-4 border-gray-300 rounded-full animate-spin"></div>
                    </div>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : location ? (
                    <LocationInfo location={location} clearLocation={clearLocation} />
                ) : null}
            </div>
        </div>
    );
}

export default FetchData;
