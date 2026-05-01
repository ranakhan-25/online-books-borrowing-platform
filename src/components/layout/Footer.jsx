import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Us Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300">
            Have questions? Feel free to reach out anytime.
          </p>

          <div className="mt-4 space-y-2 text-gray-300">
            <p>📧 Email: support@phoneshop.com</p>
            <p>📞 Phone: +880 1234-567890</p>
            <p>📍 Location: Bangladesh</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>

          <div className="flex gap-4">
            <Link className="" href="#">
              <FaFacebook className=" text-blue-50 hover:text-blue-200 w-10  h-10"/>
            </Link>

            <Link className="hover:text-pink-400" href="#">
              <FaInstagram className="w-10 h-10 "/>
            </Link>

            <Link className="hover:text-blue-300" href="#">
              <FaTwitter className="w-10 h-10 "/>
            </Link>

            <Link className="hover:text-red-400" href="#">
              <FaYoutube className="w-10 h-10 "/>
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="text-center py-4 border-t border-gray-700 text-gray-400">
        © {new Date().getFullYear()} Phone Shop. All rights reserved.
      </div>
    </footer>
  );
}