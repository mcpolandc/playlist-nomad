import { google, GoogleApis } from 'googleapis'
import {
  isNil,
  concat
} from 'lodash'

import IServiceHandler from './i-service-handler'

class YoutubeServiceHandler implements IServiceHandler {
  private google: GoogleApis
  private youtube
  private authKey: string

  constructor(authKey: string) {
    this.google = google
    this.youtube = google.youtube('v3')
    this.authKey = authKey
  }

  public async GetPlaylist(playlistId: string) {
    let returnedData
    let playlistData: Object[] = []

    do {
      returnedData = await this.youtube.playlistItems.list({
        key: this.authKey,
        playlistId,
        part: 'snippet',
        pageToken: returnedData && returnedData.data.nextPageToken ? returnedData.data.nextPageToken : ''
      })

      // add error handling

      playlistData = concat(playlistData, returnedData.data.items)

    } while (!isNil(returnedData.data.nextPageToken))
  
    return playlistData
  }

  public async MigratePlaylist(options) {

  }
  
}

export default YoutubeServiceHandler