import ReactPaginate from "react-paginate";
import PropertyItem from "./PropertyItem";
import { useState } from "react";

export default function Properties({ properties }) {
   //Pagination State
    const [itemOffset, setItemOffset] = useState(0);
    const [itemStart, setItemStart] = useState(1);
  
  //Pagination
  const itemsPerPage = 4;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = properties.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(properties.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % properties.length;
    const newStart = newOffset + 1;

    setItemOffset(newOffset);
    setItemStart(newStart);
  };
  return (
    <>
      <div className="container mx-auto grid pt-10 lg:grid-cols-4 md:grid-cols-3 gap-8 mb-10">
        {properties &&
          currentItems.map((item, index) => (
            <PropertyItem
              key={item?.databaseId}
              title={item?.title}
              link={item?.uri}
              bedrooms={item?.propertyFeatures?.bedrooms}
              bathrooms={item?.propertyFeatures?.bathrooms}
              hasParking={item?.propertyFeatures?.hasParking}
              petFriendly={item?.propertyFeatures?.petFriendly}
              price={item?.propertyFeatures?.price}
              image={item?.featuredImage?.node?.sourceUrl}
            />
          ))}
      </div>
      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=""
        pageLinkClassName="bg-black text-white px-4 py-2 rounded-sm hover:bg-hoverBG font-bold uppercase inline-block cursor-pointer"
        pageClassName="mr-6"
        containerClassName="flex justify-center text-base font-semibold"
        activeLinkClassName="bg-primary test"
      />
    </>
  );
}