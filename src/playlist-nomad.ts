import { google } from 'googleapis'

import {
  IServiceHandler,
  YoutubeServiceHandler,
  SpotifyServiceHandler
} from './service-handlers'
import { servicetypes } from './constants'

class PlaylistNomad {
  private sourceService: IServiceHandler
  private destService: IServiceHandler

  private initialiseServiceHandlers(options) {
    // initialise appropriate source handler
    switch (options.source_service.name) {
      case servicetypes.YOUTUBE:
        this.sourceService = new YoutubeServiceHandler(options.source_service.key)
        break;
      
      default:
        break;
    }

    // initialise appropriate destination handler
    switch (options.destination_service.name) {
      case servicetypes.SPOTIFY:
        this.destService = new SpotifyServiceHandler(options.destination_service.key)
        break;
    
      default:
        break;
    }
  }

  public async PerformPlaylistMigration(options) {
    this.initialiseServiceHandlers(options)
    const playlist = this.sourceService.GetPlaylist(options)
    this.destService.MigratePlaylist(playlist)
  }
}

export default PlaylistNomad