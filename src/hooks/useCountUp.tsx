import { useState, useEffect } from 'react'

const useCountUp = (start = 0, end: number, duration: number): number => {
  const [count, setCount] = useState<number>(start)
  const frameDuration = 1000 / 60

  useEffect(() => {
    let frame = start
    const totalFrames = Math.round(duration / frameDuration)
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      setCount(end * progress)

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)
  }, [start, end, duration, frameDuration])

  return Math.floor(count)
}

export default useCountUp
