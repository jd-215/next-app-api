import {  NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function handler(request: NextRequest ) {
    const path = request.nextUrl.pathname;

    const pathIsPublic = path === '/login' || path === '/signup' || path === '/verifyemail' || path === '/';
    
   const token = request.cookies.get('token')?.value || "";
   if (pathIsPublic && token) {
       return NextResponse.redirect(new URL('/profile', request.nextUrl));
   }
   if (!pathIsPublic && !token) {
       return NextResponse.redirect(new URL('/', request.nextUrl));
   }
}

export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup',
    ]
}