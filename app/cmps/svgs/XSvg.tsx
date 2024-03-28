import React from 'react'

type XSvgProps = {
  isDragOverXSvg:boolean
  setButtonType:(a:string)=>void
}

export  function XSvg({setButtonType,isDragOverXSvg}: XSvgProps) {
  return (
<svg onMouseOver={ () => setButtonType('x-svg')} className={isDragOverXSvg?'scale-up-x-svg':'x-svg'} 
 xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80"><path d="m250.667-177.001-73.333-73.666 229-229.333-229-228.667 73.333-74.666L480-554.666l229.333-228.667 73.333 74.666L554.333-480l228.333 229.333-73.333 73.666L480-405.667 250.667-177.001Z"/></svg>
  )
}