import logo from "../images/small_logo.png"

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="" />
        </div>
        <div>
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3>Contacts Us</h3>
          <ul>
            <li>Email: <br/>info@littlelemon.com</li>
            <li>Phone: <br/> (520) 192 230</li>
            <li>Address: <br/>452 Texas, USA</li>
          </ul>
        </div>

        <div>
          <h3>Socials Medias</h3>
          <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">TikTok</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;