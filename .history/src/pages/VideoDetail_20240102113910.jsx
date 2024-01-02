import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/channelInfo';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section>
      <iframe
        id='player'
        type='text/html'
        width='100%'
        height='640'
        src={`http://www.youtube.com/embed/${video.id}`}
        frameborder='0'
      />
      <div>
        <h2>{title}</h2>
        <ChannelInfo id={channelId} name={channelTitle} />
        <pre>{description}</pre>
      </div>
    </section>
  );
}
