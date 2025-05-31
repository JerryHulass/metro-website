export default function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-end p-4">
      <a href="/" className="hover:text-teal-400 pr-5">Home</a>
      <a href="/pages/About" className="hover:text-teal-400 pr-5">About</a>
    </nav>
  );
}
