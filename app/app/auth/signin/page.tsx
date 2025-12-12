"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { signIn } from "next-auth/react"
import { toast } from "sonner"
import Logo from "@/components/myComponents/Logo"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
    const [email, setEmail] = useState("");
    const route = useRouter()

    const handleEmailLogin = async () => {
        try {
            await signIn('credentials', { email })
            route.push('/')
        } catch (e) {
            toast.error("Error: Signing with email")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-md rounded-2xl shadow-md border bg-background">
                <CardHeader>
                    <div className="flex items-center justify-center">
                        <Logo />
                    </div>
                </CardHeader>

                <CardContent className="p-6 flex flex-col gap-6">

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <Label>Email <span className="text-red-500">*</span>                        </Label>

                        <div className="flex items-center gap-2 border rounded-lg px-3 h-12">
                            <Mail className="h-5 w-5 text-muted-foreground" />

                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                type="email"
                                className="border-0 shadow-none focus-visible:ring-0"
                            />
                        </div>
                        {email === "" && (
                            <p className="text-red-500 text-xs">Email needed</p>
                        )}

                    </div>

                    {/* Submit */}
                    <Button
                        onClick={handleEmailLogin}
                        className="w-full h-12 cursor-pointer text-base font-medium rounded-lg"
                    >
                        Sign In
                    </Button>

                    {/* Google */}
                    <Button
                        variant="outline"
                        className="w-full h-12 cursor-pointer rounded-lg flex items-center justify-center gap-3"
                    // onClick=}
                    >
                        <Image
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            alt="Google"
                            width={20}
                            height={20}
                        />
                        Continue with Google
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
