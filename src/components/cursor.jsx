import { useEffect, useRef } from "react"
import { animate, frame, motionValue } from "https://cdn.jsdelivr.net/npm/motion@12.6.0/+esm"
import './cursor.css'

export default function Cursor() {
  const ballRef = useRef(null)
  const dotRef = useRef(null)
  const pointerX = motionValue(0)
  const pointerY = motionValue(0)

  useEffect(() => {
    const ball = ballRef.current
    const dot = dotRef.current

    const { top, left, width, height } = ball.getBoundingClientRect()
    const initialX = left + width / 2
    const initialY = top + height / 2

    const dotRect = dot.getBoundingClientRect()
    const dotInitialX = dotRect.left + dotRect.width / 2
    const dotInitialY = dotRect.top + dotRect.height / 2  

    const onPointerMove = (e) => {
      const x = e.clientX
      const y = e.clientY

      pointerX.set(x)
      pointerY.set(y)

    }

    function springToPointer() {
      animate(
        ball,
        {
          x: pointerX.get() - initialX,
          y: pointerY.get() - initialY,
        },
        { type: "spring", stiffness: 100, damping: 20 }
      )
      animate(
        dot,
        {
          x: pointerX.get() - dotInitialX,
          y: pointerY.get() - dotInitialY,
        },
        { type: "spring", stiffness: 100, damping: 15 }
      )
    }

    function scheduleSpringToPointer() {
      frame.postRender(springToPointer)
    }

    pointerX.on("change", scheduleSpringToPointer)
    pointerY.on("change", scheduleSpringToPointer)

    document.addEventListener("pointermove", onPointerMove)

    return () => {
      document.removeEventListener("pointermove", onPointerMove)
    }
  }, [])

  return (
    <>
      <div className="dot" ref={dotRef}></div>
      <div className="ball" ref={ballRef}></div>
    </>
  )
}
