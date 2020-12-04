import React from 'react'
import styled from 'styled-components'


export const SearchStyled = styled.div`
display:flex;
justify-content:center;
margin:50px;
font-family: 'Hind', sans-serif;
`

export const ButtonStyled = styled.div`
background-color:#C3BEF7;
padding:5px 15px;
border-radius:10px;
margin-left:10px;
&:hover{
    background-color:#8A4FFF;
    cursor:pointer
}
`
export const InputStyled = styled.input`
padding:5px 15px;
border-radius:10px;
width:30%
`

const Search =()=>{
    return (
        <SearchStyled>
            <InputStyled type="text" placeholder="e.g.how to create react template..."/>
            <ButtonStyled>search</ButtonStyled>
        </SearchStyled>
    )
}

export default Search