import React from 'react'
import {styled} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const SearchBarContainer = styled('div')(
  ({theme})=>({
    width: '100%',
    position: 'relative',
    '& .MuiSvgIcon-root':{
      position: 'absolute',
      // color: 'black',
      top: 7,
      left: 7
    },
    '& input':{
      width: '100%',
      border: 'none',
      fontSize: '1.2em',
      color: 'white',
      padding: theme.spacing(1,1,1,5),
      borderRadius: 8,
      background: theme.palette.background.paper,
      '&:focus':{
        outline: 'none'
      }
    }
  })
)
const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon/>
      <input/>
    </SearchBarContainer>
  )
}

export default SearchBar
