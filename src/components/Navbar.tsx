import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-white/10 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex h-12 items-center justify-between">
          <Link href="/" className="text-lg font-bold text-white">
            flowgress
          </Link>
          {/* 他のナビゲーションリンクがあれば、ここに追加 */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
