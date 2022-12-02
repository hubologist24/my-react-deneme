
import React from "react"

import { Container, Text, Button } from '@mantine/core';



const About = () => {

    const sendMail = () => {
        const mailto: string =
            "mailto:dogu77@gmail.com?subject=Naber subject&body=Body content";
        window.location.href = mailto;
    }

    return (
        <Container p="sm">


            <li> BlockChain uygulamala yazıyorum</li>
            <li> Her Hangi Smart Chaine deploy edilir ör:Mainnet L1's L2's,Binance..  </li>
            <li> Hem backend hem front end oluşturuyorum.</li>
            <li>Fakat frontend developer değilim basit arayüz sadece</li>
            <li> Blockchain solidity dili ile ön yüz react typescript dili ile </li>
            <li>
                <Text variant="link" component="a" href="https://github.com/hubologist24">
                    kodlar githublinki
                </Text>
            </li>
            <div>dogu77@gmail.com</div>
            <Button onClick={sendMail}> Mail </Button>

        </Container>
    )

}

export { About }