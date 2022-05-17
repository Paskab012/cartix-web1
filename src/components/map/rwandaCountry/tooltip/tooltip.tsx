
import React, { useState, useRef } from 'react'
import classNames from 'classnames';
import TooltipContent from './tooltipContent'

const Tooltip = ({children: tooltipTarget, tooltipContent}) => {
  const targetRef = useRef(null)
  const [show, setShow] = useState(false)

  const [toolTipProperties, setToolTipProperties] = useState({
    tooltipTop: 0,
    tooltipLeft: 0,
  })

  const handleShowToolTip = () => {
    const toolTipHalfWidth =
      targetRef.current.getBoundingClientRect().width / 2
    const toolTipHeight =
      targetRef.current.getBoundingClientRect().height

    setToolTipProperties({
      tooltipTop: toolTipHeight,
      tooltipLeft: toolTipHalfWidth,
    })

    setShow(true)
  }

  return (
    <div
      ref={targetRef}
      onMouseEnter={handleShowToolTip}
      onMouseLeave={() => setShow(false)}
      className={classNames(
        show && 'pb-6', // Make sure tooltip doesn't close when moving cursor to content
        "inline relative"
      )}
    >
      {/* Putting content inside this div allows it to stay open when hovering over content */}
      <TooltipContent
        show={show}
        top={toolTipProperties.tooltipTop}
        left={toolTipProperties.tooltipLeft}
      >
        {tooltipContent}
      </TooltipContent>
      <span className="cursor-pointer">{tooltipTarget}</span>
    </div>
  )
}

export default Tooltip;