'use client'
import * as mui from "@mui/material"
import Image from "next/image";
import React, {useEffect} from "react";
import {redirect, RedirectType, useRouter} from "next/navigation";

export default function NotFound() {
    const router = useRouter()
    return (
        <html lang="ru">
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Ошибка: Страница не найдена</title>
            </head>
            <body>
                <div>
                    {/*<mui.AppBar position="static">*/}
                    {/*    <mui.Toolbar variant="dense" color="primary">*/}
                    {/*        <mui.Typography variant="h6" component="div">*/}
                    {/*            Ошибка: страница не найдена*/}
                    {/*        </mui.Typography>*/}
                    {/*    </mui.Toolbar>*/}
                    {/*</mui.AppBar>*/}
                    <div style={{display: "flex", justifyContent: "center",
                        flexDirection: "column", alignItems: "center", marginTop: 15}}>
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/error404.svg"
                            alt="Error logo"
                            width={200}
                            height={200}
                            priority
                        />
                        <p style={{textAlign: "center", fontSize: 60, fontWeight: "bold", lineHeight: 1}}
                           className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
                            404<br></br>—<br></br> Упс!.. Кажется, страница,<br></br> к которой вы пытаетесь
                            обратиться,<br></br> не найдена</p>
                        <mui.Button variant="outlined" style={{borderColor: "black", marginTop: 30}}
                        onClick={() => {
                            router.replace("/")
                        }}>
                            <p className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]" style={{color: "black"}}>
                                Вернуться на главную
                            </p>
                        </mui.Button>
                    </div>

                </div>
            </body>
        </html>
    )
}