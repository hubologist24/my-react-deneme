import { useRef } from 'react'
import './App.css'
import { Container, Header, Footer, Title, useMantineTheme, NavLink, createStyles } from '@mantine/core';

import { Home } from "./Pages/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { NavBarX } from "./components/organisms/NavBarX"

import { About } from "./Pages/About"
import { Bilgi } from "./Pages/Bilgi"




//https://www.linkpicture.com/view.php?img=LPic6384a1219711c535723408

function App() {
  const { ethereum } = window as any;
  const theme = useMantineTheme();

  const useStyles = createStyles((theme) => ({


    img: {
      //width: "250px",
      // height: "150px",
      margin: "0 auto",
      display: "block"
    }

  }
  ))

  // className={cx(classes.img)
  const { classes, cx } = useStyles();

  //const inputRef = useRef(null);
  // disabled={!account || chainId !== Goerli.chainId}
  //{ethereum && account && <h1>Çekiliş Giriş Ücreti: {lottery_fee} BNB</h1>}
  return (
    <><div className="App">



      <div>

      </div>
      <BrowserRouter>
        <NavBarX />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bilgi" element={<Bilgi />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>



      <Footer height={10}>
        <Container>
          <div >
            <img className={cx(classes.img)}
              src="https://i.ibb.co/w60nYLv/mylogo.jpg" alt="mylogo"
            />
          </div>
        </Container>
      </Footer>
    </div></>

  );
}

export default App;
