import React from 'react'
import {styled} from '@mui/material/styles';
import { CircularProgress, Typography } from '@mui/material';
import ResultItem from './ResultItem';

const SearchResultContainer = styled('div')(
  ({theme}) => ({
    maxHeight: '90vh',
    overflowY: 'scroll',
    padding: '10px'
  })
)


const SearchResults = ({handleClearPattern, searchResults, loading}) => {

  const renderSearchResult = (results, loading) => {
    if(loading) return <CircularProgress sx={{ display:'block', margin: '10px auto'}} size={30}/>
    if(!Boolean(results) || results.length === 0) return <Typography>Game not found</Typography>
    return searchResults.map(result => {
      return <ResultItem handleClearPattern={handleClearPattern} key={result.id} resultId={result.id} image={result.background_image} name={result.name} parentPlatforms={result.parent_platforms}/>
    })
  }
  return (
    <SearchResultContainer>
      {renderSearchResult(searchResults, loading)}
    </SearchResultContainer>
  )
}

export default SearchResults
