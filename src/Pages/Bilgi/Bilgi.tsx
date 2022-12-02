
import React from "react"

import { Container, Text, Button, createStyles } from '@mantine/core';



const Bilgi = () => {

    const useStyles = createStyles((theme) => ({


        red: {
            color: "red",
        }
    }
    ))

    const { classes, cx } = useStyles();

    return (
        <Container p="sm">

            <h3>Çekiliş Kuralları</h3>
            <li> Çekilişi herkez başlatabilir yada bitirebilir</li>
            <li> Çekiliş başlangıcından en az 8 saat sürer, bu süre geçtikten sonra  bitirilebilir</li>
            <li> Yeni Çekiliş son çekiliş bitimiden  en az 1 saat geçtikten sonra  başlatılabilir</li>
            <li> Çekilişe en az 10 kişi katılmazsa çekiliş iptal olur giriş ücretleri geri dağıtılır </li>
            <h3> Çekiliş Giriş için gerekliler</h3>
            <li> Çekilişe ilk kez katılmak zor fakat diğer blockchain uygulamaları kullanmanız
                <div>içinde aynı işlemleri yapcağınız için ilk kurulum önemli </div></li>
            <li> Fakat bir kez katıldıktan sonra tek tuşla istediğiniz çekilişe katılabilirsiniz   </li>
            <li>
                <Text variant="link" target="_blank" component="a" href="https://www.youtube.com/watch?v=-LWjE4xQpCQ">
                    Önce meta mask  kurulmalı
                </Text>
            </li>
            <li >Binance ağı metamaska eklenmeli</li>
            <li className={cx(classes.red)} >Metamask oluşturduğunuz cüzdanın 9 kelimenizi bir kağıda yazın!!!</li>
            <li >Binance ve binance tr uygulaması kurun</li>
            <li >Binancedan metamask cüzdanınıza bnb gönderin</li>
            <li >Önce çok ufak bir tutar gönderip doğru adrese gönderdiğinizden emin olun</li>

            <div> </div>



        </Container >
    )

}

export { Bilgi }