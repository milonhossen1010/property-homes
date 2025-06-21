import { useEffect, useState } from 'react';
import Properties from './Properties';

export default function PropertySearch() {
  const [properties, setProperties] = useState([]);

  const search = async () => {
    const response = await fetch(`/api/search`);
    const data = await response.json();
    setProperties(data.properties);
  };
  
  useEffect(() => {
    search();
  }, [0]);

  return (
    <div>
      <Properties properties={properties} />   
    </div>
  );
}
