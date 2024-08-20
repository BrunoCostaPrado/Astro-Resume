import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CounterReact() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex justify-evenly p-4">
      <p className="text-2xl">Count: {count}</p>

      <Button onClick={() => setCount(count + 1)} size={"icon"}>
        <PlusIcon className="h-4 w-4" />
      </Button>

      <Button onClick={() => setCount(count - 1)}>
        <MinusIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
