import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const coreValues = [
  "多参数感知",
  "电化学检测",
  "低功耗节点",
  "工业接口",
  "现场部署",
];

const productLines = [
  {
    model: "E1",
    name: "多参数环境监测节点",
    shortName: "多参数节点",
    image: "/images/env-catalog/multi-parameter-node.png",
    tagline: "面向工业现场、仓储园区和设备机柜的多参数环境感知模组。",
    scheme: "环境传感单元 + 低功耗 MCU + 本地采集与通信接口",
    parameters: ["温湿度", "气压", "光照", "气体"],
    interface: "I²C / UART / RS485",
    applications: ["工业厂房", "仓储园区", "设备机柜"],
    architecture: ["环境感知", "边缘采集", "通信输出"],
  },
  {
    model: "E2",
    name: "空气流速检测模组",
    shortName: "空气流速",
    image: "/images/env-catalog/airflow-sensor-module.png",
    tagline: "用于风道、机柜、数据中心和空气过滤系统的空气流速监测。",
    scheme: "MEMS 热式流速传感器 + 数字采集 + 风道状态判断",
    parameters: ["空气流速", "风道状态", "通风异常"],
    interface: "I²C / 数字输出",
    applications: ["数据中心", "HVAC", "空气过滤"],
    architecture: ["流速检测", "数字输出", "状态判断"],
  },
  {
    model: "E3",
    name: "重金属检测传感器模组",
    shortName: "重金属检测",
    image: "/images/env-catalog/heavy-metal-sensor-module.png",
    tagline: "面向水质、土壤浸提液和工业排放场景的重金属离子检测。",
    scheme: "电化学电极 + 微弱信号采集 + 离子浓度分析",
    parameters: ["Pb²⁺", "Cd²⁺", "重金属筛查"],
    interface: "电化学接口 / RS485 / USB",
    applications: ["水质监测", "土壤检测", "工业排放"],
    architecture: ["电极检测", "信号采集", "浓度分析"],
  },
  {
    model: "E4",
    name: "硝酸盐检测传感器模组",
    shortName: "硝酸盐检测",
    image: "/images/env-catalog/nitrate-sensor-module.png",
    tagline: "用于饮用水、地表水、农业水体和土壤环境中的硝酸盐检测。",
    scheme: "硝酸盐敏感电极 + 数字采集模块 + 浓度换算算法",
    parameters: ["NO₃⁻", "水质硝酸盐", "土壤浸提液"],
    interface: "电化学接口 / UART / RS485",
    applications: ["水质监测", "农业灌溉", "土壤检测"],
    architecture: ["离子识别", "信号采集", "浓度输出"],
  },
];

const platformBlocks = [
  {
    title: "传感单元",
    description: "集成环境参数、空气流速和电化学检测传感单元。",
  },
  {
    title: "信号调理",
    description: "完成微弱信号调理、滤波、放大与数字化采集。",
  },
  {
    title: "边缘采集",
    description: "实现本地采样、状态判断、异常识别和参数配置。",
  },
  {
    title: "通信接口",
    description: "适配 I²C、UART、RS485、USB 与无线通信接口。",
  },
  {
    title: "数据平台",
    description: "支持数据记录、趋势分析、预警输出和系统集成。",
  },
];

const features = [
  {
    title: "环境参数集成",
    description: "支持温湿度、气压、光照、气体和空气流速等多类参数接入。",
  },
  {
    title: "电化学检测扩展",
    description: "重点聚焦重金属离子和硝酸盐检测，适合水质与土壤场景。",
  },
  {
    title: "低功耗部署",
    description: "支持周期采样、边缘判断和电池供电等现场部署方式。",
  },
  {
    title: "数据采集与标定",
    description: "支持采集、校准、曲线分析、结果导出和上位机系统接入。",
  },
];

const applications = [
  "工业厂房环境监测",
  "仓储与园区安全监测",
  "数据中心与机柜风道监测",
  "水质重金属检测",
  "硝酸盐与农业环境检测",
  "土壤浸提液检测",
  "设备状态与通风异常判断",
  "传感器测试与标定",
];

export default function IndustrialEnvironmentMonitoringPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/env-catalog/env-hero-system.png"
            alt="工业环境监测传感器模组"
            fill
            priority
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
              Industrial Environment Monitoring
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              工业环境监测传感器模组
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              面向工业现场、水质土壤监测和设备环境感知，提供多参数环境监测、空气流速检测、重金属检测和硝酸盐检测模组。
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#products"
                className="rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
              >
                查看产品方向
              </Link>

              <Link
                href="/cooperation"
                className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                合作咨询
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {coreValues.map((item) => (
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

      <section id="products" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
          <SectionTitle
            eyebrow="Product Lines"
            title="产品方向"
            description="围绕工业环境监测和电化学检测，形成可集成、可部署、可定制的环境传感模组产品线。"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {productLines.map((item) => (
              <div
                key={item.model}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[300px] bg-slate-50">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-6 transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-black text-white">
                      {item.model}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="text-sm font-bold text-blue-600">
                      {item.shortName}
                    </div>

                    <h2 className="mt-2 text-2xl font-black leading-9 text-slate-950">
                      {item.name}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.tagline}
                    </p>

                    <div className="mt-5 rounded-2xl bg-blue-50 p-4">
                      <div className="text-xs font-bold text-blue-600">
                        方案摘要
                      </div>
                      <div className="mt-2 text-sm font-bold leading-6 text-slate-950">
                        {item.scheme}
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="text-xs font-bold text-slate-400">
                        检测对象
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.parameters.map((param) => (
                          <span
                            key={param}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                          >
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 text-sm">
                      <span className="font-bold text-slate-950">
                        接口形式：
                      </span>
                      <span className="text-slate-600">{item.interface}</span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.architecture.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white shadow-xl shadow-slate-300/30">
            <div className="relative">
              <div className="absolute inset-0 opacity-25">
                <div className="absolute left-[-12%] top-[-35%] h-80 w-80 rounded-full bg-blue-600 blur-3xl" />
                <div className="absolute bottom-[-35%] right-[-10%] h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
              </div>

              <div className="relative grid gap-10 px-8 py-10 md:px-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                    Platform Architecture
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                    模块化环境感知平台
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                    围绕环境传感、电化学检测、边缘采集、通信接口和数据平台，构建可扩展的工业环境监测传感器模组体系。
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {["环境传感", "电化学检测", "边缘采集", "工业通信"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-blue-100 backdrop-blur"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-4 backdrop-blur">
                  <div className="grid gap-2.5">
                    {platformBlocks.map((item, index) => (
                      <div
                        key={item.title}
                        className="group flex items-center gap-4 rounded-[1rem] border border-white/10 bg-white/[0.08] px-5 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.14]"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/25 text-xs font-black text-blue-200 ring-1 ring-blue-400/20">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="min-w-0">
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
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            eyebrow="Features"
            title="产品特点"
            description="面向现场部署和系统集成需求，兼顾环境参数感知、电化学检测、边缘采集和数据输出。"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-sm">
              <Image
                src="/images/env-catalog/monitoring-terminal.png"
                alt="工业环境监测传感器模组系统"
                fill
                className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-200">
                  Monitoring System
                </p>

                <h3 className="mt-3 text-3xl font-black text-white">
                  从传感模组到现场监测终端
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200">
                  支持环境参数采集、空气流速监测、电化学检测和数据可视化接入，适合工业现场与科研测试场景。
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-sm font-black text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
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
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            eyebrow="Applications"
            title="典型应用"
            description="覆盖工业环境、水质土壤、空气流速、设备状态和传感器测试等场景。"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {applications.map((item) => (
              <div
                key={item}
                className="group rounded-[1.25rem] border border-slate-200 bg-white px-6 py-5 text-base font-black text-slate-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700 hover:shadow-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
