import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { Exhale, Inhale } from '../components'
import gsap from 'gsap'
import contentSectionAnimation from '../functions/contentSectionAnimation'

const ContentSection = () => {
  const contentSectionRef = useRef()
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      contentSectionAnimation()
    }, contentSectionRef)
    return () => ctx.revert()
  }, [])
  return (
    <ContentSectionWrapper ref={contentSectionRef}>
      <Exhale />
      <Inhale />
    </ContentSectionWrapper>
  )
}

const ContentSectionWrapper = styled.section`
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 9vmin;
  text-align: center;
  color: white;
  z-index: 1;
  font-family: 'Raleway', sans-serif;
  div {
    width: 5em;
    line-height: 1.15;
  }
  .exhale {
    font-variation-settings: 'wght' 300, 'wdth' 120;
  }
  .inhale {
    font-variation-settings: 'wght' 500, 'wdth' 120;
  }
  /* @keyframes inhale {
    0% {
      font-variation-settings: 'wght' 300, 'wdth' 120;
      opacity: 0.5;
      scale: 0.95;
    }
    100% {
      font-variation-settings: 'wght' 500, 'wdth' 120;
      opacity: 1;
      scale: 1;
    }
  }
  @keyframes exhale {
    0% {
      font-variation-settings: 'wght' 300, 'wdth' 120;
      opacity: 1;
      scale: 1;
    }
    100% {
      font-variation-settings: 'wght' 500, 'wdth' 120;
      opacity: 0.5;
      scale: 0.95;
    }
  }
  .inhale {
    animation: inhale 5s infinite alternate;
    font-family: 'Raleway', sans-serif;
  }
  .exhale {
    animation: exhale 5s infinite alternate;
    font-family: 'Raleway', sans-serif;
  } */
`

export default ContentSection
