import React, {useEffect} from 'react';
import useDocumentVisibility from '../../hooks/useDocumentVisibility';

const LeaveTabCounter = () => {
    const {count, visible, onVisibilityChange} = useDocumentVisibility();
    console.log(onVisibilityChange, count, visible);

    useEffect(() => {
        console.log('useEffect');
        onVisibilityChange((isVisible: boolean) => {
            console.log('first handler', isVisible)
        });
        onVisibilityChange((isVisible: boolean) => {
            console.log('second handler', isVisible)
        });
    }, [])

    return (
        <div>
          <span>
            Вы покинули страницу: {count} раз<br/>
            Вкладка активна? {visible ? 'да' : 'нет'}
          </span>
        </div>
    );
};

export default LeaveTabCounter;
