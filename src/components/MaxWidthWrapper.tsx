import React from "react"

import { cn } from "@/lib/utils"

type MaxWidthWrapperProps = {
  className?: string
  children?: React.ReactNode
  [key: string]: any
}

function MaxWidthWrapper({ className, children, ...props }: MaxWidthWrapperProps) {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)} {...props}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
