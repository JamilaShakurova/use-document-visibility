import React, {useEffect, useState} from 'react';

type TCallBack = (isVisible: boolean) => void;
type TBoundedCallBack = () => void;

const useDocumentVisibility = () => {
    const [visible, setVisible] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);
    const callbacks: TBoundedCallBack[] = [];

    const onVisibilityChange = (cb: TCallBack) => {
        callbacks.push(cb.bind(null, visible));
    }

    const handleVisibilityChange = () => {
        if (!document.hidden) {
            setVisible(true)
            setCount(preCount => preCount + 1)
        } else {
            setVisible(false)
        }

        for (const cb of callbacks) {
            cb();
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
