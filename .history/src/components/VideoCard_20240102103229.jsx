import React from 'react';

export default function VideoCard({ video }) {
  const { title, thumbnails } = video.snippet;
  return <li>
    <img src={src={thumbnails.medium.url} alt={tilte}}></img></li>;
}
