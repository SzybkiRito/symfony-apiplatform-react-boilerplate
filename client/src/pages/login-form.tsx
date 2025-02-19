import React from "react";
import {cn} from "@/lib/utils.ts"
import {Button} from "@/components/ui/button.tsx"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx"
import {Input} from "@/components/ui/input.tsx"
import {Label} from "@/components/ui/label.tsx"
import {useAuth} from "@/components/providers/auth-provider.tsx";
import Spinner from "@/components/ui/spinner.tsx";

export const LoginForm = ({className, ...props}: React.ComponentPropsWithoutRef<"div">) => {
    const auth = useAuth();
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            await auth.loginAction(email, password)
        } catch (error) {
            setError(error.message)
        }

        setIsLoading(false)
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            {error && (
                                <div className="text-red-600 bg-red-100 p-2 rounded">
                                    {error}
                                </div>
                            )}
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
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
                                <Input
                                    id="password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                {isLoading ? <Spinner /> : "Login"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginForm;