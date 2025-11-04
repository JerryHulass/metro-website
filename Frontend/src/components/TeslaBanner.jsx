export default function TeslaBanner() {
  return (
    <div className="my-6 bg-blue-600 from-gray-900 via-gray-800 to-gray-900 text-white rounded-lg shadow-lg flex items-center justify-center py-2 px-4">
      <img src="/images/tesla_logo.svg" alt="Tesla Logo" className="h-28 w-auto mr-4" />
      <span className="text-xl sm:text-2xl font-bold tracking-wide">
        We proudly service and repair Tesla vehicles!
      </span>
    </div>
  );
}