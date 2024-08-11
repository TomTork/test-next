'use client'
import * as mui from "@mui/material"
import React from "react"
import {useRouter} from "next/navigation"
import styles from "./Home.module.css"
import {Card} from "../../types/Card"

export default function Home() {
    const arrayOfSupportedCards: Card[] = [{
        title: "Разметка помещения",
        description: "Сгенерировать path для разметки зданий",
        imagePath: "/public/markup-bg.png"
    } as Card]

    const router = useRouter()
    return (
      <html lang="ru">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Главная страница</title>
        </head>
        <body>
            <div>
                <mui.AppBar position="static" className={styles.appBar}>
                    <mui.Toolbar variant="dense" color="primary">
                        <mui.Typography variant="h6" component="div">
                            <h1 className={styles.h1}>Workbench</h1>
                        </mui.Typography>
                        <a className={styles.space}></a>
                        <mui.Button variant="outlined" className={styles.buttonEnter}
                                    onClick={() => {
                                        router.push("/account")
                                    }}>
                            <p className={styles.colorTextButton}>
                                Войти / Зарегистрироваться
                            </p>
                        </mui.Button>
                    </mui.Toolbar>
                </mui.AppBar>
            </div>
        {/*<mui.Container>*/}
        {/*    {arrayOfSupportedCards.map((card: Card, index: number) => {*/}
        {/*        <mui.Card>*/}
        {/*            */}
        {/*        </mui.Card>*/}
        {/*    })}*/}
        {/*</mui.Container>*/}


        </body>
      </html>
    )
}
