import { useState, useEffect } from "react"
import useAuth from "./useAuth"
import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import { Container, Form } from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"
import content from "./content/index.js"
import Dashnav from "./Dashnav"
const spotifyApi = new SpotifyWebApi({
  clientId: "8b945ef10ea24755b83ac50cede405a0",
})

export default function Dashboard({ code }) {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState("")
  const [playlist, setPlaylist] = useState('')
  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
    setLyrics("")
  }

  useEffect(() => {
    if (!playingTrack) return

    axios
      .get("http://localhost:3001/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then(res => {
        setLyrics(res.data.lyrics)
      })
  }, [playingTrack])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, accessToken])



  spotifyApi.getUserPlaylists('22wxpsvxtr5nm3nql3osejizy')
    .then(res => {
      setPlaylist(

        res.body.items.map(playlist => {
          console.log(playlist.tracks)
          return {
            name: playlist.name,
            uri: playlist.uri,
            id: playlist.id
          }
        }
        ));

    });

  return (
    <Container className="d-flex flex-column py-2 " style={{ height: "100vh", minWidth: "100vw", backgroundColor: '#F7BF50', }}>
      <div className="d-flex justify-content-between align-items-center px-4 py-2">
        <img src={content.nav.logo} height="50rem" alt="bangeralert for Navbar" className='buttonHover' />
        <Form.Control
          type="search"
          className="w-25"
          placeholder="Search Songs/Artists"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="d-flex ">
        <Dashnav code={code} />
        <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
          {searchResults.map(track => (
            <TrackSearchResult
              track={track}
              key={track.uri}
              chooseTrack={chooseTrack}
            />
          ))}
        </div>
        {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )}
      </div>
      <div className='fixed-bottom '>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </Container>
  )
}
