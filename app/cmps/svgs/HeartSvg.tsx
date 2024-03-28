import React from 'react'

type HeartSvgProps = {
  isDragOverHeart:boolean
  setButtonType:(a:string)=>void
}

export  function HeartSvg({isDragOverHeart ,setButtonType}: HeartSvgProps) {
  return (

   <svg onMouseOver={ () => setButtonType('heart')} className={isDragOverHeart?'scale-up-heart':'heart-svg'}
    xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80"><path d="m479-80.667-66.333-59.666q-107.179-98.748-177.589-169.874-70.411-71.126-111.744-128.46Q82-496 65.834-543.5 49.667-591 49.667-640.399q0-103.811 69.988-174.206Q189.643-884.999 292-884.999q54.169 0 101.918 22.166 47.749 22.167 85.082 64.167 40.667-43.333 87.201-64.833 46.534-21.5 99.799-21.5 103.776 0 174.054 70.413 70.279 70.413 70.279 174.253 0 48.98-16.5 96.156-16.5 47.177-57.5 104.344-41 57.166-111.322 128.867T545.999-140.333L479-80.667Zm-.333-140.999q98.824-90.33 161.912-153.499Q703.667-438.333 740-485q36.334-46.667 50.334-83.738t14-71.65q0-59.279-39.409-98.946Q725.515-779 666.635-779q-46.835 0-87.901 30.666-41.067 30.667-63.401 80.334H443q-21.341-49.667-63.541-80.334Q337.259-779 292.05-779q-58.656 0-97.02 39.047-38.364 39.048-38.364 99.83 0 35.766 14.44 73.228 14.44 37.462 50.667 84.512Q258-435.333 320-372.333q62 63 158.667 150.667ZM481-501Z"/></svg>
   
  
  )
}