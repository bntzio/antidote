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

  it('should throw error message if invalid id', () => {
    const pokemon = require('pokemon')
    const id = 999
    const repoUrl = 'https://github.com/sindresorhus/pokemon'
    const reportText = `Please report to ${repoUrl}/issues if we missed something.`
    const errorMsg = `Pokémon with ID '${id}' does not exist. ${reportText}`
    expect(() => pokemon.getName(id)).to.throw(errorMsg)
  })
})
