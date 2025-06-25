import client from '@/client';
import { gql } from '@apollo/client';

export async function POST(request) {
  const filters = await request.json();
  const pageSize = filters.pageSize;
  let hasParkingFilter = ``;
  let petFriendlyFilter = ``;
  let minPriceFilter = ``;
  let maxPriceFilter = ``;

  if (filters.hasParking) {
    hasParkingFilter = `
    {
      key: "has_parking"
      compare: EQUAL_TO
      value: "1"
    },
    `;
  }

  if (filters.petFriendly) {
    hasParkingFilter = `
    {
      key: "pet_friendly"
      compare: EQUAL_TO
      value: "1"
    },
    `;
  }

  if (filters.minPrice) {
    minPriceFilter = `
    {
      key: "price"
      compare: GREATER_THAN_OR_EQUAL_TO
      value: "${filters.minPrice}"
      type: NUMERIC
    }
    `;
  }
  if (filters.maxPrice) {
    maxPriceFilter = `
    {
      key: "price"
      compare: LESS_THAN_OR_EQUAL_TO
      value: "${filters.maxPrice}"
      type: NUMERIC
    }
    `;
  }

  const { data } = await client.query({
    query: gql`
      query allProperties {
        properties(where: { 
            offsetPagination: { size: ${pageSize}, offset: ${
      ((filters.page || 1) - 1) * pageSize
    } }
            
             metaQuery: {
            relation: AND
            metaArray: [
              ${petFriendlyFilter}
              ${hasParkingFilter}
              ${minPriceFilter}
              ${maxPriceFilter}
            ]
          }
            }) {
          pageInfo {
            offsetPagination {
              total
            }
          }
          nodes {
            title
            databaseId
            uri
            propertyFeatures {
              bathrooms
              bedrooms
              hasParking
              petFriendly
              price
            }
            featuredImage {
              node {
                altText
                sourceUrl
                uri
              }
            }
          }
        }
      }
    `,
  });
  return Response.json({
    properties: data.properties.nodes,
    total: data.properties?.pageInfo.offsetPagination.total,
  });
}
