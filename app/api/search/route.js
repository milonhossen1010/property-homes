import client from "@/client";
import { gql } from "@apollo/client";

export async function GET(req, res) {
  const { data } = await client.query({
    query: gql`
      query allProperties {
        properties {
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
  return Response.json({ properties: data.properties.nodes });
}
