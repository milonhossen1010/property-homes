import { useEffect, useState } from "react";
import Properties from "./Properties";

export default function PropertySearch() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const search = async () => {
      const response = await fetch(`/api/search`);
      const data = await response.json()
      setProperties(data.properties);
    }

    search();
  }, [])
  return <Properties properties={properties} />;
}
