import Head from "next/head";
import Link from "next/link";
import AppNav from "./AppNav";
import Footer from "./Footer";

function Layout({ children, pageTitle }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{pageTitle}</title>
            </Head>
            <div className="flex flex-col min-h-screen">
                <header className="w-full h-16 border-b border-blue-500 flex items-center justify-center">
                    <div className="w-11/12 md:w-full max-w-3xl flex flex-row justify-between">
                        <div className="text-2xl text-blue-500">
                            <Link href="/">
                                <a>Jeff's blog</a>
                            </Link>
                        </div>
                        {AppNav()}
                    </div>
                </header>
                <main className="w-11/12 md:w-full max-w-2xl mx-auto my-8 flex-grow">{children}</main>
                {Footer()}
            </div>
        </>
    )
}



export default Layout;