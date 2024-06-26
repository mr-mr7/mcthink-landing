import React, { useEffect, useState } from "react"

const TextOverflow = (props) => {
  const { children, number = 50 } = props

  const [resultText, setResultText] = useState("")

  useEffect(() => {
    if (typeof children === "string") {
      //slice text
      const text = children.toString() ?? ""
      const sliceWords = text ? text?.slice(0, number) : ""
      //set result text in state
      setResultText(`${sliceWords} ${text.length > number ? "..." : ""}`)
    } else {
      setResultText(children)
    }
  }, [children])
  return resultText
}

export default TextOverflow
