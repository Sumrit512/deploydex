import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    56: '0x89214191f4A9632f4dcd09b20404A443f5E287fd',  
    // 56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // CAKE TOKEN
    97: '0xa00a26A0873542d459721A0a5Ee18D2791D891AA',
    // 97: '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  }

  it(`get address for mainnet (chainId 56)`, () => {
    const expected = address[56]
    expect(getAddress(address, 56)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    const expected = address[97]
    expect(getAddress(address, 97)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    const expected = address[56]
    expect(getAddress(address, 31337)).toEqual(expected)
  })
})
