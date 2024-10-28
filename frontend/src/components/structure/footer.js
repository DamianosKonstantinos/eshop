import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            <div className="left-side">
                <div className="site-name">ESHOP</div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/">
                        <Image src='/facebook.svg' className="icon" alt="fb" width={24} height={24}/>
                    </a>
                    <a href="https://www.youtube.com/">
                        <Image src='/youtube.svg' className="icon" alt="yt" width={24} height={24}/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <Image src='/instagram.svg' className="icon" alt="insta" width={24} height={24}/>
                    </a>
                    <a href="https://www.linkedin.com/">
                        <Image src='/linkedin.svg' className="icon" alt="linkedin" width={24} height={24}/>
                    </a>
                </div>
            </div>
            <p>2024 My-Eshop</p>
            <div className="right-side">
                <div className="column">
                    <h4 className="topic">Topic</h4>
                    <a className="pageb" href='#'>Page</a>
                    <a className="pageb" href='#'>Page</a>
                    <a className="pageb" href='#'>Page</a>
                </div>
                <div className="column">
                    <h4 className="topic">Topic</h4>
                    <a className="pageb" href='#'>Page</a>
                    <a className="pageb" href='#'>Page</a>
                    <a className="pageb" href='#'>Page</a>
                </div>
                <div className="column">
                    <h4 className="topic">Topic</h4>
                    <a className="pageb" href='#'>Page</a>
                    <a className="pageb" href='#'>Page</a>
                    <a className="pageb" href='#'>Page</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
