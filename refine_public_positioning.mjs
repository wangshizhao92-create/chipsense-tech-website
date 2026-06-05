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
  "data/site.ts",
`export const companyInfo = {
  name: "海南芯斟科技有限公司",
  englishName: "ChipSense Tech",
  slogan: "面向功率电子与工业智能感知的传感器模组公司",
  creditCode: "91460000MAK5XJLE88",
  address: "海南省海口市龙华区滨海街道龙昆北路2号珠江广场裙楼第四层",
  email: "sz_wang163@163.com",
};

export const products = [
  {
    title: "TMR 电流传感模块",
    href: "/products/tmr-current-sensor",
    image: "/images/tmr-catalog/m1-catalog-module.png",
    description:
      "面向功率电子、工业控制与设备状态监测的非接触式电流检测模组",
    tags: ["非接触测量", "快速响应", "工业可靠"],
    applications: ["工业电源", "逆变器", "电机驱动"],
  },
  {
    title: "工业环境监测传感器模组",
    href: "/products/industrial-environment-monitoring",
    image: "/images/product-industrial-monitoring.png",
    description:
      "面向车间、仓储、园区和工业现场的多参数环境感知与安全预警模组",
    tags: ["多参数监测", "边缘预警", "低功耗节点"],
    applications: ["车间", "仓储", "园区"],
  },
  {
    title: "传感数据采集与可视化系统",
    href: "/products/information-technology-computing",
    image: "/images/service-computing-platform.png",
    description:
      "面向传感器模组测试、工业检测和项目样机展示的数据采集与可视化系统",
    tags: ["数据采集", "状态分析", "可视化系统"],
    applications: ["传感测试", "工业数据", "样机展示"],
  },
];

export const capabilities = [
  {
    title: "传感模组设计",
    description: "围绕电流检测、环境感知和工业监测场景进行模块化设计",
  },
  {
    title: "嵌入式与数据采集",
    description: "支持 MCU、通信接口、数据采集与边缘状态判断",
  },
  {
    title: "工业接口适配",
    description: "支持 UART、CAN、RS485、告警输出等常用工业接口",
  },
  {
    title: "测试与标定",
    description: "面向传感器模组开展功能测试、参数标定和样机验证",
  },
  {
    title: "状态分析",
    description: "支持曲线分析、状态识别、异常预警和结果展示",
  },
  {
    title: "系统集成",
    description: "支持传感节点、采集终端、通信接口和可视化页面集成",
  },
];

export const applications = [
  "功率电子电流检测",
  "工业电源与逆变器",
  "储能 PCS 与充电设备",
  "工业环境安全监测",
  "设备状态监测",
  "传感器测试与标定",
  "数据采集与可视化",
  "项目样机展示",
];
`
);

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
    description: "适配 UART、CAN、RS485 与告警输出接口",
  },
  {
    title: "应用软件",
    description: "支持参数配置、数据记录与系统集成",
  },
];

