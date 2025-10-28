import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative z-10 text-white py-6 sm:py-8 md:py-10"
      style={{
        background: "linear-gradient(135deg, #092532 0%, #174042 100%)",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/PecanRidge/Pecan Ridge logo design-01.jpg"
          alt="Pecan Ridge BG"
          fill
          priority={false}
          className="object-cover object-center brightness-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092532]/90 via-[#174042]/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-10">
          {/* Brand/Logo */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <Image
              src="/PecanRidge/Pecan Ridge-04.png"
              alt="Pecan Ridge RV Park Logo"
              width={300}
              height={300}
              className="w-36 sm:w-44 md:w-48 lg:w-52 object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 sm:gap-y-3 text-sm sm:text-base font-medium w-full md:w-auto">
            <Link
              href="https://rentalportal01.netlify.app/auth/signin"
              className="text-slate-100 hover:text-emerald-300 transition-colors whitespace-nowrap"
            >
              Resident Portal
            </Link>

            {/* <Link
              href="/privacy-policy"
              className="text-slate-100 hover:text-emerald-300 transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </Link> */}
          </nav>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-4 sm:pt-5 md:pt-6 text-center">
          <p className="text-slate-200 text-xs sm:text-sm tracking-wide px-4">
            &copy; 2025 Pecan Ridge RV Park. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
