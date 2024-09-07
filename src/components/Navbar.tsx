import Link from "next/link";
import { Button } from "~/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            flowgress
          </Link>
          <div className="flex space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">ホーム</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">概要</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
