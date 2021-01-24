import ActiveLink from "./ActiveLink";


function AppNav() {
    return (
        <nav className="text-2xl text-gray-600">
            <ActiveLink href="/" activeClassName="text-blue-500">
                <a className="hover:text-blue-500">Blog</a>
            </ActiveLink>
            <ActiveLink href="/about" activeClassName="text-blue-500">
                <a className="hover:text-blue-500">About</a>
            </ActiveLink>
        </nav>
    );
}

export default AppNav;