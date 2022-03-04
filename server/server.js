const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json())
const PORT = process.env.PORT || 3001;
app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refresh_token
    console.log(refreshToken)
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        refreshToken
    })
    spotifyApi.refreshAccessToken()
        .then(data => {
            res.json({
                accessToken: data.body.refresh_token,
                expiresIn: data.body.expires_in
            })

        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })


})


app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '2bb574410c7f4e1bb11e1a9d4d8908a3',
        clientSecret: '83b4ceabf72a4d3798be07a94d3e0804'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

app.listen(PORT)