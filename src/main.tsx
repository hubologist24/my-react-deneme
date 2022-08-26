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
    }}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </DAppProvider>
  </React.StrictMode>
)
