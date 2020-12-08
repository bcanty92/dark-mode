import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValues) => {
    const [someValue, setSomeValue] = useLocalStorage('darkMode', false);
    return [someValue, setSomeValue];
};

export default useDarkMode;