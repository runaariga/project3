import spotifyLogo from './spotify.png'
import placeholder from './assets.png'
import placeholder2 from './white.jpg'
import bangerAlertLogo from './bangeralert-logos.jpeg'
export default {
    nav: {
        name: "Spotify Buddy",
        smName: '🎵',
        logo: `${bangerAlertLogo}`,
        spotifyLogo: [`${spotifyLogo}`, 'Connect'],

        links: [
            'Home',
            'About',
            'Login',
        ]
    },
    hero: {
        image: `${placeholder}`,
        image2: `${placeholder2}`,
        hook: 'Spotify. Reimagined.',
        typical: [
            'Lyrics. ',
            2000,
            'Visuals. ',
            2000,
            'Bangers!',
            2000
        ],
        button: [
            'Connect to Spotify',
        ]

    }
}