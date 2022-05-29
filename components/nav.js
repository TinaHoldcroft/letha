import Link from "next/link";


const Nav = () => {

    return (
        <nav>
            <Link href='/'>Sneakers</Link>
            <Link href='/'>Pumps</Link>
            <Link passHref href='/'>
                <a className='logo'>
                    <div>Letha</div>
                    <div>Footwear</div>
                </a>
            </Link>
            <Link href='/'>Boots</Link>
            <Link href='/'>Sandals</Link>
        </nav>
    )
}

export default Nav;