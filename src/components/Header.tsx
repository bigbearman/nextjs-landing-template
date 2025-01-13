export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md dark:bg-gray-900/80 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
              Logo
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-10">
            <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 