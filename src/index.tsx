import React, {useEffect, useState} from 'react';

type TCallBack = (isVisible: boolean) => void;
const callbacks: TCallBack[] = [];

const useDocumentVisibility = () => {
    const [visible, setVisible] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);


    const onVisibilityChange = (cb: TCallBack) => {
        callbacks.push(cb);
    }

    const handleVisibilityChange = () => {
        if (!document.hidden) {
            setVisible(true)
            setCount(preCount => preCount + 1)
        } else {
            setVisible(false)
        }

        for (const cb of callbacks) {
            cb(visible);
        }
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


module.exports = useDocumentVisibility;
