export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white">
              Blog
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
          </div>
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 