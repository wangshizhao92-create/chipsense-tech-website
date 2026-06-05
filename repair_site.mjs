import fs from "fs";

function write(file, content) {
  fs.writeFileSync(file, content, "utf8");
}

write(
  "app/layout.tsx",
`import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ChipSense Tech | 传感模组与计算服务",
  description: "面向功率电子与工业智能感知的传感模组和计算服务提供商。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
`
);

write(
  "app/page.tsx",
`import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import ContactCTA from "@/components/ContactCTA";
import { applications, capabilities, products } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb33,transparent_35%),radial-gradient(circle_at_bottom_left,#06b6d433,transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-100">
              Sensor Modules · Industrial Monitoring · Computing Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              面向功率电子与工业智能感知的传感模组和计算服务
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              聚焦 TMR 电流传感、工业环境监测与信息技术计算服务，提供从传感模组、数据采集、算法分析到系统集成的一体化解决方案。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                查看产品与服务
              </Link>
              <Link href="/projects" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                项目合作咨询
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="grid gap-4">
              {[
                "TMR 电流传感模块",
                "工业环境监测模组",
                "数据采集与边缘计算",
                "云端分析与可视化",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Products & Services"
          title="产品与服务"
          description="围绕功率电子、工业安全、智能制造和科研计算场景，提供高性能传感模组、工业环境监测终端和信息技术计算服务。"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.href} {...product} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Capabilities"
            title="技术能力"
            description="以硬件传感、嵌入式系统、数据分析、仿真计算和 Web 可视化为基础，支撑产品开发、项目申报与企业技术服务。"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Applications"
          title="典型应用场景"
          description="服务于功率电子、工业安全、半导体研发、科研计算和企业数字化展示等场景。"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {applications.map((item) => (
            <div key={item} className="rounded-2xl bg-white p-6 text-sm font-medium text-slate-700 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
`
);

console.log("layout.tsx 和 page.tsx 已修复。");