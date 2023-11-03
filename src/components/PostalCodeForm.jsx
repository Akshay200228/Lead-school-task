import { useState } from 'react';
import styles from '../style';

const PostalCodeForm = ({ onSubmit }) => {
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postalCode);
  };

  return (
    <form onSubmit={handleSubmit} className={`p-4 ${styles.boxWidth} bg-slate-500 rounded-md shadow-md flex items-center`}>
      <input
        type="text"
        placeholder="Enter Postal Code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
      />
      <button
        type="submit"
        className="p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        disabled={!postalCode}
      >
        Submit
      </button>
    </form>
  );
};

export default PostalCodeForm;
