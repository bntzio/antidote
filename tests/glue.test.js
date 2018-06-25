/* eslint-env mocha */
const expect = require('chai').expect
const shell = require('shelljs')

const glue = require('./../lib')

describe('glue', () => {
  before(function () {
    this.timeout(0)
    shell.exec('yarn add -D pokemon && yarn remove pokemon && yarn add -D pokemon', { silent: true })
  })

  it('should return 10 pokemons instead of all pokemons', async () => {
    await glue('pokemon').then(result => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
    const pokemon = require('pokemon')
    expect(pokemon.all().length).to.equal(10)
  })
})
