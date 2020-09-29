import { useState } from 'react';

<<<<<<< HEAD
export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
=======
export const useLocalStorage = (key, initialValue) => {
    //set the state of local storage to storedValue
    const [storedValue, setStoredValue] = useState(() => {
        //Get From local storage by key
        const item = window.localStorage.getItem(key);

        //parse and return stored json or, if undefined, return the initial value
>>>>>>> 23a275aa1bf36561c2f426050a91b1df5012fe48
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
<<<<<<< HEAD
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

=======
        //saves the state
        setStoredValue(value);
        //saves to local storage with key and the value. saves as a string
        window.localStorage.setItem(key, JSON.stringify(value));
    }
>>>>>>> 23a275aa1bf36561c2f426050a91b1df5012fe48
    return [storedValue, setValue];
}