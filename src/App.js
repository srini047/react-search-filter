import { getTemplates } from './api/axios'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import ListPage from './ListPage'

function App() {
  const [templates, setTemplates] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getTemplates().then(json => {
      setTemplates(json)
      setSearchResults(json)
    }).catch(err => console.log(err));
  }, [])



  return (
    <>
      <SearchBar templates={templates} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  )
}

export default App;