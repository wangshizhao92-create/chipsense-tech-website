import SectionTitle from "@/components/SectionTitle";
import ContactCTA from "@/components/ContactCTA";

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Partnership"
          title="项目合作与产业化计划"
          description="围绕传感模组、工业环境监测和信息技术服务，推进样机开发、项目申报、企业合作与成果转化。"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            ["第一阶段：产品概念与样机设计", "完成 TMR 电流传感模块、工业环境监测模组、信息技术服务平台方案设计。"],
            ["第二阶段：工程样机与应用验证", "完成 PCB、嵌入式程序、数据采集系统和初步测试验证。"],
            ["第三阶段：行业场景试点", "面向功率电子、工业安全、科研计算和企业展示场景开展试点应用。"],
            ["第四阶段：产品化与服务化", "形成标准模组、定制服务、技术咨询和项目合作的综合业务模式。"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-2xl font-bold">合作方式</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {["联合研发", "项目申报", "企业定制", "样机验证", "测试服务", "投资合作", "成果转化"].map(
              (item) => (
                <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
