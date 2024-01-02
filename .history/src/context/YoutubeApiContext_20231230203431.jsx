import {createContext} from 'react';

export const YoutubeApiContext = createContext();

const youtube = new Youtube();

export function YoutubeApiProvider({children}) {
        return <YoutubeApiContext.Provider value={={{youtube}}}>
            {children}
        </YoutubeApiContext.Provider>
}

