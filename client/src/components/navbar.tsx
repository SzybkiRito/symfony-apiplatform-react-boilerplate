import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import {useAuth} from "@/components/providers/auth-provider.tsx";
const Navbar = () => {
    const auth = useAuth();

    return (
        <Card className="w-full ml-5 mr-5 bg-card py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-5">
            {/*<ShadcnKit className="text-primary cursor-pointer" />*/}

            <ul className="hidden md:flex items-center gap-10 text-card-foreground">
                <li className="text-primary font-medium">
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#pricing">Pricing</a>
                </li>
                <li>
                    <a href="#faqs">FAQs</a>
                </li>
                <li>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <span className="cursor-pointer">Pages</span>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="start">
                            {landings.map((page) => (
                                <DropdownMenuItem key={page.id}>
                                    <Link href={page.route}>{page.title}</Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>
            </ul>

            <div className="flex items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <span className="py-2 px-2 bg-gray-100 rounded-md">Profile</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem key={nanoid()}>
                            {auth.user?.email}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button className="hidden md:block ml-2 mr-2" onClick={() => auth.logoutAction()}>Logout</Button>

                <div className="flex md:hidden mr-2 items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <span className="py-2 px-2 bg-gray-100 rounded-md">Pages</span>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="start">
                            {landings.map((page) => (
                                <DropdownMenuItem key={page.id}>
                                    <Link href={page.route}>{page.title}</Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5 rotate-0 scale-100" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <a href="#home">Home</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href="#features">Features</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href="#pricing">Pricing</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href="#faqs">FAQs</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Button variant="secondary" className="w-full text-sm">
                                    Login
                                </Button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Button className="w-full text-sm">Get Started</Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </Card>
    );
};

const landings = [
    {
        id: nanoid(),
        title: "Landing 01",
        route: "/project-management",
    },
    {
        id: nanoid(),
        title: "Landing 02",
        route: "/crm-landing",
    },
    {
        id: nanoid(),
        title: "Landing 03",
        route: "/ai-content-landing",
    },
    {
        id: nanoid(),
        title: "Landing 04",
        route: "/new-intro-landing",
    },
    {
        id: nanoid(),
        title: "Landing 05",
        route: "/about-us-landing",
    },
    {
        id: nanoid(),
        title: "Landing 06",
        route: "/contact-us-landing",
    },
    {
        id: nanoid(),
        title: "Landing 07",
        route: "/faqs-landing",
    },
    {
        id: nanoid(),
        title: "Landing 08",
        route: "/pricing-landing",
    },
    {
        id: nanoid(),
        title: "Landing 09",
        route: "/career-landing",
    },
];

export default Navbar;