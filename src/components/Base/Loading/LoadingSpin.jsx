import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'

const Container = styled(animated.div)`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    box-sizing: border-box;
    position: absolute;
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #000000;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #000000 transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
   animation-delay: -0.3s;
  }
  & div:nth-child(3) {
   animation-delay: -0.15s;
  } 

  @keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

function LoadingSpin(props) {
  const { style, hideLoading, loadingState } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    if (loadingState == false) {
      await new Promise(r => setTimeout(r, 500));
      setIsLoading(false);
      await new Promise(r => setTimeout(r, 500));
      hideLoading();
    }
  })

  return (
    <Container style={style}><div></div><div></div><div></div><div></div></Container>
  )
}

export default LoadingSpin
