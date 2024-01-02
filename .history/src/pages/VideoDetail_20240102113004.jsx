import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  return (
    <section>
      <iframe
        id='player'
        type='text/html'
        width='640'
        height='360'
        src='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
        frameborder='0'
      ></iframe>
    </section>
  );
}
