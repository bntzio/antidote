const expect = require('chai').expect
const shell = require('shelljs')

describe('pokemon', () => {
  before(function () {
    this.timeout(0)
    shell.exec('yarn add pokemon -D && yarn remove pokemon && yarn add pokemon -D')
  })

  it('should return all pokemons', () => {
    const pokemon = require('pokemon')
    expect(pokemon.all().length).to.equal(802)
  })
})
