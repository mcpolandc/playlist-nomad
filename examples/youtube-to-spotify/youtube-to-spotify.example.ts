import PlaylistNomad from '../../src/playlist-nomad'
import * as configOptions from './test-data.json' // Alice in Chains - Jar of Flies ;)

const playlistNomad = new PlaylistNomad()
playlistNomad.performPlaylistMigration(configOptions)