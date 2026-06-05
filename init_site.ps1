# init_site.ps1
# 一键生成芯片公司官网第一版页面与组件

New-Item -ItemType Directory -Force -Path "components" | Out-Null
New-Item -ItemType Directory -Force -Path "data" | Out-Null
New-Item -ItemType Directory -Force -Path "app/about" | Out-Null
New-Item -ItemType Directory -Force -Path "app/products/tmr-current-sensor" | Out-Null
New-Item -ItemType Directory -Force -Path "app/products/industrial-environment-monitoring" | Out-Null
New-Item -ItemType Directory -Force -Path "app/products/information-technology-computing" | Out-Null
New-Item -ItemType Directory -Force -Path "app/projects" | Out-Null
New-Item -ItemType Directory -Force -Path "app/contact" | Out-Null

@'
export const products = [
  {
    title: "TMR 电流传感模块",
    href: "/products/tmr-current-sensor",
    description:
      "面向 SiC/GaN 功率电子、电机驱动、储能变流器和工业电源应用，提供高带宽、快速响应、小型化的电流检测能力。",
    tags: ["高带宽", "快速响应", "功率电子", "过流保护"],
  },
  {
    title: "工业环境监测传感器模组",
    href: "/products/industrial-environment-monitoring",
    description:
      "面向矿井、隧道、高温车间、仓储和工业现场，集成温湿度、气体、颗粒物、噪声、热应激等多参数监测能力。",
    tags: ["多参数监测", "低功耗", "工业安全", "边缘预警"],
  },
  {
    title: "信息技术与计算服务",
    href: "/products/information-technology-computing",
    description:
      "面向半导体研发、工业检测和科研团队，提供仿真计算、数据分析、AI 识别、自动化脚本和 Web 系统开发服务。",
    tags: ["仿真计算", "数据分析", "AI 识别", "Web 系统"],
  },
];

export const capabilities = [
  "传感模组设计",
  "嵌入式硬件与数据采集",
  "工业环境监测系统",
  "Python 数据分析与自动化",
  "COMSOL / LAMMPS 科研计算",
  "Web 系统与可视化平台开发",
];

export const applications = [
  "SiC/GaN 功率电子电流检测",
  "电机驱动与工业电源保护",
  "矿井与高温车间环境监测",
  "工业现场安全预警",
  "半导体封装仿真与数据分析",
  "企业官网与项目展示系统建设",
];
'@ | Set-Content -Encoding UTF8 "data/site.ts"

@'
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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-slate-900">
          ChipSense Tech
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          合作咨询
        </Link>
      </div>
    </header>
  );
}
'@ | Set-Content -Encoding UTF8 "components/Navbar.tsx"

@'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-bold text-white">ChipSense Tech</div>
          <p className="mt-3 text-sm leading-6">
            面向功率电子与工业智能感知的传感模组和计算服务提供商。
          </p>
        </div>

        <div>
          <div className="font-semibold text-white">产品与服务</div>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/products/tmr-current-sensor">TMR 电流传感模块</Link>
            <Link href="/products/industrial-environment-monitoring">
              工业环境监测传感器模组
            </Link>
            <Link href="/products/information-technology-computing">
              信息技术与计算服务
            </Link>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white">联系我们</div>
          <p className="mt-3 text-sm leading-6">
            欢迎围绕样机开发、项目申报、企业定制和成果转化进行交流。
          </p>
        </div>
      </div>
    </footer>
  );
}
'@ | Set-Content -Encoding UTF8 "components/Footer.tsx"

@'
type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
'@ | Set-Content -Encoding UTF8 "components/SectionTitle.tsx"

@'
import Link from "next/link";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

export default function ProductCard({
  title,
  description,
  href,
  tags,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl font-bold text-blue-600">
        {title.slice(0, 1)}
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-blue-600">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 text-sm font-semibold text-blue-600">
        查看详情 →
      </div>
    </Link>
  );
}
'@ | Set-Content -Encoding UTF8 "components/ProductCard.tsx"

@'
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-blue-600">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">有项目或样机合作需求？</h2>
          <p className="mt-3 max-w-2xl text-blue-50">
            欢迎围绕传感模组、工业环境监测、信息技术服务、项目申报和成果转化进行交流。
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
        >
          联系我们
        </Link>
      </div>
    </section>
  );
}
'@ | Set-Content -Encoding UTF8 "components/ContactCTA.tsx"

