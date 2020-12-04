import React from 'react'
import styled from 'styled-components'


export const WelcomeStyled = styled.div`
text-align:center;
color: azure;
margin-top:100px;
font-size:2em;


`

const Welcome =()=>{
    return <WelcomeStyled>Welcome to codecache! search your questions below</WelcomeStyled>
}


export default Welcome
