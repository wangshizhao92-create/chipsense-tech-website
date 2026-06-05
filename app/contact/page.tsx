import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  LineChart,
  Mail,
  MapPin,
  PackageCheck,
  Send,
  Wrench,
  Workflow,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { companyInfo } from "@/data/site";

const contactCards = [
  {
    title: "联系邮箱",
    value: companyInfo.email,
    description: "适用于产品咨询、样机合作、采购配套和项目对接。",
    icon: Mail,
    href: `mailto:${companyInfo.email}`,
  },
  {
    title: "公司地址",
    value: "海南省海口市龙华区珠江广场裙楼四层",
    description: "支持项目合作、样机沟通和企业定制需求对接。",
    icon: MapPin,
    href: "",
  },
];

const cooperationTypes = [
  {
    title: "采购与集成配套",
    description:
      "围绕项目样机、课程实验、测试验证和小批量应用需求，提供器件选型、模组采购、BOM 配套和系统集成支持。",
    icon: PackageCheck,
  },
  {
    title: "产品定制开发",
    description:
      "根据检测对象、接口协议、安装方式和应用场景，开展传感模组、采集节点和可视化系统定制开发。",
    icon: Wrench,
  },
  {
    title: "样机联合开发",
    description:
      "围绕 TMR 电流传感、工业环境监测、电化学检测、数据采集系统和项目验证样机开展联合开发。",
    icon: Workflow,
  },
  {
    title: "项目申报与成果转化",
    description:
      "面向科研项目、企业技术需求和成果转化场景，提供方案论证、样机验证、测试数据和技术材料支持。",
    icon: LineChart,
  },
];

const processSteps = [
  {
    title: "需求沟通",
    description: "明确应用场景、检测对象、接口需求、样机数量和交付目标。",
  },
  {
    title: "方案确认",
    description: "确定器件选型、模组方案、测试方式、开发周期和合作形式。",
  },
  {
    title: "样机验证",
    description: "开展原理样机、测试程序、数据采集流程和初步功能验证。",
  },
  {
    title: "交付支持",
    description: "提供测试结果、技术说明、采购配套、系统集成或项目材料支持。",
  },
];

const requirementItems = [
  "应用场景：如电流检测、环境监测、水质土壤检测、数据采集或 MEMS 可靠性分析",
  "合作类型：采购配套、产品定制、样机联合开发或项目申报支持",
  "技术需求：检测范围、接口形式、供电方式、安装空间、通信协议等",
  "交付需求：样机数量、测试数据、软件页面、报告材料或项目申报材料",
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-chip-sensing-ecosystem.png"
            alt="合作咨询与联系"
            fill
            priority
            className="object-cover opacity-34"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/42" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute right-[-8%] top-[18%] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-6 py-14">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-300">
              Contact & Cooperation
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              合作咨询与联系
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-100 md:text-xl">
              面向采购配套、产品定制、样机联合开发和项目成果转化的合作入口
            </p>

            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
              围绕 TMR 电流传感、工业环境监测、传感数据采集与科研计算软件服务，提供从需求沟通到样机验证的合作支持。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
              >
                <Send size={18} />
                发送邮件
              </Link>

              <Link
                href="/products"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                查看产品与服务
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {contactCards.map((item) => {
              const Icon = item.icon;

              const content = (
                <div className="group h-full rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={24} strokeWidth={2.2} />
                    </div>

                    <div>
                      <h2 className="text-xl font-black text-slate-950">
                        {item.title}
                      </h2>

                      <p className="mt-3 text-base font-bold text-slate-800">
                        {item.value}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );

              return item.href ? (
                <Link key={item.title} href={item.href}>
                  {content}
                </Link>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Cooperation Types"
            title="合作类型"
            description="围绕采购配套、产品定制、样机联合开发和项目成果转化，提供从器件选型到系统集成的合作支持。"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {cooperationTypes.map((item) => {
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
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Process
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                合作流程
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                建议在邮件中尽量说明应用场景、检测对象、接口需求和交付目标，便于快速判断合作方式和技术路线。
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-6">
                <div className="text-sm font-black text-blue-700">
                  Recommended Information
                </div>

                <div className="mt-4 grid gap-3">
                  {requirementItems.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-blue-600"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {processSteps.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-center gap-5 rounded-[1.25rem] border border-slate-200 bg-white px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-black text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                Start a Project
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                有采购、定制或样机合作需求？
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                欢迎围绕传感器模组、工业环境监测、数据采集系统、科研计算和工程软件服务进行合作交流。
              </p>
            </div>

            <Link
              href={`mailto:${companyInfo.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              <Mail size={18} />
              {companyInfo.email}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}