@'
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ChipSense Tech | 传感模组与计算服务",
  description:
    "面向功率电子与工业智能感知的传感模组和计算服务提供商。",
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
'@ | Set-Content -Encoding UTF8 "app/layout.tsx"

@'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

body {
  margin: 0;
}
'@ | Set-Content -Encoding UTF8 "app/globals.css"

@'
import Link from "next/link";
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
              <Link
                href="/products"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                查看产品与服务
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
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
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white"
                >
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
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm font-semibold text-slate-700"
              >
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
            <div
              key={item}
              className="rounded-2xl bg-white p-6 text-sm font-medium text-slate-700 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
'@ | Set-Content -Encoding UTF8 "app/page.tsx"

@'
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import ContactCTA from "@/components/ContactCTA";
import { products } from "@/data/site";

export default function ProductsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Products & Services"
          title="产品与服务"
          description="以传感模组为基础，以工业场景为牵引，以计算服务为支撑，构建面向功率电子、工业安全和科研计算的一体化技术服务体系。"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.href} {...product} />
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
'@ | Set-Content -Encoding UTF8 "app/products/page.tsx"

@'
import ContactCTA from "@/components/ContactCTA";

const specs = [
  ["检测原理", "TMR 磁阻电流检测"],
  ["电流范围", "±50 A / ±100 A / ±200 A，可定制"],
  ["带宽", "500 kHz–1 MHz"],
  ["响应时间", "<1 μs"],
  ["供电电压", "3.3 V / 5 V"],
  ["输出形式", "模拟电压输出，可扩展数字输出"],
  ["应用方向", "电机驱动、储能 PCS、光伏逆变器、充电桩、工业电源"],
];

