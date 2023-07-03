import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className="mb-[7px] flex  items-center justify-evenly gap-1 text-3xl">
      <Link
        href="https://api.whatsapp.com/send?phone=5521966849877"
        target="blank"
      >
        <FaWhatsapp className="text-pink-500 hover:text-pink-400" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/elisa-rosal-2256a4146/"
        target="blank"
      >
        <FaLinkedin className="text-pink-500 hover:text-pink-400 " />
      </Link>

      <Link href="https://www.facebook.com/maria.elisa.5245" target="blank">
        <FaFacebook className="text-pink-500 hover:text-pink-400" />
      </Link>
    </div>
  )
}
