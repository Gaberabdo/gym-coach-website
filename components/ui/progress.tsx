import * as React from "react"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
      {...props}
    />
  ),
)
Progress.displayName = "Progress"

export { Progress }
