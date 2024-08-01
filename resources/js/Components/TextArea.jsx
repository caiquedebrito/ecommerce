import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextArea({className = '', isFocused = false, ...props }, ref) {
    const textarea = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            className={
                ' border-gray-300 focus:border-indigo-500 w-full focus:ring-indigo-500 rounded-md shadow-sm focus:invalid:border-red-600 invalid:border-red-600 invalid:text-red-600' +
                className
            }
            ref={textarea}
        />
    );
});
