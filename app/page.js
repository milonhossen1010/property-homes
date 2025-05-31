'use client';
import { useEffect, useState } from 'react';
import client from '@/client';
import { gql } from '@apollo/client';
import BlockRenderer from '@/components/BlockRenderer/BlockRenderer';

export default function Home() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    //FetchData
    const fetchData = async () => {
      const result = await client.query({
        query: gql`
          query NewQuery {
            nodeByUri(uri: "/") {
              ... on Page {
                id
                blocks(postTemplate: false)
              }
            }
          }
        `,
      });
      
      setBlocks(result.data.nodeByUri.blocks);
    };

    //FetchData call
    fetchData();
  }, []);

 

  return (
    <div>
      <h1>Home Page</h1>
      <BlockRenderer blocks={blocks} />
    </div>
  );
}
