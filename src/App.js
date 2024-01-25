import React from 'react'
import NavBar from './components/NavBar/NavBar.js'
import Hero from './components/Hero/Hero.js'
import styles from './App.module.css'
import { useEffect, useState } from 'react'
import { fetchTopAlbums , fetchNewAlbums } from './api/api'
import Section from './components/Section/Section.js'

function App() {

  const [topAlbumSongs, setTopAlbumSongs] = useState([])
  const [newAlbumSongs, setNewAlbumSongs] = useState([])
  const [value] = useState(0);



 
 

  const generateTopAlbumSongs = async () => {
    try {
      const topAlbumSongs = await fetchTopAlbums()
      setTopAlbumSongs(topAlbumSongs)
    }
    catch (error) {
      console.log(error)
      return null
    }

  }

  const generateNewAlbumSongs = async () => {
    try {
      const newAlbumSongs = await fetchNewAlbums()
      setNewAlbumSongs(newAlbumSongs);
     
    }
    catch (error) {
      console.log(error)
      return null
    }
  }

  

  useEffect(() => {
    // eslint-disable-next-line
  }, [value])

  useEffect(() => {
    
    generateTopAlbumSongs();
    generateNewAlbumSongs();
  }, [])
  
  
  return (
    <>
      <NavBar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type='album' title='Top Albums' data={topAlbumSongs} />
        <Section type='album' title='New Albums' data={newAlbumSongs} />
      </div>
    </>
  )
}

export default App