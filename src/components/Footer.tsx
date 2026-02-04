import Link from 'next/link';

const footerLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/legal', label: 'Legal' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-apple-gray-100 border-t border-apple-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Breadcrumb / Logo */}
          <div className="flex items-center space-x-2 text-sm text-apple-gray-500">
            <Link href="/" className="hover:text-apple-gray-700 transition-colors">
              Entrust
            </Link>
          </div>

          {/* Links */}
          <nav className="flex items-center space-x-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-apple-gray-500 hover:text-apple-gray-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-apple-gray-200">
          <p className="text-xs text-apple-gray-400 text-center">
            Copyright &copy; {currentYear} Entrust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
