"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import { HeartSvg } from './svgs/HeartSvg'
import { XSvg } from './svgs/XSvg'
import Link from 'next/link'
type PickupLinesDisplayerProps = {
  _id: string
  line: string
}

export default function PickupLinesDisplayer({ pickupLines, imgs, }: any) {

  const [isShown, setIsShown] = useState(true)
  const [index, setIndex] = useState(0)
  const [imgIndex, setImgIndex] = useState(0)
  const [protionOfImags, setPortionOfImages] = useState()
  //for drag and drop 
  const [originalPos, setOriginalPos] = useState<{ top: number, right: number, left: number }>({ top: 0, right: 0, left: 0 })
  const [translateX, setTranslateX] = useState(0)
  const [rotate, setRotate] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isDragOverHeart, setIsDragOverHeart] = useState(false)
  const [isDragOverXSvg, setIsDragOverXSvg] = useState(false)
  const [buttonType, setButtonType] = useState('')

  const cardRef = useRef<HTMLDivElement | undefined | any>(null)
  const cardConatinerRef = useRef<HTMLDivElement | undefined | any>(null)


  useEffect(() => {

    return () => {

    }
  }, [cardRef.current, buttonType])




  const handlePointerDown = (ev: any) => {
    ev.preventDefault();
    let rect = ev.target.getBoundingClientRect();
    setOriginalPos({ top: rect.top, right: rect.right, left: rect.left })
    setTranslateX(0)
    setRotate(0)
    setIsDragging(true)
    // console.log('rect-top:',rect.top,'rect-right:', rect.right,'rect-bottom:', rect.bottom, 'rect-left:',rect.left)

  }

  const handlePointerMove = (ev: any) => {
    if (isDragging) {
      const cords = {
        x: ev.clientX,
        y: ev.clientY
      }
      // console.log(' card is moving cords:',cords);
      if (originalPos.left > ev.clientX) {

        const translateX = -(originalPos.left - ev.clientX)
        setTranslateX(translateX)
        setRotate(-20)
      }
      if (originalPos.right < ev.clientX) {
        const translateX = -(originalPos.right - ev.clientX)
        setTranslateX(translateX)
        setRotate(20)
      }

    }


  }
  const handlePointerUp = (ev: any) => {
    setIsDragging(false)
    handelClick()
    if (buttonType === 'heart') setIsDragOverHeart(true)
    if (buttonType === 'x-svg') setIsDragOverXSvg(true)
    setTimeout(() => {
      setButtonType('')
      setIsDragOverHeart(false)
      setIsDragOverXSvg(false)
      console.log(' setButtonType : ', buttonType);

    }, 1000);

  }




  const handelClick = () => {
    if (index === pickupLines.pickupLine.length - 1) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }

    if (imgIndex === 25) {
      setImgIndex(0)
    } else {
      setImgIndex(imgIndex + 1)
      // console.log('portion of imgs',protionOfImags);

    }
  }



  return (
    isShown ? <p className={'pick-up-line1'} onClick={() => setIsShown(false)}>{'לחץ עליי להתחלה '}</p>
      :
      <>
        <section onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} className='pickup-line-container flex-ac flex-col'>

          <p className={'pick-up-line1'} > {pickupLines.pickupLine[index].line}</p>
          <Link className='add-pickup-line-link' href={'/add-line'}>יש לך משפט פתיחה מנצח ? לחץ כאן להוספה</Link>
          <section ref={cardConatinerRef} className='cards-container flex-col flex-ac'>
            <HeartSvg setButtonType={setButtonType} isDragOverHeart={isDragOverHeart} />
            <article draggable onPointerDown={handlePointerDown}
              ref={cardRef} className={`card card${1}`} style={isDragging ? {
                transform: `translateX(${translateX + 'px'}) translateZ(${'4px'} ) rotate(${rotate + 'deg'}`
                , opacity: 0.8
              } : {}}>
              <Image src={imgs[imgIndex].urls.small} width={200} height={300} alt={'girls'} ></Image>

            </article>
            <article className={`card card${2}`} >
              <Image src={imgs[imgIndex + 1].urls.small} width={200} height={300} alt={'girls'} ></Image>

            </article>
            <article className={`card card${3}`} >
              <Image src={imgs[imgIndex + 2].urls.small} width={200} height={300} alt={'girls'} ></Image>

            </article>
            <article className={`card card${4}`} >
              <Image src={imgs[imgIndex + 3].urls.small} width={200} height={300} alt={'girls'} ></Image>

            </article>
            <article className={`card card${5}`} >
              <Image src={imgs[imgIndex + 4].urls.small} width={200} height={300} alt={'girls'} ></Image>

            </article>
            <XSvg setButtonType={setButtonType} isDragOverXSvg={isDragOverXSvg} />
          </section>
        </section>
      </>
  )
}
