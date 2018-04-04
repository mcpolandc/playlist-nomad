interface IServiceHandler {
  GetPlaylist(playlistId: string)
  MigratePlaylist(options)
}

export default IServiceHandler