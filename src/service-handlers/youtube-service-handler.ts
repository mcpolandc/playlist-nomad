import { google, GoogleApis } from 'googleapis'
import {
  isNil,
  concat
} from 'lodash'

import IServiceHandler from './i-service-handler'

class YoutubeServiceHandler implements IServiceHandler {
  private google: GoogleApis
  private youtube

  constructor() {
    this.google = google
    this.youtube = google.youtube('v3')
  }

  public async GetPlaylist(options) {
    const { key, playlistId } = options.youtube

    let returnedData
    let playlistData: Object[] = []

    do {
      returnedData = await this.youtube.playlistItems.list({
        key,
        playlistId,
        part: 'snippet',
        pageToken: returnedData && returnedData.data.nextPageToken ? returnedData.data.nextPageToken : ''
      })

      // add error handling

      playlistData = concat(playlistData, returnedData.data.items)

    } while (!isNil(returnedData.data.nextPageToken))
  
    return playlistData
  }

  public async MigratePlaylist() {

  }
  
}

export default YoutubeServiceHandler