import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-12 text-white shadow-xl md:px-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                Cooperation
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                有传感器模组或项目合作需求？
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                欢迎围绕 TMR 电流传感、工业环境监测、传感数据采集与系统集成进行产品定制、样机开发和项目合作交流
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}