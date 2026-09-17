import React from 'react'

function Button({
    children,
    type='button',
    className= '',
    type='bg-blue-600',
    textColor = 'text-white',
    ...props
}){
    return (
        <button className={`px-4 py-2 rounded-lg ${type} ${textColor} ${className}`} type={type} {...props}>
        {children}
        </button>
    )
}

export default Button