import fs from "fs";
import path from "path";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content, "utf8");
  console.log("updated:", file);
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
      "面向功率电子、工业控制与设备状态监测的非接触式电流检测模组。",
    tags: ["非接触测量", "快速响应", "工业可靠"],
    applications: ["工业电源", "逆变器", "电机驱动"],
  },
  {
    title: "工业环境监测传感器模组",
    href: "/products/industrial-environment-monitoring",
    image: "/images/product-industrial-monitoring.png",
    description:
      "面向车间、仓储、园区和工业现场的多参数环境感知与安全预警模组。",
    tags: ["多参数监测", "边缘预警", "低功耗节点"],
    applications: ["车间", "仓储", "园区"],
  },
  {
    title: "传感数据采集与可视化系统",
    href: "/products/information-technology-computing",
    image: "/images/service-computing-platform.png",
    description:
      "面向传感器模组测试、工业检测和项目样机展示的数据采集与可视化系统。",
    tags: ["数据采集", "状态分析", "可视化系统"],
    applications: ["传感测试", "工业数据", "样机展示"],
  },
];

export const capabilities = [
  {
    title: "传感模组设计",
    description: "围绕 TMR 电流检测、环境感知和工业监测场景开展模块化设计。",
  },
  {
    title: "嵌入式采集",
    description: "支持 MCU 控制、信号采集、边缘判断和本地状态输出。",
  },
  {
    title: "工业接口适配",
    description: "支持 UART、CAN、RS485、告警输出等常用工业接口。",
  },
  {
    title: "测试与标定",
    description: "面向传感器模组开展功能测试、参数标定和样机验证。",
  },
  {
    title: "状态分析",
    description: "支持电流曲线、环境数据和设备状态的采集、分析与展示。",
  },
  {
    title: "系统集成",
    description: "支持传感节点、采集终端、通信接口和可视化页面集成。",
  },
];

export const applications = [
  {
    title: "功率电子电流检测",
    description: "用于电流检测、快速保护与运行状态感知。",
    icon: "zap",
  },
  {
    title: "工业电源与逆变器",
    description: "适配工业电源、逆变器与变流系统应用。",
    icon: "cpu",
  },
  {
    title: "储能 PCS 与充电设备",
    description: "面向储能系统、充电设备和电池侧采样。",
    icon: "battery",
  },
  {
    title: "工业环境安全监测",
    description: "支持温湿度、气体、烟雾等环境参数监测。",
    icon: "shield",
  },
  {
    title: "设备状态监测",
    description: "用于风机、水泵、机床等设备运行状态判断。",
    icon: "activity",
  },
  {
    title: "传感器测试与标定",
    description: "支持模组测试、参数标定和样机验证。",
    icon: "settings",
  },
  {
    title: "数据采集与可视化",
    description: "实现数据采集、趋势分析和结果展示。",
    icon: "bar-chart",
  },
  {
    title: "芯片测试与仿真计算服务",
    description: "支持芯片封装、传感模组和工业样机的测试验证与仿真分析。",
    icon: "cpu",
  },
];
`
);

write(
  "app/page.tsx",
`import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  BarChart3,
  BatteryCharging,
  Cpu,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { applications, capabilities, products } from "@/data/site";

export default function HomePage() {
  const iconMap = {
    zap: Zap,
    cpu: Cpu,
    battery: BatteryCharging,
    shield: ShieldCheck,
    activity: Activity,
    settings: Settings,
    "bar-chart": BarChart3,
  };

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-chip-sensing-ecosystem.png"
            alt="海南芯斟科技有限公司"
            fill
            priority
            className="object-cover opacity-28"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.22em] text-blue-300">
              海南芯斟科技有限公司
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              工业智能感知传感器模组
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              聚焦 TMR 电流传感、工业环境监测与传感数据采集系统，面向功率电子和工业现场提供模组化产品方案。
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
              >
                查看产品系列
              </Link>

              <Link
                href="/cooperation"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                合作入口
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Products"
          title="产品系列"
          description="围绕功率电子、工业安全和智能制造场景，构建电流传感、环境监测与数据采集产品体系。"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.href} {...product} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Capabilities"
            title="核心能力"
            description="围绕传感器模组产品开发，形成从硬件设计、嵌入式采集到测试验证和系统集成的工程能力。"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Applications"
            title="应用场景"
            description="面向功率电子、工业设备、储能充电与芯片测试等场景，提供可集成的传感器模组产品。"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {applications.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Cpu;

              return (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>

                    <h3 className="text-base font-black leading-6 text-slate-950">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
`
);

write(
  "app/products/page.tsx",
`import {
  Activity,
  BarChart3,
  BatteryCharging,
  Cpu,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { applications, capabilities, products } from "@/data/site";

export default function ProductsPage() {
  const iconMap = {
    zap: Zap,
    cpu: Cpu,
    battery: BatteryCharging,
    shield: ShieldCheck,
    activity: Activity,
    settings: Settings,
    "bar-chart": BarChart3,
  };

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb44,transparent_35%),radial-gradient(circle_at_bottom_left,#06b6d433,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            Products
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            产品系列
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            面向功率电子、工业感知与传感数据采集场景，提供传感器模组、监测节点与可视化系统。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Overview"
          title="产品方向"
          description="以传感器模组为核心，面向电流检测、工业环境监测和数据采集展示场景。"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.href} {...product} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Capabilities"
            title="核心能力"
            description="覆盖传感模组设计、嵌入式采集、工业接口适配、测试标定和系统集成。"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Applications"
            title="应用场景"
            description="从功率电子、工业安全到芯片测试和仿真验证，形成可扩展的产品应用体系。"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {applications.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Cpu;

              return (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>

                    <h3 className="text-base font-black leading-6 text-slate-950">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
`
);

console.log("applications and icon cards fixed successfully.");