import Link from "next/link";
import { companyInfo } from "@/data/site";

const footerProducts = [
  {
    name: "TMR 电流传感模块",
    href: "/products/tmr-current-sensor",
  },
  {
    name: "工业环境监测模组",
    href: "/products/industrial-environment-monitoring",
  },
  {
    name: "科研计算与工程软件",
    href: "/products/information-technology-computing",
  },
];

const footerLinks = [
  {
    name: "产品",
    href: "/products",
  },
  {
    name: "合作",
    href: "/cooperation",
  },
  {
    name: "联系",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_1.2fr]">
          <div>
            <h2 className="text-base font-black text-white">
              {companyInfo.name}
            </h2>

            <div className="mt-2 text-xs font-bold text-blue-300">
              {companyInfo.englishName}
            </div>

            <p className="mt-4 max-w-sm text-xs leading-6 text-slate-500">
              <span className="block">聚焦工业智能感知</span>
              <span className="block">提供传感器模组、样机验证与工程化支持</span>
            </p>
          </div>

          <div>
            <h3 className="text-xs font-black text-white">产品与服务</h3>

            <div className="mt-4 grid gap-2 text-xs">
              {footerProducts.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-400 transition hover:text-blue-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black text-white">联系信息</h3>

            <div className="mt-4 grid gap-2 text-xs leading-6 text-slate-400">
              <div>
                <span className="text-slate-300">邮箱：</span>
                {companyInfo.email}
              </div>

              <div>
                <span className="text-slate-300">地址：</span>
                海南省海口市龙华区珠江广场裙楼四层
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 {companyInfo.name}. All rights reserved.</div>

          <div className="flex gap-5">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-blue-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}