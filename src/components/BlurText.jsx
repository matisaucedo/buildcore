import { useRef } from "react"
import { useInView } from "framer-motion"

export default function BlurText({ text, className, delay = 0.05 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const words = text.split(" ")

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            opacity: isInView ? 1 : 0,
            filter: isInView ? "blur(0px)" : "blur(40px)",
            transition: `opacity 0.3s ease ${i * delay}s, filter 0.3s ease ${i * delay}s`,
            display: "inline-block",
            marginRight: "0.3em",
          }}
        >
          {word}
        </span>
      ))}
    </p>
  )
}
