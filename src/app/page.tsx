import Image from "next/image";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Workbench",
  description: 'Сайт для работы с вспомогательными инструментами'
}

export default function Home() {
  return (
      <html lang="ru">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Главная страница</title>
        </head>
        <body>
            <div>

            </div>
        </body>
    </html>
  )
}
