"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const navLinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Add-Coffee",
            path: "/addCoffee"
        },
        {
            name: "Manage-Coffee",
            path: "/manageCoffee"
        },
    ]

    const pathName = usePathname()

    return (
        <div className="navbar  bg-amber-950 text-white px-10 rounded-b-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2">
                        {
                            navLinks.map((link, index) => {
                                const isActive = pathName.startsWith(link.path)
                                return <Link
                                    className={isActive ? "text-blue-600" : ""}
                                    key={index}
                                    href={link.path}>{link.name}</Link>
                            })
                        }
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl shadow-2xl">Morning Mug</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-sm">
                    {
                        navLinks.map((link, index) => {
                            const isActive = pathName.startsWith(link.path)
                            return <Link
                                className={isActive ? "underline" : ""}
                                key={index}
                                href={link.path}>{link.name}</Link>
                        })
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;