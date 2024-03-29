import React from 'react';
import { format } from 'timeago.js';

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAts } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={tilte}></img>
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{format(publishedAt)}</p>
      </div>
    </li>
  );
}
