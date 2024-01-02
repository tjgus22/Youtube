import {createContext} from 'react';

export const YoutubeApiContext = createContext();

const youtube = new youtube();

export function YoutubeApiProvider({children}) {
        return <YoutubeApiContext.Provider value={={{youtube}}}>
            {children}
        </YoutubeApiContext.Provider>
}

