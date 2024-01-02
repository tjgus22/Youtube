import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import fakeYoutubClien from '../api/fakeYoutubClient';
import YoutubeClient from '../api/youtubeClient';

export const YoutubeApiContext = createContext();

const client = new YoutubeClient();
const youtube = new Youtube();

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
