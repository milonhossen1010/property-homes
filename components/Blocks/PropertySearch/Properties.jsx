import PropertyItem from "./PropertyItem";

export default function Properties({ properties }) {
  console.log(properties)
  return (
    <div className="container mx-auto grid pt-10 lg:grid-cols-4 md:grid-cols-3 gap-8 mb-10">
      {properties &&
        properties.map((item, index) => (
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
  );
}