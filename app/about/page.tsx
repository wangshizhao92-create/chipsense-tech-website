import Image from "next/image";
import Link from "next/link";
import {
  Atom,
  Cpu,
  Layers,
  LineChart,
  PackageCheck,
  ShieldCheck,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { companyInfo } from "@/data/site";

const focusCards = [
  {
    title: "TMR 电流传感模块",
    description:
      "面向功率电子、工业电源、逆变器和设备状态监测，开发非接触式电流检测模组。",
    icon: Zap,
  },
  {
    title: "工业环境监测传感器模组",
    description:
      "面向工业现场、水质土壤、空气流速和电化学检测，开发可部署的环境感知模组。",
    icon: ShieldCheck,
  },
  {
    title: "科研计算与工程软件服务",
    description:
      "围绕传感器、MEMS、封装和材料研发，提供仿真计算、计算资源和软件工具支持。",
    icon: Cpu,
  },
];

const capabilityCards = [
  {
    title: "传感模组开发",
    description:
      "围绕电流检测、环境感知、电化学检测和工业监测场景，开展模块化硬件方案设计。",
    icon: Layers,
  },
  {
    title: "嵌入式采集与通信",
    description:
      "支持 MCU 采集、边缘判断、本地状态输出、UART、CAN、RS485、USB 等接口适配。",
    icon: Cpu,
  },
  {
    title: "测试标定与样机验证",
    description:
      "支持传感器模组功能测试、参数标定、样机验证、数据记录和结果分析。",
    icon: LineChart,
  },
  {
    title: "仿真计算与软件开发",
    description:
      "支持 Abaqus、Ansys、COMSOL、LAMMPS 科研计算，以及 MEMS 可靠性软件原型开发。",
    icon: Atom,
  },
];

const productDirections = [
  "TMR 电流检测与快速保护模组",
  "工业环境多参数监测节点",
  "空气流速与通风状态检测模组",
  "重金属与硝酸盐电化学检测模组",
  "传感数据采集与可视化系统",
  "MEMS 可靠性与科研计算软件",
];

const engineeringSteps = [
  {
    title: "需求定义",
    description: "确定检测对象、接口形式、结构约束、应用场景和交付目标。",
  },
  {
    title: "方案设计",
    description: "完成传感器选型、采集电路、嵌入式控制、通信接口和软件架构设计。",
  },
  {
    title: "样机开发",
    description: "完成原理样机、验证板、测试程序、数据采集流程和初步功能验证。",
  },
  {
    title: "测试标定",
    description: "开展功能测试、参数标定、稳定性评估、数据记录和问题迭代。",
  },
  {
    title: "系统集成",
    description: "支持传感节点、采集终端、上位机页面、可视化系统和客户场景适配。",
  },
];

const cooperationItems = [
  {
    title: "采购与集成配套",
    description:
      "围绕项目样机、课程实验、测试验证和小批量应用需求，提供器件选型、模组采购、BOM 配套和系统集成支持。",
    icon: PackageCheck,
  },
  {
    title: "产品定制开发",
    description:
      "根据客户检测对象、接口协议、安装方式和应用场景，开展传感模组、采集节点和可视化系统定制开发。",
    icon: Wrench,
  },
  {
    title: "样机联合开发",
    description:
      "围绕传感器模组、工业环境监测节点、数据采集系统和项目验证样机开展联合开发。",
    icon: Workflow,
  },
  {
    title: "项目申报与成果转化",
    description:
      "面向科研项目、企业技术需求和成果转化场景，提供方案论证、样机验证、测试数据和技术材料支持。",
    icon: LineChart,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-chip-sensing-ecosystem.png"
            alt={companyInfo.name}
            fill
            priority
            className="object-cover opacity-36"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/42" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute right-[-8%] top-[18%] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-14">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-300">
              About ChipSense Tech
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              海南芯斟科技有限公司
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-100 md:text-xl">
              面向功率电子与工业智能感知的传感器模组公司
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              聚焦 TMR 电流传感、工业环境监测、传感数据采集与工程软件开发，提供从传感模组、样机验证到系统集成的产品化解决方案。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
              >
                查看产品与服务
              </Link>

              <Link
                href="/cooperation"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                合作咨询
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Company Positioning
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                以传感器模组为核心的工程化产品公司
              </h2>

              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-black text-blue-600">
                  Engineering-Oriented
                </div>

                <h3 className="mt-3 text-xl font-black text-slate-950">
                  强调可验证、可集成、可定制
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  现阶段以样机研发、项目合作、企业定制、采购配套和成果转化为主要方向，服务科研团队、工业客户和应用验证场景。
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {focusCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={24} strokeWidth={2.2} />
                    </div>

                    <h3 className="mt-5 text-lg font-black leading-7 text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            eyebrow="Capabilities"
            title="核心能力"
            description="围绕传感器模组产品化开发，形成从硬件设计、嵌入式采集、测试标定到仿真软件支持的工程能力。"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {capabilityCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={24} strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Development Directions
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                研发与产品方向
              </h2>

              <div className="mt-8 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-6">
                <div className="text-sm font-black text-blue-700">
                  Product Roadmap
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  以产品样机和应用验证为牵引，逐步形成可展示、可测试、可采购、可定制开发和可合作转化的传感器模组产品组合。
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {productDirections.map((item, index) => (
                <div
                  key={item}
                  className="group rounded-[1.25rem] border border-slate-200 bg-white px-6 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-blue-50 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-black text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="text-base font-black leading-6 text-slate-950">
                      {item}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                Engineering Chain
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                工程化开发流程
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                面向客户场景和科研项目需求，建立传感器模组开发、测试验证和系统集成的工程化流程。
              </p>
            </div>

            <div className="grid gap-3">
              {engineeringSteps.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-center gap-5 rounded-[1.25rem] border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/25 text-sm font-black text-blue-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-base font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Cooperation"
            title="合作方向"
            description="围绕采购配套、产品定制、样机联合开发和项目成果转化，提供从器件选型到系统集成的合作支持。"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {cooperationItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={24} strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}