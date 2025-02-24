import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";  

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="icon">
          <a href="https://www.linkedin.com/in/yogendra-bairwa-a120622b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin size={24} color="#0077b5" />
          </a>

          <a href="https://x.com/Yogendra_459?t=s9XFgWjPCBWjLDV11tu90A&s=09">
            <FaXTwitter size={24} color="white" />
          </a>
          <a href="https://www.facebook.com/share/1AC2y44iLQ/">
            <FaFacebook size={24} color="blue" />
          </a>
          <a href="https://wa.me/919351710503">
            <FaWhatsapp size={24} color="25D366" />
          </a>

          <a href="https://www.instagram.com/yogendra_459?igsh=MWVqMXFyMmQ1dXF6eQ==">
            <FaInstagram size={24} color="#E1306C" />
          </a>
        </div>
      </div>
      <div className="footer2">
        <h1>Thankyou 😊</h1>
      </div>
      <div className="line"></div>
      <div className="madeby">
        <p>Made with 💖 by Yogendra</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies Settings</li>
        </ul>
      </div>
    </div>
  );
}
