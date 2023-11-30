/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
import Footer from 'components/Footer'
import { Trans } from '@pancakeswap/localization'
import { AtomBox } from '@pancakeswap/ui/components/AtomBox'
import 'bootstrap/dist/css/bootstrap.css';
import { Button,LinkExternal, Heading, Image, Flex, Text, Grid, Input } from "@pancakeswap/uikit";
import React, { useCallback, useEffect, useState } from 'react'
import AliceCarousel from "react-alice-carousel";
import Page from 'views/Page'
import {useRouter} from 'next/navigation'
import AddToWalletButton from 'components/AddToWallet/AddToWalletButton';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper/types'
import { Autoplay } from 'swiper'


const StepDot = ({ active, place, onClick }: { active: boolean; place: 'left' | 'right'; onClick: () => void }) => (
  <AtomBox padding="4px" onClick={onClick} cursor="pointer">
    <AtomBox
      bgc={active ? 'secondary' : 'inputSecondary'}
      width="56px"
      height="8px"
      borderLeftRadius={place === 'left' ? 'card' : '0'}
      borderRightRadius={place === 'right' ? 'card' : '0'}
    />
  </AtomBox>
)

const About = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
        
     },[])

     const [step, setStep] = useState(0)
     const [swiper, setSwiper] = useState<SwiperClass | undefined>(undefined)
     const IntroSteps = [
      {
        title: <Trans>Now your favorite Decentralized Exchange (DEX) UNIEXCHANGE is also available on tron blockchain</Trans>,
        icon: 'https://cdn.pancakeswap.com/wallets/wallet_intro.png',
        description: (
          <Trans>
            Now you can swap between your assets available on tron blockchain.
          </Trans>
        ),
        docText: "Try now",
        docLink: "https://uniexchange-tron-verison-ea6t.vercel.app/"
      },
      {
        title: <Trans>The best Exchange in the word is LIVE now.</Trans>,
        icon: 'https://cdn.pancakeswap.com/wallets/world_lock.png',
        description: (
          <Trans>
            Now you can trade between different Crypto assets using cash on the world&apos;s most secured Exchange.    
                  </Trans>
        ),
        docText: "Try now",
        docLink:"https://cex-six.vercel.app/"
      },
    ]

    const handleRealIndexChange = useCallback((swiperInstance: SwiperClass) => {
      setStep(swiperInstance.realIndex)
    }, [])

    const handleStepClick = useCallback(
      (stepIndex: number) => {
        return () => {
          setStep(stepIndex)
          swiper?.slideTo(stepIndex)
        }
      },
      [swiper],
    )

     const router = useRouter()
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
    <div>
        <Page >
       

        <div className="container ">
        <AtomBox
      display="flex"
      width="full"
      flexDirection="column"
      style={{ gap: '24px' }}
      mx="auto"
      my="48px"
      textAlign="center"
      alignItems="center"
    >
      <Swiper
        initialSlide={0}
        modules={[Autoplay]}
        slidesPerView="auto"
        onSwiper={setSwiper}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onRealIndexChange={handleRealIndexChange}
        centeredSlides
        loop
        style={{ marginLeft: '0px', marginRight: '0px' }}
      >
        {IntroSteps.map((introStep) => (
          <SwiperSlide key={introStep.icon}>
            <Heading as="h2" color="secondary">
              {introStep.title}
            </Heading>
            <Image m="auto" src={introStep.icon} width={198} height={178} />
            <Text maxWidth="368px" m="auto" small color="textSubtle">
              {introStep.description}
            </Text>
            <Button minHeight={40} variant="subtle" external as={LinkExternal} color="backgroundAlt" href={introStep.docLink}>
       {introStep.docText}
      </Button>
          </SwiperSlide>
        ))}
      </Swiper>
      <AtomBox display="flex">
        <StepDot place="left" active={step === 0} onClick={handleStepClick(0)} />
        <StepDot place="right" active={step === 1} onClick={handleStepClick(1)} />
      </AtomBox>
    
    </AtomBox>
      
        <div className="row pd-80">
          <div className="col-lg-5 col-md-12">
          
            <div className="banner_text">
            <h3 style={{
             'color': '#7d54ff',
                 'fontSize': '24px',
              'padding': '10px'
        }}>UNIEXCHANGE PROTOCOL
       
        </h3>
        <div className='
