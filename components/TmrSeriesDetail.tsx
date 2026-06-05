import Image from "next/image";
import Link from "next/link";

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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <Link
              href="/products/tmr-current-sensor"
              className="text-sm font-bold text-blue-300 hover:text-blue-200"
            >
              ← 返回 TMR 总览
            </Link>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
              {series.slug === "p-series" ? "Prototype Series" : "Industrial Series"}
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
              Product Lineup
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

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] bg-slate-50 px-6 py-14 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                  Applications
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                  应用场景
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                  面向电流检测、设备状态、过流保护和现场监测等场景，支持样机验证与系统集成。
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {apps.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-slate-200 bg-white px-6 py-5 text-base font-black text-slate-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700 hover:shadow-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
