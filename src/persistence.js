const useStateWithLocalStorage = key => {
    const [value, steValue] = React.useState(
        localStorage.getItem(key) || ''
    );

    React.useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    }, [value]);
    return [value, setValue]
}

export default useStateWithLocalStorage;
