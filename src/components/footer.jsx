import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    console.log("Subscribe function triggered!");

    if (!email.trim()) {
      console.log("Email is empty");
      toast.error("Please enter an email address.");
      return;
    }

    // Email validation using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      console.log("Invalid email format:", email);
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      console.log("Attempting to add email:", email);

      await addDoc(collection(db, "newsletter"), { email });

      console.log("Email added to Firestore!");
      toast.success("You have successfully subscribed!");
      setEmail("");
    } catch (error) {
      console.error("Firestore Error:", error);
      toast.error("Subscription failed. Try again later.");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black to-[#100017] text-white py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
        {/* Left Section - Navigation Links */}
        <div className="text-center lg:text-left space-y-6">
          <ul className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-400">
            <li>
              <Link
                to="joinus"
                smooth={true}
                duration={800}
                className="hover:text-white transition cursor-pointer"
              >
                Join us
              </Link>
            </li>
            <li>
              <Link
                to="aboutus"
                smooth={true}
                duration={800}
                className="hover:text-white transition cursor-pointer"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="speakers"
                smooth={true}
                duration={800}
                className="hover:text-white transition cursor-pointer"
              >
                Our Speakers
              </Link>
            </li>
            <li>
              <Link
                to="sponsors"
                smooth={true}
                duration={800}
                className="hover:text-white transition cursor-pointer"
              >
                Our Sponsors
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                smooth={true}
                duration={800}
                className="hover:text-white transition cursor-pointer"
              >
                Gallery
              </Link>
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <h3 className="font-semibold text-white">OPENING HOURS</h3>
              <p>9am to 5pm</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">EMAIL</h3>
              <p>techtalks.pk92@gmail.com</p>
            </div>
          </div>

          <div className="flex mt-4 gap-4 justify-center lg:justify-start">
            <a
              href="https://www.facebook.com/TechTalks.Pakistan"
              className="text-blue-600 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/techtalks.pk/"
              className="text-pink-600 hover:text-pink-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/techtalkspk"
              className="text-blue-700 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://wa.me/+923100931999"
              className="text-green-500 hover:text-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>

          {/* Privacy, Overview, and Refund Policy Links */}
          <div className="flex justify-center lg:justify-start mt-4 gap-6 text-sm text-gray-400">
            <a
              href="https://docs.google.com/document/u/1/d/1ODsuamvDZrnDzxvvy8LWot6JYleghBG2/edit?usp=sharing&ouid=116707558333377867313&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>
            <a
              href="https://docs.google.com/document/d/1FYIyaFTyXbvUu9JxfAfuI8_l9TDDf8pm/edit#heading=h.g5ec1uhjvm9n"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Refund Policy
            </a>
            <a
              href="https://drive.google.com/file/d/1VQr495D1emN5FkaqMg926B1D25f0-GQo/view"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Overview
            </a>
          </div>
        </div>

        {/* Right Section - Branding & Newsletter */}
        <div className="text-center lg:text-right space-y-4 w-full lg:w-auto">
          <h2 className="text-2xl font-semibold">
            Tech<span className="text-purple-500">Talks</span>.pk
          </h2>

          <div className="lg:text-left">
            <h3 className="text-lg font-semibold">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-3"></p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 w-full sm:w-60 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              <button
                onClick={handleSubscribe}
                className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg transition"
              >
                Subscribe
              </button>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            Stay updated with the latest tech trends & event news.
          </p>

          <p className="text-gray-500 text-xs">© 2024 – Copyright</p>
        </div>
      </div>

  
    </footer>
  );
};

export default Footer;