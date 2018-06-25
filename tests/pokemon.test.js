/* eslint-env mocha */
const expect = require('chai').expect
const { exec } = require('shelljs')

describe('⚡ pokemon', () => {
  before(function () {
    this.timeout(0)
    const removePkgString = 'yarn remove pokemon'
    const addPkgString = 'yarn add -D pokemon'
    const opts = { silent: true }
    exec(`${addPkgString} && ${removePkgString} && ${addPkgString}`, opts)
  })

  it('should return all pokemons', () => {
    const pokemon = require('pokemon')
    expect(pokemon.all().length).to.equal(802)
  })

  it('should return Pikachu', () => {
    const pokemon = require('pokemon')
    expect(pokemon.getName(25)).to.equal('Pikachu')
  })
})
