import cn from "classnames"

import React from "react"

import { IContainerProps } from "./Container.props"

export const Container: React.FC<IContainerProps> = ({ children, className }) => {
  return <div className={cn("container w-full px-6 mx-auto", className)}>{children}</div>
}
