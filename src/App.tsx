import { useRef } from 'react'
import './App.css'
import { Container, Header, Footer, Title, useMantineTheme } from '@mantine/core';
import { WalletInstallation } from "./components/organisms/WalletInstallation"
import { WalletConnect } from "./components/organisms/WalletConnect"
import { Lottery_status_modal } from "./components/organisms/Lottery_status_modal"
import { EnterLottery } from "./components/organisms/EnterLottery"
import { StartLottery } from "./components/organisms/StartLottery"
import { EndLottery } from "./components/organisms/EndLottery"
import { useEthers } from '@usedapp/core';




function App() {
  const { ethereum } = window as any;
  const theme = useMantineTheme();
  const inputRef = useRef(null);


  const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()


  enum LOTTERY_STATE {
    OPEN,
    CLOSED,
    CALCULATING_WINNER
  }
  //LOTTERY_STATE[value]

  const lot_status = Lottery_status_modal()
  //const lottery_fee = LotteryFee()

  console.log(LOTTERY_STATE[lot_status])

  // disabled={!account || chainId !== Goerli.chainId}
  //{ethereum && account && <h1>Çekiliş Giriş Ücreti: {lottery_fee} BNB</h1>}
  return (
    <><div className="App">

      <Header
        height={60}
        px="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.colors.red[3],
          justifyContent: "space-between",
        }}
      >
        <Title>Kripto Çekilişi</Title>

        <WalletConnect />
      </Header>

      <div>

      </div>


      <Container p="lg">

        {!ethereum && <WalletInstallation />}

        {ethereum && !account && <h1 style={{ color: 'red' }}>Önce login olun</h1>}
        {LOTTERY_STATE[lot_status] == "OPEN" ? <h2 style={{ backgroundColor: 'lime' }}> Çekiliş Devam Ediyor</h2> : <h2 style={{ backgroundColor: 'lime' }}> Çekiliş Başlamaya Hazır</h2>}

        {ethereum && account && LOTTERY_STATE[lot_status] == "OPEN" && <EnterLottery />}
        {ethereum && account && LOTTERY_STATE[lot_status] == "OPEN" && <EndLottery />}

        {ethereum && account && LOTTERY_STATE[lot_status] == "CLOSED" && <StartLottery />}
        {ethereum && account && LOTTERY_STATE[lot_status] == "CALCULATING_WINNER" && <div>Kazanan Belirleniyor</div>}





      </Container>
    </div><Footer height={10}>
        footer
      </Footer></>

  );
}

export default App;
