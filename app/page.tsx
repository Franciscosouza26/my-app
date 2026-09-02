
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
import Link from "next/link";
import { StarRating } from "@/components/ui/star"

export default function CardDemo() {
  return (
  <section className="flex flex-col w-full h-screen items-center justify-center bg-black">
    <Card className="w-full max-w-sm bg-transparent border-1">
      <CardHeader>
        <CardTitle className="text-white">Login to your account</CardTitle>
        <CardDescription className="text-white">
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button className="text-white"variant="link" nativeButton={false} render={<Link href="/inicio">Sign Up</Link>} >
            Sign Up
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form className="text-white">
          <div className="flex flex-col gap-6">
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
              <Input id="password" type="password" placeholder="Password"required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  </section>
  )
}
