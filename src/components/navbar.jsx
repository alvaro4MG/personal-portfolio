import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Álvaro's Portfolio
                </Link>
            </div>
            <a href="https://alvaro4mg.vercel.app/CV_Harvard_Alvaro.pdf" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;