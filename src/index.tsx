import React, {useCallback, useEffect, useRef, useState} from 'react';

type TCallBack = (isVisible: boolean) => void;

const useDocumentVisibility = () => {
    const [visible, setVisible] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);
    const callbacks: React.MutableRefObject<TCallBack[]> = useRef([]);


    const onVisibilityChange = useCallback((cb: TCallBack) => {
        callbacks.current.push(cb);
    }, []);

    const handleVisibilityChange = () => {
        if (!document.hidden) {
            console.log('setVisible(true)');
            setVisible(true)
            setCount(preCount => preCount + 1)
        } else {
            console.log('setVisible(false)');
            setVisible(false)
        }
        callbacks.current.forEach((callback) => callback(!document.hidden))
    }

    useEffect(() => {
        document.addEventListener(
            "visibilitychange",
            handleVisibilityChange);
        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange);
        }
    }, [])

    return {onVisibilityChange, visible, count}
}


export default useDocumentVisibility;
