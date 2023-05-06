import React from 'react'

const About = () => {

    return (
    //     <style>

    //     .swap-about {
    //         max-width: 800px;
    //         margin: 0 auto;
    //         margin-top: 80px;
    //         font-family: 'Kanit', sans-serif;
    //     }
    //         .swap-about h3 {
    //             color: #7d54ff;
    //             font-size: 21px;
    //         }
    //         .swap-about h4 {
    //             color: #5239a2;
    //             font-size: 19px;
    //             font-weight: 500 !important;
    //         }

    //         .swap-about p {
    //             color: #5f5586;
    //             font-size: 15px;
    //         }

    // </style>
        <div style={{ 'maxWidth': '800px',
                   'margin': '0 auto',
                  'marginTop': '50px',
                     'fontFamily': "'Kanit', sans-serif",
                     'padding': '20px',
                      'paddingBottom' : '50px'
            
        }}>
        <h3 style={{
             'color': '#7d54ff',
                 'fontSize': '22px',
              'padding': '10px'
        }}>UNIEXCHANGE PROTOCOL</h3>

        <p
           style={{
            'color': '#5f5586',
            'fontSize': '15px',
            'lineHeight' : '24px'
}}
        >Swap on the leading decentralized crypto trading protocol.</p>

        <h4 style={{
             'color': '#5239a2',
                          'fontSize': '19px',
                          'fontWeight': '500 !important',
                          'padding': '20px 0 10px '
        }}>The Uniexchange Protocol</h4>
        <p
           style={{
            'color': '#5f5586',
            'fontSize': '15px',
            'lineHeight' : '24px'
}}
        >
            A set of long-lasting, unmodifiable smart contracts that work together to create an automated market maker system, a protocol that simplifies direct market making and swapping of BEP-20 tokens on the Binance blockchain.
        </p>
        <h4 style={{
             'color': '#5239a2',
                          'fontSize': '19px',
                          'fontWeight': '500 !important',
                          'padding': '20px 0 10px '
        }}>How does the Uniexchange protocol compare to a typical market?</h4>
        <p
           style={{
            'color': '#5f5586',
            'fontSize': '15px',
            'lineHeight' : '24px'
}}
 >
            Uniexchange is a unique cryptocurrency trading platform that departs from traditional exchanges in two significant ways. It uses an Automated Market Maker design and is a permissionless system, allowing anyone to participate without requiring approval from a central authority.
        </p>


        <h4 style={{
             'color': '#5239a2',
                          'fontSize': '19px',
                          'fontWeight': '500 !important',
                          'padding': '20px 0 10px '
        }}>Order Book VS AMM</h4>

        <p
         style={{
                    'color': '#5f5586',
                    'fontSize': '15px',
            'lineHeight' : '24px'
        }}
        >
            Order books and automated market makers (AMMs) are two common trading mechanisms in the cryptocurrency market.
            An order book is a list of buy and sell orders placed by traders that allow buyers and sellers to connect and trade.
            An AMM, on the other hand, uses a mathematical algorithm to determine the price of an asset based on the supply and demand ratio.
            While order books provide traders with more control and flexibility, AMMs are known for their simplicity and lower fees.
            Finally, the choice between order books and AMMs is determined by the individual traders needs and preferences.
        </p>
        <h3 style={{ 'color': '#7d54ff',
                 'fontSize': '22px',
                 'padding': '10px'

        }}> Swap</h3>
        <h4 style={{
             'color': '#5239a2',
                          'fontSize': '19px',
                          'fontWeight': '500 !important',
                          'padding': '20px 0 10px '
        }}> Introduction</h4>

        <p 
           style={{
            'color': '#5f5586',
            'fontSize': '15px',
            'lineHeight' : '24px'
}}
        >
            Uniexchange is a permissionless decentralized exchange protocol that allows users to swap BEP-20 tokens.
            Swapping entails exchanging current tokens for desired tokens, minus a swap fee paid to liquidity providers.
            Uniexchange swaps, unlike traditional order book trades, are executed against a pool of liquidity rather than against discrete orders.
            Fees for liquidity providers are proportional to their committed capital.
            It should be noted that using web interfaces to swap via Uniexchange may introduce additional permission structures and result in different execution behavior than using the protocol directly.
        </p>
    </div>
    )

}

export default About