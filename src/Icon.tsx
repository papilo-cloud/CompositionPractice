import React from 'react'

interface IconProps {
    name: any
    size?: string;
    color?: any;
    className?: string
}

export const Icon = ({name, size, color, className, ...props}: IconProps) => {
  return (
    <div style={{
        fontSize: size + 'px',
        color
    }} {...props} className={className} >
        {name}
    </div>
  )
}
