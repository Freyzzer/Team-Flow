"use client"
import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
export default function SignIn({provider}) {
  return <Button onClick={() => signIn(`${provider}`)}>github</Button>
}
