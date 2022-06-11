# useDocumentVisibility

This hook checks if the browser tab the user is in is active 
and how many times the page has been visited by the user

---

## Example

```jxs
import React from 'react'
import useDocumentVisibility from 'hook-use-document-visibility'

const LeaveTabCounter = () => {
  const { count, visible, onVisibilityChange } = useDocumentVisibility();

  useEffect(() => {
    onVisibilityChange((isVisible) => {
      //...
    });
    onVisibilityChange((isVisible) => {
      //...
    });
  }, [])

  return (
    <div>
      <span>
        You have left the page: {count} times
        Is the tab active? {visible ? 'yes' : 'no'}
      </span>
    </div>
  );
};
```
