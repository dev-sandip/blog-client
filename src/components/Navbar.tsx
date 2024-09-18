import { Link } from "react-router-dom"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <div><header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" to="#">
                <span className="text-2xl font-bold">BlogApp</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Button variant="ghost" asChild>
                    <Link to="/">Home</Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link to="/about">About</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                    <Link to="/register">Sign Up</Link>
                </Button>
            </nav>
        </header></div>
    )
}

export default Navbar