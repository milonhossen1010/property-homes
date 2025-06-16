'use client';

import { useEffect, useState, useMemo } from 'react';
import { gql } from '@apollo/client';
import client from '@/client';
import BlockRenderer from '@/components/BlockRenderer/BlockRenderer';
import { useParams } from 'next/navigation';
import ConnectionError from '@/components/ConnectionError/ConnectionError';
import FullScreenLoader from '@/components/FullScreenLoader/FullScreenLoader';

const QUERY = gql`
  query NewQuery($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        blocks(postTemplate: false)
      }
      ... on Property {
        id
        blocks(postTemplate: false)
      }
    }
  }
`;

export default function Page() {
  const params = useParams();
  const fullSlug = useMemo(() => {
    if (!params?.slug) return '/';
    return `/${
      Array.isArray(params.slug) ? params.slug.join('/') : params.slug
    }`;
  }, [params]);

  const [blocks, setBlocks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: QUERY,
          variables: { uri: fullSlug },
        });
        setBlocks(data?.nodeByUri?.blocks);
      } catch (err) {
        console.error('GraphQL error:', err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fullSlug]);

  if (isLoading) return <FullScreenLoader />;
  if (isError) return <ConnectionError />;
  if (!blocks?.length) return <p>No content available.</p>;

  return <BlockRenderer blocks={blocks} />;
}
