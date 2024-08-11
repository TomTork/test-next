import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import {cookies} from "next/headers";

/*
СРАБАТЫВАЕТ КАЖДЫЙ РАЗ, КОГДА ПОЛЬЗОВАТЕЛЬ ЗАХОДИТ НА НОВЫЙ URL. ИСПОЛЬЗУЕТСЯ ДЛЯ ПРОВЕРОК АВТОРИЗАЦИИ И ПРОЧ.
 */

export function middleware(req: NextRequest) {
    // if(!cookies().get('token')) return NextResponse.redirect(new URL('/account', req.url))

    // return NextResponse.redirect(new URL('/home', req.url))
}

export const config = {
    matcher: ['/admin', "/:user", '/']
}