export const tmrSeries = [
  {
    name: "P 系列",
    slug: "p-series",
    href: "/products/tmr-current-sensor/p-series",
    image: "/images/tmr-catalog/p3-catalog-module.png",
    subtitle: "面向快速验证、教学开发与原型样机的 TMR 电流检测产品系列",
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
        architecture: ["非接触采样", "本地判断", "通信输出"],
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
        architecture: ["磁场检测", "事件触发", "低功耗节点"],
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
    subtitle: "面向工业现场、设备控制与系统集成的 TMR 电流检测产品系列",
    summary: "用于工业电源、逆变器、储能、充电设备和设备状态监测",
    labels: ["工业现场", "高可靠", "隔离通信", "客户定制"],
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
  "components/Footer.tsx",
`import Link from "next/link";
import { companyInfo } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr_1.2fr]">
          <div>
            <div className="text-xl font-black tracking-tight text-slate-950">
              {companyInfo.name}
            </div>
            <div className="mt-2 text-sm font-bold text-blue-600">
              {companyInfo.englishName}
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              {companyInfo.slogan}
            </p>
          </div>

          <div>
            <div className="text-sm font-black text-slate-950">产品系列</div>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <Link href="/products/tmr-current-sensor" className="hover:text-blue-600">
                TMR 电流传感模块
              </Link>
              <Link href="/products/industrial-environment-monitoring" className="hover:text-blue-600">
                工业环境监测传感器模组
              </Link>
              <Link href="/products/information-technology-computing" className="hover:text-blue-600">
                传感数据采集与可视化系统
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-black text-slate-950">公司信息</div>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>统一社会信用代码：{companyInfo.creditCode}</p>
              <p>注册地址：{companyInfo.address}</p>
              <p>联系方式：{companyInfo.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
`
);

write(
  "components/ContactCTA.tsx",
`import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-2xl font-black text-slate-950">
              获取产品资料与样机咨询
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              可围绕电流范围、接口形式、安装结构和应用场景进行产品沟通
            </p>
          </div>

          <Link
            href="/cooperation"
            className="rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
          >
            合作入口
          </Link>
        </div>
      </div>
    </section>
  );
}
`
);

write(
  "app/page.tsx",
`import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { applications, capabilities, products } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-chip-sensing-ecosystem.png"
            alt="传感器模组与工业智能感知"
            fill
            priority
            className="object-cover opacity-42"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/82 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
              Sensor Modules for Industrial Intelligence
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              面向功率电子与工业智能感知的传感器模组公司
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              聚焦 TMR 电流传感、工业环境监测与传感数据采集系统，提供从传感模组、数据采集到系统集成的产品化解决方案
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
              >
                查看产品系列
              </Link>
              <Link
                href="/cooperation"
                className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                合作入口
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Products"
          title="产品系列"
          description="围绕功率电子、工业安全和智能制造场景，构建电流传感、环境监测与数据采集产品体系"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.href} {...product} />
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                Capabilities
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                从传感模组到系统集成
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                以传感器模组、嵌入式采集、工业接口、数据分析和可视化系统为核心，支撑工业现场与研发验证场景
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {capabilities.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur"
                >
                  <div className="text-sm font-black text-blue-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-base font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Applications"
          title="典型应用场景"
          description="服务于功率电子、工业安全、智能制造、传感器测试与项目样机展示等场景"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {applications.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-7 text-lg font-black text-slate-950 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
`
);

write(
  "app/products/tmr-current-sensor/page.tsx",
`import Image from "next/image";
import Link from "next/link";
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
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
              TMR Current Sensor Modules
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
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
                P 系列产品
              </Link>
              <Link
                href="/products/tmr-current-sensor/m-series"
                className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                M 系列产品
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
          eyebrow="Product Series"
          title="产品系列"
          description="覆盖快速验证、教学开发、工业现场与客户定制等多类应用需求"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {tmrSeries.map((series) => (
            <Link
              key={series.slug}
              href={series.href}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden bg-slate-50">
                <Image
                  src={series.image}
                  alt={series.name}
                  fill
                  className="object-contain p-6 transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-7">
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
                    {series.slug === "p-series" ? "Prototype Series" : "Industrial Series"}
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
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                Platform Architecture
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                模块化传感与控制平台
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                围绕磁传感、信号调理、边缘控制、工业通信和应用软件，构建可扩展的电流检测模组平台
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tmrPlatformBlocks.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur"
                >
                  <div className="text-sm font-black text-blue-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-4 text-base font-black text-white">
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle
            eyebrow="Representative Products"
            title="代表产品"
            description="以产品实物形态、方案摘要和应用场景为核心，展示可落地的 TMR 电流检测模组"
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

                  <div className="mt-5 flex flex-wrap gap-2">
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
    </>
  );
}
`
);

write(
  "app/cooperation/page.tsx",
`import Link from "next/link";
import { companyInfo } from "@/data/site";

const cooperationItems = [
  {
    title: "样机联合开发",
    description: "围绕电流检测、环境监测和数据采集场景，开展传感器模组样机开发",
  },
  {
    title: "产品定制",
    description: "根据电流范围、接口形式、安装结构和应用场景进行模组定制",
  },
  {
    title: "测试与验证",
    description: "支持传感器模组功能验证、参数标定、数据采集与演示系统搭建",
  },
  {
    title: "项目联合申报",
    description: "面向工业感知、智能制造和电子信息方向，开展项目方案设计与联合申报",
  },
];

export default function CooperationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb44,transparent_35%),radial-gradient(circle_at_bottom_left,#06b6d433,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            Cooperation
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            合作入口
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            面向传感器模组开发、产品定制、测试验证和项目联合申报，提供灵活的合作方式
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {cooperationItems.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-sm font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-6 text-2xl font-black text-slate-950">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-black">联系合作</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                联系方式：{companyInfo.email}
              </p>
            </div>

            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
`
);

console.log("Final public site refinement completed.");