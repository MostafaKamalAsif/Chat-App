'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Container from '../Components/Container'
const login = () => {
    const [current, setcurrent]=useState('sign up')
  return (
  <>
<div className="bg-[url('/banner.jpg')] bg-cover bg-center min-h-[800px] py-[100px] w-full">

    <Container>
        <Card className="w-full max-w-sm z-10 ms-auto  ">
      <CardHeader>
        <CardTitle>{current}</CardTitle>
        <CardDescription>
            
          Enter your email below to {current} to your account
        </CardDescription>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6 ">
            {
                current === "sign up"?(<><div className="grid gap-2">
              <Label htmlFor="text">User name</Label>
              <Input
                id="user name"
                type="text"
                placeholder="User name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
               
              </div>
              <Input id="password" type="password" required />
            </div>
              <div className=" flex  text-sm text-gray-600 text-center gap-x-5">
                <input type="checkbox" className='mt-1' />
                <p>  I agree to the terms of Service privacy Policy</p>

            </div>
            </>):(<>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          
            
            </>)
            }
     
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        {current === "sign up" ? <><Button type="submit" className="w-full">
          Create an account
        </Button>
        <p >  Already have an account? <button onClick={()=> setcurrent("Login")}>Login</button> </p></>:
        <>
        <Button type="submit" className="w-full">
          Login
        </Button>
         <p > Don’t have an account? <button onClick={()=> setcurrent("sign up")}>Create and account</button> </p>
        </>
        }
        
       
        
      </CardFooter>

    </Card>
    </Container>
      
</div>

  </>
  )
}

export default login