export default function TmrCurrentSensorPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Product
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          TMR 电流传感模块
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          面向 SiC/GaN 功率电子和工业控制的高带宽、快速响应电流检测模块。
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">核心特性</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              {[
                "高带宽电流检测",
                "快速响应，支持过流保护",
                "非接触式磁场检测",
                "小型化模块设计",
                "支持模拟电压输出",
                "可根据客户需求定制量程和接口",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <h2 className="text-2xl font-bold">开发状态</h2>
            <p className="mt-5 leading-7 text-slate-300">
              当前处于原理样机设计与应用验证阶段，可开展联合开发、样机定制和项目合作。
            </p>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <tbody>
              {specs.map(([key, value]) => (
                <tr key={key} className="border-b border-slate-100 last:border-0">
                  <th className="w-36 bg-slate-50 px-5 py-4 font-semibold text-slate-900">
                    {key}
                  </th>
                  <td className="px-5 py-4 text-slate-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
'@ | Set-Content -Encoding UTF8 "app/products/tmr-current-sensor/page.tsx"

@'
import ContactCTA from "@/components/ContactCTA";

const sensors = [
  ["基础环境", "温度、湿度、气压"],
  ["空气质量", "CO₂、CO、VOC、PM2.5/PM10"],
  ["工业安全", "可燃气体、有害气体、氧气浓度"],
  ["作业环境", "噪声、光照、热指数"],
  ["人员安全", "体表温度、热应激风险、佩戴状态"],
  ["扩展接口", "振动、风速、红外、定位模块"],
];

export default function IndustrialEnvironmentMonitoringPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Product
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          工业环境监测传感器模组
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          面向矿井、车间、仓储和工业现场的多参数环境感知与安全预警模组。
        </p>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <tbody>
              {sensors.map(([key, value]) => (
                <tr key={key} className="border-b border-slate-100 last:border-0">
                  <th className="w-36 bg-slate-50 px-5 py-4 font-semibold text-slate-900">
                    {key}
                  </th>
                  <td className="px-5 py-4 text-slate-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">系统架构</h2>
            <div className="mt-5 space-y-3 text-slate-600">
              {[
                "传感器阵列",
                "信号调理与数据采集",
                "MCU / 边缘计算单元",
                "无线或有线通信模块",
                "云平台 / 本地监控终端",
                "报警与数据分析",
              ].map((item) => (
                <div key={item} className="rounded-xl bg-slate-50 p-3">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <h2 className="text-2xl font-bold">开发状态</h2>
            <p className="mt-5 leading-7 text-slate-300">
              当前处于方案设计与工程样机开发阶段，可根据矿井、车间、仓储和户外作业场景进行定制化开发。
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
'@ | Set-Content -Encoding UTF8 "app/products/industrial-environment-monitoring/page.tsx"

@'
import ContactCTA from "@/components/ContactCTA";

const services = [
  ["科研计算服务", "COMSOL、LAMMPS、Python 参数扫描、数据后处理"],
  ["半导体仿真分析", "封装热-力-电耦合、材料界面、器件热管理"],
  ["AI 数据分析", "缺陷识别、曲线拟合、预测模型、图像处理"],
  ["工业软件开发", "数据清洗工具、自动化报告、测试平台软件"],
  ["Web 系统开发", "企业官网、产品展示系统、项目申报展示页面"],
  ["计算资源服务", "仿真任务管理、批量计算、结果可视化"],
];

export default function InformationTechnologyComputingPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Service
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          信息技术与计算服务
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          面向科研团队、半导体研发和工业检测场景的数据分析、仿真计算与软件系统开发服务。
        </p>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <tbody>
              {services.map(([key, value]) => (
                <tr key={key} className="border-b border-slate-100 last:border-0">
                  <th className="w-40 bg-slate-50 px-5 py-4 font-semibold text-slate-900">
                    {key}
                  </th>
                  <td className="px-5 py-4 text-slate-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-2xl font-bold">交付形式</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              "定制化 Python 脚本",
              "仿真模型与计算流程",
              "数据分析报告",
              "Web 可视化页面",
              "自动化测试软件",
              "项目申报技术图与材料",
              "技术咨询与联合研发方案",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white/10 p-3 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
'@ | Set-Content -Encoding UTF8 "app/products/information-technology-computing/page.tsx"

@'
import SectionTitle from "@/components/SectionTitle";
import ContactCTA from "@/components/ContactCTA";

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Partnership"
          title="项目合作与产业化计划"
          description="围绕传感模组、工业环境监测和信息技术服务，推进样机开发、项目申报、企业合作与成果转化。"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            ["第一阶段：产品概念与样机设计", "完成 TMR 电流传感模块、工业环境监测模组、信息技术服务平台方案设计。"],
            ["第二阶段：工程样机与应用验证", "完成 PCB、嵌入式程序、数据采集系统和初步测试验证。"],
            ["第三阶段：行业场景试点", "面向功率电子、工业安全、科研计算和企业展示场景开展试点应用。"],
            ["第四阶段：产品化与服务化", "形成标准模组、定制服务、技术咨询和项目合作的综合业务模式。"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-2xl font-bold">合作方式</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {["联合研发", "项目申报", "企业定制", "样机验证", "测试服务", "投资合作", "成果转化"].map(
              (item) => (
                <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
'@ | Set-Content -Encoding UTF8 "app/projects/page.tsx"

@'
import SectionTitle from "@/components/SectionTitle";
import ContactCTA from "@/components/ContactCTA";

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionTitle
          eyebrow="About"
          title="关于我们"
          description="我们聚焦功率电子、工业安全、智能制造和科研计算场景，构建传感模组、工业监测终端和信息技术计算服务能力。"
        />
        <div className="mt-12 rounded-3xl bg-white p-8 leading-8 text-slate-600 shadow-sm">
          公司定位为面向功率电子与工业智能感知的传感模组和计算服务提供商，重点布局 TMR 电流传感模块、工业环境监测传感器模组和信息技术与计算服务。当前阶段以样机研发、项目申报、企业定制和成果转化为主要方向。
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
'@ | Set-Content -Encoding UTF8 "app/about/page.tsx"

@'
export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        Contact
      </p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900">联系我们</h1>
      <p className="mt-5 text-lg leading-8 text-slate-600">
        欢迎围绕传感模组、工业环境监测、信息技术服务、项目申报和成果转化进行交流。
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">合作方向</h2>
          <div className="mt-5 space-y-3 text-slate-600">
            {["样机联合开发", "项目申报合作", "企业技术服务", "产品定制开发", "融资与成果转化"].map(
              (item) => (
                <div key={item}>• {item}</div>
              )
            )}
          </div>
        </div>

        <form className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">合作需求</h2>
          <div className="mt-5 space-y-4">
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="姓名 / 单位" />
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="邮箱 / 电话" />
            <textarea className="h-32 w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="请简要描述合作需求" />
            <button type="button" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white">
              提交需求
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            第一版表单为界面占位，后续可接入邮件通知或数据库。
          </p>
        </form>
      </div>
    </section>
  );
}
'@ | Set-Content -Encoding UTF8 "app/contact/page.tsx"

Write-Host "官网第一版代码骨架已生成完成。" -ForegroundColor Green
Write-Host "请执行 npm run dev 并打开 http://localhost:3000 查看。" -ForegroundColor Cyan