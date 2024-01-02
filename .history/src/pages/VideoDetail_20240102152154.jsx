import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/channelInfo';
import RealatedVideos from '../components/RealatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className='flex flex-col lg:flex-row'>
      <article>
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
      </article>
      <section>
        <RealatedVideos id={video.id} />
      </section>
    </section>
  );
}
