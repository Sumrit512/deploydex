import { Box, ButtonMenu, ButtonMenuItem, Flex, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useState, memo } from 'react'
import { useFetchPairPrices } from 'state/swap/hooks'
import dynamic from 'next/dynamic'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis ,CartesianGrid, Legend, Tooltip, Area, AreaChart, Bar, BarChart} from 'recharts'
import { PairDataTimeWindowEnum } from 'state/swap/types'
import NoChartAvailable from './NoChartAvailable'
import PairPriceDisplay from '../../../../components/PairPriceDisplay'
import { getTimeWindowChange } from './utils'


const SwapLineChart = dynamic(() => import('./SwapLineChart'), {
  ssr: false,
})

const BasicChart = ({
  token0Address,
  token1Address,
  isChartExpanded,
  inputCurrency,
  outputCurrency,
  isMobile,
  currentSwapPrice,
}) => {
  const [timeWindow, setTimeWindow] = useState<PairDataTimeWindowEnum>(0)

  const { pairPrices = [], pairId } = useFetchPairPrices({
    token0Address,
    token1Address,
    timeWindow,
    currentSwapPrice,
  })
  const fixePrices = [
    {
        "time": new Date("2023-05-05T13:00:00.000Z"),
        "value": 129.56053707629485
    },
    {
        "time": new Date("2023-05-05T14:00:00.000Z"),
        "value": 129.9965325927258
    },
    {
        "time": new Date("2023-05-05T15:00:00.000Z"),
        "value": 129.96422338682936
    },
    {
        "time": new Date("2023-05-05T16:00:00.000Z"),
        "value": 130.60756408107264
    },
    {
        "time": new Date("2023-05-05T17:00:00.000Z"),
        "value": 130.9074529638641
    },
    {
        "time": new Date("2023-05-05T18:00:00.000Z"),
        "value": 131.31067438148918
    },
    {
        "time": new Date("2023-05-05T19:00:00.000Z"),
        "value": 131.43060314926828
    },
    {
        "time": new Date("2023-05-05T20:00:00.000Z"),
        "value": 131.80342755268902
    },
    {
        "time": new Date("2023-05-05T21:00:00.000Z"),
        "value": 132.01599672384927
    },
    {
        "time": new Date("2023-05-05T22:00:00.000Z"),
        "value": 132.38041590782328
    },
    {
        "time": new Date("2023-05-05T23:00:00.000Z"),
        "value": 133.84191465065868
    },
    {
        "time": new Date("2023-05-06T00:00:00.000Z"),
        "value": 134.62849055224416
    },
    {
        "time": new Date("2023-05-06T01:00:00.000Z"),
        "value": 134.62440479345463
    },
    {
        "time": new Date("2023-05-06T02:00:00.000Z"),
        "value": 135.36048373517445
    },
    {
        "time": new Date("2023-05-06T03:00:00.000Z"),
        "value": 136.8391694568544
    },
    {
        "time": new Date("2023-05-06T04:00:00.000Z"),
        "value": 140.01755619443273
    },
    {
        "time": new Date("2023-05-06T05:00:00.000Z"),
        "value": 140.05816181322396
    },
    {
        "time": new Date("2023-05-06T06:00:00.000Z"),
        "value": 142.23766481466726
    },
    {
        "time": new Date("2023-05-06T07:00:00.000Z"),
        "value": 141.9769380549096
    },
    {
        "time": new Date("2023-05-06T08:00:00.000Z"),
        "value": 142.3133586600082
    },
    {
        "time": new Date("2023-05-06T09:00:00.000Z"),
        "value": 142.26389973356837
    },
    {
        "time": new Date("2023-05-06T10:00:00.000Z"),
        "value": 142.1622959389426
    },
    {
        "time": new Date("2023-05-06T11:00:00.000Z"),
        "value": 142.12987895994533
    },
    {
        "time": new Date("2023-05-06T12:00:00.000Z"),
        "value": 142.07652667451234
    },
    {
        "time": new Date("2023-05-06T12:53:15.594Z"),
        "value": 141.722
    }
]
const data = [
  {
    name: '11:00',
    uv: 4000,
    price: 140,
    amt: 50,
  },
  {
    name: '11:30',
    uv: 3000,
    price: 85,
    amt: 70,
  },
  {
    name: '12:00',
    uv: 2000,
    price: 152,
    amt: 90,
  },
  {
    name: '12:30',
    uv: 2780,
    price: 167,
    amt: 110,
  },
  {
    name: '13:00',
    uv: 1890,
    price: 157,
    amt: 130,
  },
  {
    name: '13:30',
    uv: 2390,
    price: 144,
    amt: 150,
  },
  {
    name: '14:00',
    uv: 3490,
    price: 165,
    amt: 170,
  },
];

  const [hoverValue, setHoverValue] = useState<number | undefined>()
  const [hoverDate, setHoverDate] = useState<string | undefined>()
  const valueToDisplay = hoverValue || fixePrices[fixePrices.length - 1]?.value
  const { changePercentage, changeValue } = getTimeWindowChange(fixePrices)
  const isChangePositive = changeValue >= 0
  const chartHeight = isChartExpanded ? 'calc(100vh - 220px)' : '320px'
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation()
  const currentDate = new Date().toLocaleString(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })



    // Sometimes we might receive array full of zeros for obscure tokens while trying to derive data
  // In that case chart is not useful to users
  const isBadData =
    pairPrices &&
    pairPrices.length > 0 &&
    pairPrices.every(
      (price) => !price.value || price.value === 0 || price.value === Infinity || Number.isNaN(price.value),
    )

  if (isBadData) {
    return (
      <NoChartAvailable
        token0Address={token0Address}
        token1Address={token1Address}
        pairAddress={pairId}
        isMobile={isMobile}
      />
    )
  }

  const call = () =>{
    console.log(   Math.floor(fixePrices[0].time.getTime() / 1000) )
  }

  return (
    <>
    
      <Flex
        flexDirection={['column', null, null, null, null, null, 'row']}
        alignItems={['flex-start', null, null, null, null, null, 'center']}
        justifyContent="space-between"
        px="24px"
        flexWrap="wrap"
      >
        <Flex flexDirection="column" pt="12px">
          <PairPriceDisplay
            value={fixePrices?.length > 0 && valueToDisplay}
            inputSymbol={inputCurrency?.symbol}
            outputSymbol={outputCurrency?.symbol}
          >
            <Text color={isChangePositive ? 'success' : 'failure'} fontSize="20px" ml="4px" bold>
              {`${isChangePositive ? '+' : ''}${changeValue.toFixed(3)} (${changePercentage}%)`}
            </Text>
          </PairPriceDisplay>
          <Text small color="secondary">
            {hoverDate || currentDate}
          </Text>
        </Flex>
        <Box>
          <ButtonMenu activeIndex={timeWindow} onItemClick={setTimeWindow} scale="sm">
            <ButtonMenuItem>{t('24H')}</ButtonMenuItem>
            <ButtonMenuItem>{t('')}</ButtonMenuItem>
            <ButtonMenuItem>{t('')}</ButtonMenuItem>
            <ButtonMenuItem>{t('')}</ButtonMenuItem>
          </ButtonMenu>
        </Box>
      </Flex>
      <Box height={isMobile ? '100%' : chartHeight} p={isMobile ? '0px' : '16px'} width="100%">
        {/* <SwapLineChart
          data={fixePrices}
          setHoverValue={setHoverValue}
          setHoverDate={setHoverDate}
          isChangePositive={isChangePositive}
          isChartExpanded={isChartExpanded}
          timeWindow={timeWindow}
        />
       <Text onClick={call}>click</Text> */}
         <ResponsiveContainer 
        // width='100%'
        //  margin={{
        //     top: 5, right: 300
        // }}
        // aspect={3}
        >
            <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  {/* <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs> */}
  <XAxis dataKey="name" />
  <YAxis dataKey="amt"/>
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  {/* <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> */}
  <Area type="monotone" dataKey="price" stroke="#82ca9d" fillOpacity={1} fill="#82ca9d" />
</AreaChart>
        </ResponsiveContainer>
        
      </Box>
    
    </>
  )
}

export default memo(BasicChart, (prev, next) => {
  return (
    prev.token0Address === next.token0Address &&
    prev.token1Address === next.token1Address &&
    prev.isChartExpanded === next.isChartExpanded &&
    prev.isMobile === next.isMobile &&
    prev.isChartExpanded === next.isChartExpanded &&
    ((prev.currentSwapPrice !== null &&
      next.currentSwapPrice !== null &&
      prev.currentSwapPrice[prev.token0Address] === next.currentSwapPrice[next.token0Address] &&
      prev.currentSwapPrice[prev.token1Address] === next.currentSwapPrice[next.token1Address]) ||
      (prev.currentSwapPrice === null && next.currentSwapPrice === null))
  )
})
