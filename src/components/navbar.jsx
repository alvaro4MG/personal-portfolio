import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Álvaro's Portfolio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/10ZosQ38Z3804KYPcb_aZp9bceoXK-q3GrkHjYshqIRE/edit?usp=sharing" className="cta-btn">Resume mal</a>
        </div>
    )
}

export default Navbar;