import './styles/footer.css';
export default async function Home() {
    return (
        <>
            <div className="footer">
                <div className="content container contentFooter">
                    <div className="row text-center">
                        <div className="col-6 col-md-3">
                            <ul>
                                <div className="nameFooter">Guides</div>
                                <li><a>What is Bitcoin</a></li>
                                <li><a>How to buy Bitcoin</a></li>
                                <li><a>What is Ethereum</a></li>
                                <li><a>What is Litecoin</a></li>
                                <li><a>How to buy Cryptocurrency</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3">
                            <ul>
                                <div className="nameFooter">Tools</div>
                                <li className="dropdown-item">
                                    <a>English
                                    </a></li>
                                <li><a>Year to year</a></li>
                                <li><a>Widgets</a></li>
                                <li><a>API</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3">
                            <ul>
                                <div className="nameFooter">Company</div>
                                <li><a>About us</a></li>
                                <li><a>Coin request</a></li>
                                <li><a>Exchange request</a></li>
                                <li><a>Contact us</a></li>
                                <li><a>Forum</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3">
                            <ul>
                                <div className="nameFooter">Follow us</div>
                                <div className="social-buttons">
                                    <a href="https://facebook.com" target="_blank" className="facebook">
                                         Facebook
                                    </a>
                                    <a href="https://twitter.com" target="_blank" className="twitter">
                                         Twitter
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="custom-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center footerCoin">
                                <a>© 2024 WorldCoinIndex</a> |
                                <a href="#">Disclaimer</a> |
                                <a href="#">Privacy policy</a> |
                                <a href="#">Terms of use</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}