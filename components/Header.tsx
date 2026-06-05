import Link from "next/link";

const navItems = [
  { name: "首页", href: "/" },
  { name: "产品与服务", href: "/products" },
  { name: "项目合作", href: "/cooperation" },
  { name: "关于我们", href: "/about" },
  { name: "联系我们", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-black text-slate-950">
          ChipSense Tech
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/cooperation"
          className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
        >
          合作咨询
        </Link>
      </div>
    </header>
  );
}