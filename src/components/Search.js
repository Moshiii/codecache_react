import React from 'react'
import styled from 'styled-components'
import fuzzy from 'fuzzy'


export const GridStyled = styled.div`
font-family: 'Hind', sans-serif;
color: azure;
`
export const SearchStyled = styled.div`
display:flex;
justify-content:center;
margin:50px;

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



const getFilteredResults = (e,userInput,queryData,setFilteredResults)=>{
    let filteredResults=[]
   
    let titles= queryData.map(item => item.Title)
    if(userInput){
        let fuzzyResults = fuzzy.filter(userInput.trim().toLowerCase(), titles, {}).map(res => res.string) 
        console.log(fuzzyResults);
        filteredResults = queryData.filter(item => {if(fuzzyResults.includes(item.Title)){return item} })
      
    }

    setFilteredResults(filteredResults)
  

}





const Search =({userInput, setUserInput, queryData, setFilteredResults})=>{
    return (
        <GridStyled>
            <SearchStyled>
                <InputStyled type="text" placeholder="e.g.how to create react template..." value={userInput} onChange={(e)=>{setUserInput(e, e.target.value)}}/>
                <ButtonStyled onClick={(e)=>{getFilteredResults(e, userInput, queryData, setFilteredResults)}}>search</ButtonStyled>
            </SearchStyled>
       
        
        </GridStyled>
    )
}

export default Search