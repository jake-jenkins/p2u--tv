import Link from 'next/link'

const Header = () => {
    return (
        <>
        <header className="bg-gray-50 shadow-md fixed w-full z-10 px-2">
            <div className="container mx-auto flex h-14 items-center">
                <Link href="/">
                <div className="flex-none w-44 text-xl cursor-pointer">
                    JJ TV
                </div>
                </Link>
                <nav className="flex-initial w-full hidden md:block">
                    <a href="/" className="p-2">Home</a>
                    <a href="#" className="p-2">Library</a>
                    <a href="#" className="p-2">Your Account</a>
                </nav>
                <div className="flex-none w-50 justify-end text-right hidden md:block">
                        <form>
                        <input type="text" name="search" className="w-40 rounded-2xl p-2 mr-2" placeholder="Search"/>
                        <input type="submit" className="bg-blue-800 p-2 text-white rounded-2xl" value="Search" />
                        </form>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;