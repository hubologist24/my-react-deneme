import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { DAppProvider, Goerli, BSCTestnet, BSC } from "@usedapp/core"
import { getDefaultProvider } from 'ethers'
import { MantineProvider } from '@mantine/core'
// [Goerli.chainId]: getDefaultProvider('goerli')
//https://docs.bscscan.com/misc-tools-and-utilities/public-rpc-nodes


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DAppProvider config={{
      readOnlyChainId: BSCTestnet.chainId,
      readOnlyUrls: {
        [BSCTestnet.chainId]: "https://data-seed-prebsc-1-s1.binance.org:8545/"
      },
      refresh: 5,//defaut 1 5 block da bir refresh liyor
      gasLimitBufferPercentage: 10, // The percentage by which the transaction may exceed the estimated gas limit.
    }}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </DAppProvider>
  </React.StrictMode>
)
