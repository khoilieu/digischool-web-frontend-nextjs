/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SocialLinks } from "../SocialLinks";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot,
  faHome,
  faStar,
  faVideo,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";

export function Footer({ copyright, logo, links, social, ...rest }) {
  return (
    <footer className="bg-[#29375C]  text-white pt-12" {...rest}>
      <div className="container px-4 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="./digischool_logo.png"
                alt="DigiSchool Logo"
                className="h-24 w-auto"
              />
              <h2 className="text-3xl font-bold text-white">DigiSchool</h2>
            </div>
            <p className="text-gray-200 mb-4 max-w-md">
              Hệ thống thay thế sổ đầu bài truyền thống, giúp quản lý hoạt động các tiết học một cách nhanh chóng và dễ dàng.
            </p>
            <div className="flex space-x-4">
              <SocialLinks links={social} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-200 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {index === 0 && <FontAwesomeIcon icon={faHome} className="w-4 h-4" />}
                    {index === 1 && <FontAwesomeIcon icon={faStar} className="w-4 h-4" />}
                    {index === 2 && <FontAwesomeIcon icon={faVideo} className="w-4 h-4" />}
                    {index === 3 && <FontAwesomeIcon icon={faAddressBook} className="w-4 h-4" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Liên hệ</h3>
            <div className="space-y-3 text-gray-200">
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                info@digischool.vn
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                +84 814 74 2238 
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
                Ninh Kiều, Cần Thơ, Việt Nam 🇻🇳
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-400/30 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-200">
              &copy; {copyright} DigiSchool. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-200">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Chính sách bảo mật
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
