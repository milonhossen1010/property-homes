'use client';
import { useEffect, useState } from 'react';
import client from '@/client';
import { gql } from '@apollo/client';
import BlockRenderer from '@/components/BlockRenderer/BlockRenderer';
import ConnectionError from '@/components/ConnectionError/ConnectionError';
import FullScreenLoader from '@/components/FullScreenLoader/FullScreenLoader';

export default function Home() {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsErorr] = useState(false);

  useEffect(() => {
    //FetchData
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await client.query({
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

        setBlocks(data.nodeByUri.blocks);
      } catch (error) {
        setIsErorr(true);
      } finally {
        setIsLoading(false);
      }
    };

    //FetchData call
    fetchData();
  }, []);
  if (isLoading) return <FullScreenLoader />;
  if (isError) return <ConnectionError />;
  if (!isError && !isLoading) return <BlockRenderer blocks={blocks} />;
}
