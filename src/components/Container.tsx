import React from 'react'
interface ContainerProps {
  className: string
  children: any
}

export default function Container(props: ContainerProps) {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  )
}
