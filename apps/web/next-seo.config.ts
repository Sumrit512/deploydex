import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | UniExchange',
  defaultTitle: 'UniExchange',
  description:
    'Cheaper and faster than Uniswap? Discover UniExchange, the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for MNB.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@UniExchange',
    site: '@UniExchange',
  },
  openGraph: {
    title: '🥞 UniExchange - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'The most popular AMM on BSC by user count! Earn MNB through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
    images: [{ url: 'https://mnb3d.com/MNB_logo.png' }],
  },
}
