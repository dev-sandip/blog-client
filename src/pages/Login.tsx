import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { login } from '@/http/api'
import type { Login, NetworkError } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Login = () => {
    // const navigate = useNavigate();
    const { register, handleSubmit } = useForm<Login>()


    const mutation = useMutation({
        mutationFn: ({ email, password }: Login) => login(email, password),
        onSuccess: (response) => {
            if (response.status === 200) {
                toast.success("Login Successful")
            } else {
                toast.error("Login Failed")
            }


        },
        onError: (error: NetworkError) => {
            console.log(error)
            toast.error("Login Failed")
        },
    });
    const onSubmit: SubmitHandler<Login> = (data) => {
        mutation.mutate({ email: data.email, password: data.password });
    }

    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)} >
                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="login@sapkotasandip.com.np"
                                    required
                                    {...register("email")}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link to="#" className="ml-auto inline-block text-sm underline">
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required {...register("password")} />
                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>

                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link to="/register" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    )
}

export default Login