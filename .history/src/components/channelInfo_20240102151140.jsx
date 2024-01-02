import React from 'react';
import { useYoutubeApi } from './../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();

  const { data: url } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => youtube.channelImageURL(id),
    // 아래와 같이 config 속성을 사용하여 "Object" 형식으로 전달합니다.
    config: {
      // 적절한 옵션들을 설정합니다.
    },
  });

  return (
    <div>
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
}
