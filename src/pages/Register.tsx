import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signup } from "@/http/api"
import type { NetworkError, Register } from "@/types"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"



const Register = () => {

    const mutation = useMutation({
        mutationFn: ({ name, email, password }: Register) => signup(name, email, password),
        onSuccess: (response) => {

            if (response.status === 201) {

                toast.success("Register Successful")
            } else {
                toast.error("Register Failed")
            }
        },
        onError: (error: NetworkError) => {
            console.log(error)
            toast.error("Register Failed")
        },
    });



    const { register, handleSubmit } = useForm<Register>()
    const onSubmit: SubmitHandler<Register> = (data) => {
        mutation.mutate({ name: data.name, email: data.email, password: data.password });
    }
    return (
        <div className="flex  items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} >
                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-xl">Sign Up</CardTitle>
                        <CardDescription>
                            Enter your information to create an account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Full name</Label>
                                <Input id="name" placeholder="John Doe" required {...register("name")} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    {...register("email")}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" required {...register("password")} />
                            </div>
                            <Button type="submit" className="w-full">
                                Create an account
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link to="#" className="underline">
                                Sign in
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    )
}

export default Register