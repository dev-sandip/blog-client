import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div><div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Oops! Page not found</p>
            <Button asChild>
                <Link to="/">
                    Go back home
                </Link>
            </Button>
        </div></div>
    )
}

export default NotFound