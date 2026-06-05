import fs from "fs";
import path from "path";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content, "utf8");
}

write(
  "data/tmrProducts.ts",
`export const tmrCoreValues = [
  "非接触测量",
  "快速响应",
  "工业可靠",
  "接口灵活",
  "可定制开发",
];

export const tmrApplications = [
  "工业电源",
  "光伏逆变器",
  "储能 PCS",
  "电机驱动",
  "充电设备",
  "设备状态监测",
  "快速过流保护",
  "教学与开发评估",
];

export const tmrPlatformBlocks = [
  {
    title: "磁传感单元",
    description: "面向非接触式电流检测与状态感知",
  },
  {
    title: "信号调理",
    description: "完成检测信号转换、滤波与阈值判断",
  },
  {
    title: "边缘控制",
    description: "实现本地采样、状态判断与参数配置",
  },
  {
    title: "工业接口",
    description: "适配 UART、CAN、RS485、告警输出等接口",
  },
  {
    title: "应用软件",
    description: "支持上位机交互、数据记录与系统集成",
  },
];

export const tmrSeries = [
  {
    name: "P 系列",
    slug: "p-series",
    href: "/products/tmr-current-sensor/p-series",
    image: "/images/tmr-catalog/p3-catalog-module.png",
    subtitle: "面向快速验证、教学开发与原型样机的 TMR 电流检测产品线",
    summary: "用于快速构建电流检测、接近检测、过流保护和教学评估原型",
    labels: ["快速验证", "原型样机", "教学开发", "低成本部署"],
    products: [
      {
        model: "P1",
        name: "低速非接触电流监测模块",
        image: "/images/tmr-catalog/p1-catalog-module.png",
        tagline: "用于低速电流状态检测和小型电源监测",
        currentRange: "0–5 A",
        interface: "I²C / UART",
        scheme: "数字式磁传感器 + 低功耗 MCU + 状态输出",
        architecture: ["非接触采样", "本地状态判断", "通信/告警输出"],
        highlights: ["非接触", "低功耗", "小型化"],
        applications: ["电源状态监测", "UPS", "IoT 设备"],
      },
      {
        model: "P2",
        name: "智能门磁 / 接近检测节点",
        image: "/images/tmr-catalog/p2-catalog-module.png",
        tagline: "用于门磁、限位和设备开合状态感知",
        currentRange: "状态检测型",
        interface: "GPIO / 扩展接口",
        scheme: "磁感知单元 + 低功耗控制器 + 可扩展接口",
        architecture: ["磁场/接近检测", "事件触发", "低功耗节点"],
        highlights: ["电池供电", "易部署", "无线扩展"],
        applications: ["门磁", "工业限位", "智能终端"],
      },
      {
        model: "P3",
        name: "高带宽电流检测模块",
        image: "/images/tmr-catalog/p3-catalog-module.png",
        tagline: "用于动态电流采样和高带宽波形分析",
        currentRange: "按结构定制",
        interface: "UART / CAN",
        scheme: "模拟磁传感前端 + 高速采样 + 工业通信",
        architecture: ["模拟前端", "高速采样", "波形输出"],
        highlights: ["高带宽", "高速采样", "波形分析"],
        applications: ["电机驱动", "实验平台", "功率电子"],
      },
      {
        model: "P4",
        name: "快速过流保护模块",
        image: "/images/tmr-catalog/p4-catalog-module.png",
        tagline: "用于快速过流判断、告警输出和保护触发",
        currentRange: "按阈值设定",
        interface: "告警输出 / CAN",
        scheme: "磁传感前端 + 阈值比较 + 快速保护输出",
        architecture: ["电流检测", "阈值判断", "硬件告警"],
        highlights: ["快速响应", "阈值保护", "硬件告警"],
        applications: ["逆变器", "驱动器", "过流保护"],
      },
      {
        model: "P5",
        name: "双模教学 / 开发评估板",
        image: "/images/tmr-catalog/p5-catalog-module.png",
        tagline: "用于教学实验、方案验证和开发评估",
        currentRange: "按实验定制",
        interface: "USB / UART / ADC",
        scheme: "双模传感输入 + 显示交互 + 上位机接口",
        architecture: ["传感评估", "数据显示", "开发验证"],
        highlights: ["双模评估", "课程实验", "方案验证"],
        applications: ["高校教学", "研究平台", "课程实验"],
      },
    ],
  },
  {
    name: "M 系列",
    slug: "m-series",
    href: "/products/tmr-current-sensor/m-series",
    image: "/images/tmr-catalog/m1-catalog-module.png",
    subtitle: "面向工业现场、国产替代与客户定制的 TMR 电流检测产品线",
    summary: "用于工业电源、逆变器、储能、充电设备和设备状态监测",
    labels: ["工业级", "国产替代", "隔离可靠", "客户定制"],
    products: [
      {
        model: "M1",
        name: "工业电源 / 逆变器电流检测模块",
        image: "/images/tmr-catalog/m1-catalog-module.png",
        tagline: "用于工业电源、逆变器和储能变流器电流检测",
        currentRange: "±20 A / ±50 A / ±100 A",
        interface: "RS485 / Modbus",
        scheme: "TMR 采样 + 隔离通信 + 工业接口",
        architecture: ["电流检测", "隔离处理", "工业通信"],
        highlights: ["工业通信", "隔离可靠", "高稳定性"],
        applications: ["光伏逆变器", "工业电源", "储能变流器"],
      },
      {
        model: "M2",
        name: "电机驱动 / 伺服快速保护模块",
        image: "/images/tmr-catalog/m2-catalog-module.png",
        tagline: "用于电机驱动和伺服系统的快速保护",
        currentRange: "±10 A / ±20 A / ±50 A",
        interface: "CAN / FAULT",
        scheme: "电流检测 + 快速保护 + 驱动系统接口",
        architecture: ["高速检测", "快速保护", "状态反馈"],
        highlights: ["快速保护", "高响应", "冗余设计"],
        applications: ["伺服驱动", "变频器", "BLDC 控制器"],
      },
      {
        model: "M3",
        name: "充电 / 储能柜隔离采样节点",
        image: "/images/tmr-catalog/m3-catalog-module.png",
        tagline: "用于充电设备、储能柜和电池系统隔离采样",
        currentRange: "±50 A / ±100 A / ±200 A",
        interface: "CAN / RS485",
        scheme: "隔离采样节点 + 本地告警 + 柜内通信",
        architecture: ["柜内采样", "本地告警", "系统接入"],
        highlights: ["隔离采样", "本地告警", "节点化部署"],
        applications: ["充电桩", "储能柜", "电池簇监测"],
      },
      {
        model: "M4",
        name: "工业设备状态监测节点",
        image: "/images/tmr-catalog/m4-catalog-module.png",
        tagline: "用于风机、水泵、压机和机床运行状态监测",
        currentRange: "0–5 A / 0–10 A / ±20 A",
        interface: "RS485 IO",
        scheme: "电流状态感知 + 边缘判断 + 工业物联网接入",
        architecture: ["状态采样", "边缘判断", "远程监测"],
        highlights: ["低功耗", "边缘判断", "状态告警"],
        applications: ["风机", "水泵", "机床设备"],
      },
      {
        model: "M5",
        name: "开发评估 / 客户定制平台",
        image: "/images/tmr-catalog/m5-catalog-module.png",
        tagline: "用于客户定制、联合开发和多接口评估",
        currentRange: "±5 A–±200 A",
        interface: "USB / CAN / RS485",
        scheme: "多通道评估 + 多接口扩展 + 客户方案适配",
        architecture: ["方案评估", "接口扩展", "快速定制"],
        highlights: ["灵活配置", "多接口", "快速开发"],
        applications: ["研发评估", "客户定制", "联合开发"],
      },
    ],
  },
];
`
);

