import spotifyLogo from './spotify.png'
import placeholder from './assets.png'
import placeholder2 from './white.jpg'
import bangerAlertLogo from './bangeralert-logos.jpeg'

import dark from './dark.png'
import faces from './faces.jpg'
import kanye from './mbdtf.jpg'
import cardi from './cardi.png'
import weekend from './w.jpg'

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
        image: `${dark}`,
        image2: `${kanye}`,
        image3: `${cardi}`,
        image4: `${weekend}`,
        image5: `${faces}`,
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