import React from 'react'
interface ContainerProps {
  className: string
  children: React.ReactNode
}

export default function Container(props: ContainerProps) {
  return (
    <div
      className={`container p-8 mx-auto ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  )
}
