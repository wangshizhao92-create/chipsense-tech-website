import Link from "next/link";

const navItems = [
  { name: "首页", href: "/" },
  { name: "产品与服务", href: "/products" },
  { name: "项目合作", href: "/projects" },
  { name: "关于我们", href: "/about" },
  { name: "联系我们", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <img
            src="/images/chipsense-logo-horizontal-transparent.png"
            alt="ChipSense Tech"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
        >
          合作咨询
        </Link>
      </div>
    </header>
  );
}