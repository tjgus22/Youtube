import React from 'react';
import { useYoutubeApi } from './../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function RealatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['related', id], () => youtube.RealatedVideos(id));
  return <div>{id}</div>;
}