write(
  "app/products/tmr-current-sensor/page.tsx",
`import Image from "next/image";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import SectionTitle from "@/components/SectionTitle";
import {
  tmrApplications,
  tmrCoreValues,
  tmrPlatformBlocks,
  tmrSeries,
} from "@/data/tmrProducts";

export default function TmrCurrentSensorPage() {
  const selectedProducts = tmrSeries.flatMap((series) =>
    series.products.slice(0, 3).map((product) => ({
      ...product,
      href: series.href,
    }))
  );

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/tmr-catalog/m1-catalog-module.png"
            alt="TMR 电流传感模块"
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
              TMR Current Sensor Platform
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-white md:text-7xl">
              TMR 电流传感模块
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              面向功率电子、工业控制与设备状态监测的非接触式电流检测产品体系
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products/tmr-current-sensor/p-series"
                className="rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
              >
                P 系列
              </Link>
              <Link
                href="/products/tmr-current-sensor/m-series"
                className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                M 系列
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {tmrCoreValues.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Product Families"
          title="两条产品路线"
          description="P 系列面向快速验证与原型开发；M 系列面向工业级应用与国产替代"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {tmrSeries.map((series) => (
            <Link
              key={series.slug}
              href={series.href}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden bg-slate-950">
                <Image
                  src={series.image}
                  alt={series.name}
                  fill
                  className="object-contain bg-slate-50 p-6 transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-7">
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
                    {series.slug === "p-series" ? "Prototype Series" : "Market Series"}
                  </p>
                  <h2 className="mt-2 text-4xl font-black text-white">
                    {series.name}
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-200">
                    {series.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2">
                  {series.labels.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 text-sm font-bold text-blue-600">
                  查看系列产品 →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                Platform Architecture
              </p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                面向产品化的传感与控制平台
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                围绕磁传感、信号调理、边缘控制、工业通信和应用软件，形成可扩展的 TMR 电流检测产品平台
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              {tmrPlatformBlocks.map((item, index) => (
                <div key={item.title} className="relative">
                  <div className="min-h-32 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <div className="text-sm font-black text-blue-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-4 text-sm font-bold leading-6">
                      {item.title}
                    </div>
                    <p className="mt-3 text-xs leading-5 text-slate-300">
                      {item.description}
                    </p>
                  </div>

                  {index < tmrPlatformBlocks.length - 1 && (
                    <div className="hidden md:block absolute right-[-12px] top-1/2 h-[2px] w-6 bg-blue-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle
            eyebrow="Selected Products"
            title="精选产品方向"
            description="以产品图片、方案摘要和应用场景为主，展示可落地的 TMR 电流检测产品方向"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {selectedProducts.map((product) => (
              <Link
                key={product.model}
                href={product.href}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 bg-slate-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-5 transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-black text-white">
                    {product.model}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black leading-8 text-slate-950">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {product.tagline}
                  </p>

                  <div className="mt-5 rounded-2xl bg-blue-50 p-4">
                    <div className="text-xs font-bold text-blue-600">
                      方案摘要
                    </div>
                    <div className="mt-2 text-sm font-bold leading-6 text-slate-950">
                      {product.scheme}
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs font-bold text-slate-500">
                      架构
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.architecture.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs font-bold text-slate-500">
                      核心卖点
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-blue-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Applications"
          title="典型应用"
          description="覆盖功率电子、工业电源、储能变流器、设备状态监测和教学评估场景"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {tmrApplications.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-7 text-lg font-black text-slate-950 shadow-sm"
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
`
);

