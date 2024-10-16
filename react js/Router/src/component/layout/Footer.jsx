import "./Footer.css"
export const Footer = () => {
    
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-links">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <ul>
                            <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                        </ul>
                    </div>
                    <div className="footer-copyright">
                        <p>&copy; 2023 Movie Website. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

