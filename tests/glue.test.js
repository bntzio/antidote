/* eslint-env mocha */
const expect = require('chai').expect
const { exec } = require('shelljs')

const glue = require('./../lib')

describe('✨ glue', () => {
  before(function () {
    this.timeout(0)
    const removePkgString = 'yarn remove pokemon'
    const addPkgString = 'yarn add -D pokemon'
    const opts = { silent: true }
    exec(`${addPkgString} && ${removePkgString} && ${addPkgString}`, opts)
  })

  it('should return 10 pokemons instead of all pokemons', async () => {
    await glue('pokemon')
      .then(result => console.log(result))
      .catch(error => console.log(error))
    const pokemon = require('pokemon')
    expect(pokemon.all().length).to.equal(10)
  })

  it('should always return Mewtwo', async () => {
    await glue('pokemon')
      .then(result => console.log(result))
      .catch(error => console.log(error))
    const pokemon = require('pokemon')
    expect(pokemon.random()).to.equal('Mewtwo')
  })
})
