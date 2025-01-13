export default function Features() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-700">
            <h3 className="mb-2 text-xl font-bold dark:text-white">Feature 1</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Description of your amazing feature goes here.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-700">
            <h3 className="mb-2 text-xl font-bold dark:text-white">Feature 2</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Another great feature description here.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-700">
            <h3 className="mb-2 text-xl font-bold dark:text-white">Feature 3</h3>
            <p className="text-gray-500 dark:text-gray-400">
              One more amazing feature description.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 