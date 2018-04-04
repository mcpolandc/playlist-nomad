import SpotifyWebApi from 'spotify-web-api-node'
import IServiceHandler from './i-service-handler'

class SpotifyServiceHandler implements IServiceHandler {
  private spotify: SpotifyWebApi

  constructor(authKey: string) {
    this.spotify = new SpotifyWebApi()
    // Using a hardcoded test token for now. This will need to be generated for the user
    this.spotify.setAccessToken(authKey)
  }

  public async GetPlaylist(playlistId: string) {
    // TODO: When we support spotify as a source service
  }

  public async MigratePlaylist(playlist: Object[]) {
    // 1. search for tracks in playlist (this will be expensive for a large playlist. Any way to optimise??)
    // 2. generate a list of spotify track ids e.g. spotify:track:4iV5W9uYEdYUVa79Axb7Rh
    // 3. get userId by calling 'spotify.getMe()'
    // 3. call 'createPlaylist: function(userId, playlistName, options, callback)' with list of tracks
  }
}

export default SpotifyServiceHandler