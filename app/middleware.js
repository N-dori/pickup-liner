export  { default } from "next-auth/middleware"

// when user is loged out user wil be redirect to "/"
export const config = {matcher: ['/login']} 