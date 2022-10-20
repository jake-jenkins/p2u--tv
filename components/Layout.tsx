import Header from "./Header"
export default function Layout({children} : any) {
    return (
        <>
        <Header />
        <main className="container mx-auto p-4 pt-20">
            {children}
        </main>
        </>
    )
}