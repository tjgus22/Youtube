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
    return fetch(`/vieos/${keyword ? 'search' : 'popular'}.json`);
  });
  return <div>Videos {keyword ? `🔍${keyword}` : '🔥'} </div>;
}
