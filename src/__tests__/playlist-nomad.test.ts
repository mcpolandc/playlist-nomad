import PlaylistNomad from '../index'

/* eslint-disable no-undef */
describe('PlaylistNomad', () => {
  let playlistNomad

  beforeEach(() => {
    playlistNomad = new PlaylistNomad()
  })

  it('instantiates class', () => {
    expect(playlistNomad).toBeInstanceOf(PlaylistNomad) 
  })
})
/* eslint-enable no-undef */