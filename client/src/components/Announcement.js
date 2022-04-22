import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-content: center;
    font-weight: 500;
    font-size: 14px;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal gratuit à partir de 500$ !!!
    </Container>
  )
}

export default Announcement