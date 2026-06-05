import Image from "next/image";
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
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
              TMR Current Sensor Modules
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-white md:text-7xl">
              TMR 电流传感模块
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              面向功率电子、工业控制与设备状态监测的非接触式电流检测产品体系。
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
          description="覆盖快速验证、教学开发、工业现场与客户定制等多类应用需求。"
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

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative bg-slate-950 p-8 text-white md:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.22),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(14,165,233,0.16),transparent_35%)]" />

                <div className="relative">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                    Platform Architecture
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                    传感与控制平台
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                    围绕磁传感、信号调理、边缘控制、工业通信和应用软件，构建可扩展的电流检测模组平台。
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {["磁传感", "信号调理", "边缘控制", "工业通信", "应用软件"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-blue-100"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 bg-white p-6 md:p-8">
                {[
                  {
                    index: "01",
                    title: "磁传感单元",
                    desc: "面向非接触式电流检测与状态感知。",
                  },
                  {
                    index: "02",
                    title: "信号调理",
                    desc: "完成信号转换、滤波、放大与阈值判断。",
                  },
                  {
                    index: "03",
                    title: "边缘控制",
                    desc: "实现本地采样、状态判断和参数配置。",
                  },
                  {
                    index: "04",
                    title: "工业接口",
                    desc: "适配 UART、CAN、RS485、告警输出等接口。",
                  },
                  {
                    index: "05",
                    title: "应用软件",
                    desc: "支持参数配置、数据记录和系统集成。",
                  },
                ].map((item) => (
                  <div
                    key={item.index}
                    className="group rounded-[1.35rem] border border-slate-200 bg-slate-50 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-blue-50 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-blue-600 shadow-sm transition group-hover:bg-blue-600 group-hover:text-white">
                        {item.index}
                      </div>

                      <div>
                        <h3 className="text-base font-black text-slate-950">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle
            eyebrow="Representative Products"
            title="代表产品"
            description="以产品实物形态、方案摘要和应用场景为核心，展示可落地的 TMR 电流检测模组。"
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
          description="覆盖功率电子、工业电源、储能变流器、设备状态监测和教学评估场景。"
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
