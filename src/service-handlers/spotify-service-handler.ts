import SpotifyWebApi from 'spotify-web-api-node'
import IServiceHandler from './i-service-handler'

class SpotifyServiceHandler implements IServiceHandler {
  private spotify: SpotifyWebApi

  public async GetPlaylist(options) {

  }

  public async MigratePlaylist() {

  }
}

export default SpotifyServiceHandler