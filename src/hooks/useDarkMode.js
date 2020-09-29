<<<<<<< HEAD
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('dark');

    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkMode])

    return [darkMode, setDarkMode];
}
=======
// Import `useLocalStorage`
import { useLocalStorage } from "./useLocalStorage";

//Import and set up your effect hook.
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
    //Call `useLocalStorage` and pass in the key you want to use to store whether
    //or not dark mode is enabled. Remember, this hook returns an array with a value
    //and a setter in an array, exactly like the state hook, so make sure to capture
    //those values in a `const` - `const [someValue, setSomeValue] = useLocalStorage('your key here')`
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        //selecting the HTML elment 'body'
        const body = document.querySelector("body");

        return darkMode ?
            setDarkMode(body.classList.toggle("dark-mode", true)) :
            setDarkMode(body.classList.toggle("dark-mode", false));

        //only runs when this component is called
    }, [darkMode]);
    return [darkMode, setDarkMode];
};
>>>>>>> 23a275aa1bf36561c2f426050a91b1df5012fe48
