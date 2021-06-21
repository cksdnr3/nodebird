import { useState, useCallback } from 'react';

export default (initialInput = null) => {
    const [input, setInput] = useState(initialInput);
    const handler = useCallback((e) => {
        setInput(e.target.value);
    }, []);

    return [input, handler];
};
