'use client'

import { useEffect, useState } from 'react'

export default function CounterNumber() {
  const [state, setState] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => { setState(value => value + 1) }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
   
return ( <div>Count Value {state}</div> )
}