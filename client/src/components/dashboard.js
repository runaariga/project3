import { useState, useEffect } from 'react'
import useAuth from '../utils/useAuth'
import SpotifyWebApi from 'spotify-web-api-node';
import TrackSearchResult from './TrackSearchResult';
const spotifyApi = new SpotifyWebApi({
    clientId: '2bb574410c7f4e1bb11e1a9d4d8908a3'
})
// import { FaSearch } from 'react-icons/fa'
const Dashboard = ({ code }) => {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState('')


    //assigns access token every time state changes
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])
    //handles search requests
    useEffect(() => {
        //if no search results set state to empty
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false

        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return

            setSearchResults(
                res.body.tracks.items.map(track => {
                    const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
                        if (image.height < smallest.height) {
                            return image
                        }
                        return smallest
                    }, track.album.images[0]
                    )

                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url
                    }
                })
            )
            console.log(searchResults)
        })
        return () => cancel = true
    }, [search, accessToken])


    return (
        <div className="h-screen">

            <div className="pt-2 relative mx-auto text-gray-600 flex justify-center">
                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" onChange={e => setSearch(e.target.value)} />


                <input type="submit" className='text-2xl mx-2 border-2 border-gray-300 bg-white  px-5  rounded-lg h-10 hover:outline-red-500' value='submit' />



            </div>
            <div className="flex text-3xl font-bold overflow-auto">

                {/* how to map over an array */}
                {/* {searchResults.map((track, item) => {
                    <TrackSearchResult track={track} key={item.uri} />
                })} */}

            </div>
        </div>
    )
}

export default Dashboard