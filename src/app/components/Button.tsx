'use client'
import { HTMLAttributes, PropsWithChildren } from "react"

 

type Props ={
  handleClick: HTMLAttributes<HTMLButtonElement>['onClick']
}

export const Button = ({handleClick,children}: PropsWithChildren<Props>) => {
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}