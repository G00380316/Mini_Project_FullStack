import Nav from "@/components/navbar/nav";

export default function AuthLayout({ children }) {
    return (
    <>
        <nav>
            <Nav />
        </nav>
        {children}
    </>
    );
}
