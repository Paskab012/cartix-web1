import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: #fff;
`;

const Buttons = ({imgRef, setImageSize}) => {

  const handleZoomIn = () => {
    const height = imgRef.current.clientHeight;
    const width = imgRef.current.clientWidth
     
    setImageSize({
      height : height + 10,
      width : width + 10,
    }) 
  }
 
  const handleZoomOut = () => {
    const initialHeight = imgRef.current.clientHeight;
    const initialWidth = imgRef.current.clientWidth;

    setImageSize({
      height : initialHeight - 10,
      width : initialWidth - 10,
    }) 
  }

  const handleInitialZoom = () => {
    setImageSize({
      height: 642,
      width: 739
    })
  }

  return (
    <Container>
      <button id="zoom-in" onClick={handleZoomIn}>Zoom In</button>
      <button id="zoom-out" onClick={handleZoomOut}>Zoom out</button>
      <button id="zoom-init" onClick={handleInitialZoom}>initial</button>
    </Container>
  )
}

export default Buttons