require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se o nome do personagem é "Wonder Woman"', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
    expect(character.name).not.toBe('Spider Man');
  });
  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error('You must provide an url'));
    expect(failRequest).not.toEqual(new Error('You must provide an ur'));
  });
  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('parâmetro qualquer');
    expect(response).toEqual('Invalid id');
    expect(response).not.toEqual('Invalid i');
  });
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/721';
    await fetchCharacter('721');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});
