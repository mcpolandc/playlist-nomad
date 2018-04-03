import PlaylistNomad from '../index'
import * as configOptions from './test-data.json'

/* eslint-disable no-undef */
describe('PlaylistNomad', () => {
  let playlistNomad

  beforeEach(() => {
    playlistNomad = new PlaylistNomad(configOptions)
  })

  it('instantiates class', () => {
    expect(playlistNomad).toBeInstanceOf(PlaylistNomad)
  })
})
/* eslint-enable no-undef */