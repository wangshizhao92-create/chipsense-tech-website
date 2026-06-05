import Link from "next/link";

const cooperationItems = [
  {
    title: "样机联合开发",
    description: "围绕电流检测、环境监测和数据采集场景，开展传感器模组样机开发。",
  },
  {
    title: "产品定制",
    description: "根据电流范围、接口形式、安装结构和应用场景进行模组定制。",
  },
  {
    title: "项目联合申报",
    description: "面向工业感知、智能制造和电子信息方向，开展项目方案设计与联合申报。",
  },
  {
    title: "测试与验证",
    description: "支持传感器模组功能验证、参数标定、数据采集与演示系统搭建。",
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
            面向传感器模组开发、产品定制、测试验证和项目联合申报，提供灵活的合作方式。
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
                可围绕具体应用场景、模组参数、接口需求和样机目标进行进一步沟通。
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
