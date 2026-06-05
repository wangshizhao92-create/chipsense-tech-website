import Image from "next/image";
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
            className="object-cover opacity-48"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/94 to-slate-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-14">
          <div className="max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-300">
              ChipSense Tech
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
              Intelligent Sensor Modules
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-100 md:text-xl">
              聚焦功率电子与工业智能感知，打造可定制的传感器模组平台
            </p>

            <p className="mt-4 max-w-5xl text-base leading-8 text-slate-300">
              聚焦 TMR 电流传感、工业环境监测与数据采集系统， 为工业现场提供可集成、可验证、可定制的传感器模组产品
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
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
                合作咨询
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            eyebrow="Products"
            title="产品系列"
            description="围绕电流感知、环境监测与传感数据采集，构建面向工业现场的模组化产品组合"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.href} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Capabilities
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                核心能力
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                面向传感器模组产品化开发，覆盖传感前端、嵌入式采集、工业通信、测试标定与系统集成
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-black text-blue-600">
                  Engineering Delivery
                </div>
                <h3 className="mt-3 text-xl font-black text-slate-950">
                  面向现场应用的工程化交付
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  支持从方案定义、样机验证到客户场景适配，形成可集成、可测试、可扩展的模组化产品方案
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {capabilities.map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-sm font-black text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="text-base font-extrabold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
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
            title="应用场景"
            description="面向功率电子、工业设备、环境监测、水质土壤与芯片测试等场景，提供可集成的传感器模组产品"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {applications.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Cpu;

              return (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>

                    <h3 className="text-base font-black leading-6 text-slate-950">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
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