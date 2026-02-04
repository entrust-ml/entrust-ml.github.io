import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-apple-gray-100 border-t border-apple-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="text-sm text-apple-gray-500">
            <Link href="/" className="hover:text-apple-gray-700 transition-colors">
              Entrust
            </Link>
          </div>
          <p className="text-xs text-apple-gray-400">
            Copyright &copy; {currentYear} Entrust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