d-flex
gap-2
text-lg
'
style={{
  'color' : '#7d54ff',
  'fontSize': '18px',
  'padding': '10px'
}}
>
( Add UNR token 
                <AddToWalletButton
                variant="text"
                p="0"
                height="auto"
                width="fit-content"
                tokenAddress='0xc28b342bC0D10B1926C6B4304AdB655B69e73Be7'
                tokenSymbol='UNR'
                tokenDecimals={18}
                tokenLogo=''
              />
)
</div>


              <h1>Be the Master of Your 
  <span> Crypto Destiny</span></h1>
             
              <p>Uniexchange is the ultimate platform for trade, earn, win, conversions, profits, and victories.
              </p>
            </div>

            <div className="trial_box">
            <div className="banner-btns d-flex flex-wrap">
                                <div onClick={() => router.push('/swap')} data-blast="bgColor"  className="about-btn btn btn-outline-primary btn-lg "><span>Swap</span> </div>
                                <div  onClick={() => router.push('/liquidity')} className="btn about-btn btn-primary btn-lg m-r-2  "><span>Add Liquidity</span> </div>

                            </div>

                            <div className="counter ">
            <div>
              <h4 className="font-semibold text-xl md:text-4xl text-gray-900 dark:text-white"> 10K+ </h4>
              <p className="font-normal text-xs md:text-base text-gray-700 dark:text-gray-400"> Registered Clients </p>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-4xl text-gray-900 dark:text-white"> 20K+ </h4>
              <p className="font-normal text-xs md:text-base text-gray-700 dark:text-gray-400"> Regular Bid </p>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-4xl text-gray-900 dark:text-white"> 5K+ </h4>
              <p className="font-normal text-xs md:text-base text-gray-700 dark:text-gray-400"> Verified Auctions </p>
            </div>
          </div>
            
             
          </div>
          </div>

         
          <div className="col-lg-6 offset-lg-1">
            <div className="banner_images image_box1">
                <span className="banner_image1"> <img className="moving_position_animatin" src="https://axieslaravel.themesflat.co/images/box-item/imgslider-3.png" alt="image"/> </span>
                <span className="banner_image2"> <img className="moving_animation" src="https://axieslaravel.themesflat.co/images/backgroup-secsion/img-bg-sliderhome3.png" alt="image"/> </span>
            </div>
          </div>


         
       

        </div>


        <div className="row box1">
         
          <div className="col-lg-5 ">
          
          <div className="banner-image">
                            <img src="https://demos.codexcoder.com/labartisan/html/nft/enftomark-light/assets/images/banner/banner-img.png" className='nft' alt="NFT Image"/>
                        </div>
          </div>
          <div className="col-lg-6">
          
          <div className="ui_text">
            <div className="banner_text">
              <h1>The Uniexchange  <span>Protocol</span></h1>
              <p>
              A set of long-lasting, unmodifiable smart contracts that work together to create an automated market maker system, a protocol that simplifies direct market making and swapping of BEP-20 tokens on the Binance blockchain.
              </p>
            </div>
          
          </div>
        </div>
        </div>

        <div className="row pd-80">
         
         
          <div className="col-lg-6">
          
          <div className="ui_text pd-80">
            <div className="banner_text">
              <h1>How does the Uniexchange protocol compare to a  <span>typical market?</span></h1>
              <p>
              Uniexchange is a unique cryptocurrency trading platform that departs from traditional exchanges in two significant ways. It uses an Automated Market Maker design and is a permissionless system, allowing anyone to participate without requiring approval from a central authority.
              </p>
            </div>
          
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1">
          
          <div className="banner-image ">
                            <img src="/images/exchange.png" alt="NFT Image" />
                        </div>
          </div>
        </div>

        



        <div className="row pd-80">
         
        <div className="col-lg-4  ">
          
          <div className="banner-image ">
                            <img src="https://rainbowit.net/html/nuron-rtl/assets/images/slider/slider-1.png" alt="NFT Image" />
                        </div>
          </div>
          <div className="offset-lg-1 col-lg-7">
          
          <div className="ui_text ">
            <div className="banner_text">
              <h1>Order Book VS  <span>AMM</span></h1>
              <p>
              Order books and automated market makers (AMMs) are two common trading mechanisms in the cryptocurrency market.
            An order book is a list of buy and sell orders placed by traders that allow buyers and sellers to connect and trade.
            An AMM, on the other hand, uses a mathematical algorithm to determine the price of an asset based on the supply and demand ratio.
            While order books provide traders with more control and flexibility, AMMs are known for their simplicity and lower fees.
            Finally, the choice between order books and AMMs is determined by the individual traders needs and preferences.
              </p>
            </div>
          
          </div>
        </div>
       
        </div>

        <div className="row pd-80">
      
          
         
         
          <div className="col-lg-12">
          
          <div className="ui_text">
            <div className="banner_text">
              <h1>Swap <span>Introduction</span></h1>
              <p>
              Uniexchange is a permissionless decentralized exchange protocol that allows users to swap BEP-20 tokens.
            Swapping entails exchanging current tokens for desired tokens, minus a swap fee paid to liquidity providers.
            Uniexchange swaps, unlike traditional order book trades, are executed against a pool of liquidity rather than against discrete orders.
            Fees for liquidity providers are proportional to their committed capital.
            </p>
            <p>
            It should be noted that using web interfaces to swap via Uniexchange may introduce additional permission structures and result in different execution behavior than using the protocol directly.
              </p>
            </div>
          
          </div>
        </div>
       
        </div>

        <div className="row pd-80" />


        
       
      </div>
     
    </Page>
    <Footer/>
    </div>
    )

}

export default About