
"use client"
import { signIn } from "next-auth/react"
 
export default function SignIn({provider}) {
  return <button onClick={() => signIn(`${provider}`)}>github</button>
}
