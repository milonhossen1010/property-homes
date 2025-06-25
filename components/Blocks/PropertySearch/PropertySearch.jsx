'use client'; 

import { useEffect, useState } from 'react';
import Properties from './Properties';
import Pagination from './Pagination';
import queryString from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';
import Filters from './Filters';


export default function PropertySearch() {
  const [properties, setProperties] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 4;
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');

  const search = async () => {
    const { page, minPrice, maxPrice, hasParking, petFriendly } =
      queryString.parse(window.location.search);
    
    const filters = {};
    if (minPrice) {
      filters.minPrice = parseInt(minPrice, 10);
    }
    if (maxPrice) {
      filters.maxPrice = parseInt(maxPrice, 10);
    }
    if (hasParking === 'true') {
      filters.hasParking = true;
    }
    if (petFriendly === 'true') {
      filters.petFriendly = true;
    }

    const response = await fetch(`/api/search`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page, pageSize, ...filters }),
    });

    const data = await response.json();
    setProperties(data.properties);
    setTotalResults(data.total);
  };

  const handlePageClick = pageNumber => {
    const newQuery = queryString.stringify({ page: pageNumber });
    router.push(`?${newQuery}`, { scroll: false }); 
  };

  const handleSearch = async ({
    petFriendly,
    hasParking,
    minPrice,
    maxPrice,
  }) => {
    const query = {
      page:1,
      petFriendly: !!petFriendly,
      hasParking: !!hasParking,
      minPrice,
      maxPrice,
    };
    
    const queryStr = queryString.stringify(query);
    router.push(`?${queryStr}`, { scroll: false });
    search();
 
  };
  useEffect(() => {
    search();
  }, [searchParams]);

  return (
    <div>
      <Filters onSearch={handleSearch} />
      <Properties properties={properties} />
      <Pagination
        onPageClick={handlePageClick}
        totalPages={Math.ceil(totalResults / pageSize)}
        currentPage={page}
      />
    </div>
  );
}