write(
  "components/TmrSeriesDetail.tsx",
`import Image from "next/image";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";

type TmrProduct = {
  model: string;
  name: string;
  image: string;
  tagline: string;
  currentRange: string;
  interface: string;
  scheme: string;
  architecture: string[];
  highlights: string[];
  applications: string[];
};

type TmrSeries = {
  name: string;
  slug: string;
  href: string;
  image: string;
  subtitle: string;
  summary: string;
  labels: string[];
  products: TmrProduct[];
};

export default function TmrSeriesDetail({ series }: { series: TmrSeries }) {
  const apps = Array.from(
    new Set(series.products.flatMap((item) => item.applications))
  ).slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src={series.image}
            alt={series.name}
            fill
            priority
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <Link
              href="/products/tmr-current-sensor"
              className="text-sm font-bold text-blue-300 hover:text-blue-200"
            >
              ← 返回 TMR 总览
            </Link>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
              {series.slug === "p-series" ? "Prototype Series" : "Market Series"}
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-white md:text-7xl">
              {series.name}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {series.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {series.labels.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Products
            </p>
            <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">
              产品阵列
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-600">
            {series.summary}
          </p>
        </div>

        <div className="space-y-8">
          {series.products.map((product) => (
            <article
              key={product.model}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-2xl"
            >
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[360px] bg-slate-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />
                  <div className="absolute left-6 top-6 rounded-full bg-blue-600 px-4 py-2 text-sm font-black text-white">
                    {product.model}
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl font-black leading-9 text-slate-950">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {product.tagline}
                  </p>

                  <div className="mt-7 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-xs font-bold text-slate-500">
                        电流范围
                      </div>
                      <div className="mt-2 text-sm font-bold leading-6 text-slate-950">
                        {product.currentRange}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-xs font-bold text-slate-500">
                        接口能力
                      </div>
                      <div className="mt-2 text-sm font-bold leading-6 text-slate-950">
                        {product.interface}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-blue-50 p-4">
                      <div className="text-xs font-bold text-blue-600">
                        方案摘要
                      </div>
                      <div className="mt-2 text-sm font-bold leading-6 text-slate-950">
                        {product.scheme}
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-5 md:grid-cols-3">
                    <div>
                      <div className="text-sm font-black text-slate-950">
                        架构
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.architecture.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-black text-slate-950">
                        卖点
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.highlights.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-black text-slate-950">
                        应用
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.applications.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                Applications
              </p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                面向真实工业场景
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                从原型验证到工业现场部署，覆盖多类电流检测与状态感知需求
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {apps.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm font-bold text-slate-100 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
`
);

write(
  "app/products/tmr-current-sensor/p-series/page.tsx",
`import TmrSeriesDetail from "@/components/TmrSeriesDetail";
import { tmrSeries } from "@/data/tmrProducts";

const series = tmrSeries.find((item) => item.slug === "p-series")!;

export default function PSeriesPage() {
  return <TmrSeriesDetail series={series} />;
}
`
);

write(
  "app/products/tmr-current-sensor/m-series/page.tsx",
`import TmrSeriesDetail from "@/components/TmrSeriesDetail";
import { tmrSeries } from "@/data/tmrProducts";

const series = tmrSeries.find((item) => item.slug === "m-series")!;

export default function MSeriesPage() {
  return <TmrSeriesDetail series={series} />;
}
`
);

console.log("TMR 模块已完成完整优化：产品图 + 方案摘要 + 架构标签 + 应用场景");