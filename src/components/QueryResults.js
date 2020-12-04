
import React from 'react'
import styled from 'styled-components'

export const ListStyled = styled.div`
color: azure;
display:flex;
flex-direction:column;
margin:20px;
`

export const TitleStyled = styled.div`
background-color: #C3BEF7;
border-radius:10px;
color:black;
padding:10px
`

export const AnswerStyled = styled.div`
padding:10px
`

export default function QueryResults({filteredResults}){
    return (
    <div>
      {
          filteredResults.map((res, index )=> {return <ListStyled key={index}>
              <TitleStyled>Question: {res.Title}</TitleStyled>
              <AnswerStyled><pre>Answer: {res.Answer_Body}</pre></AnswerStyled>
          </ListStyled>})
      }
       
    </div>
    )
}