import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    return fetch(`/vieos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.json())
      .then((data) => data.items);
  });
  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : '🔥'} </div>\
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is worng</p>}
    </>
  );
}
