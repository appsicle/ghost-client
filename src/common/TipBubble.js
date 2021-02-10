import './TipBubble.scss';
import React, { useState } from 'react';
import { Tooltip } from 'shards-react';

function TipBubble({
  innerText,
  color = 'gray',
  elementId,
  tooltipText,
  tooltipPlacement = 'right',
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <>
      <div
        className="tip-bubble"
        id={elementId}
        style={{ backgroundColor: color }}
      >
        {innerText}
      </div>
      <Tooltip
        placement={tooltipPlacement}
        open={showTooltip}
        toggle={toggleTooltip}
        target={`#${elementId}`}
      >
        {tooltipText}
      </Tooltip>
    </>
  );
}

export default TipBubble;
