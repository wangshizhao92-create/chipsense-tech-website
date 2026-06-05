import Image from "next/image";
import Link from "next/link";
import {
  Atom,
  BarChart3,
  Cpu,
  Database,
  FileText,
  Layers,
  LineChart,
  Server,
  Workflow,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const coreValues = [
  "有限元仿真",
  "多物理场耦合",
  "分子动力学",
  "计算资源服务",
  "MEMS 可靠性软件",
];

const serviceLines = [
  {
    model: "C1",
    name: "Abaqus 结构与可靠性仿真",
    shortName: "Abaqus",
    icon: Layers,
    tagline: "面向封装结构、连接层、界面失效、热-力耦合和可靠性评估的有限元分析服务",
    software: "Abaqus / Python / CAE 后处理",
    applications: ["热-力耦合", "翘曲分析", "界面失效", "结构可靠性"],
    outputs: ["有限元模型", "应力应变云图", "参数扫描结果", "仿真分析报告"],
  },
  {
    model: "C2",
    name: "Ansys 热流与结构仿真",
    shortName: "Ansys",
    icon: Cpu,
    tagline: "面向电子设备、功率模块、散热结构和工业样机的热分析、结构分析与工程验证",
    software: "Ansys Mechanical / Fluent / Workbench",
    applications: ["热管理", "流固耦合", "结构强度", "散热优化"],
    outputs: ["热场结果", "流场结果", "结构强度评估", "优化建议"],
  },
  {
    model: "C3",
    name: "COMSOL 多物理场建模",
    shortName: "COMSOL",
    icon: Workflow,
    tagline: "面向传感器、功率器件、封装结构和测试平台的电-热-力-流多物理场耦合建模",
    software: "COMSOL Multiphysics / MATLAB / Java API",
    applications: ["电热耦合", "热阻网络", "传感器响应", "多场参数扫描"],
    outputs: ["多物理场模型", "参数化计算结果", "响应曲线", "工程分析报告"],
  },
  {
    model: "C4",
    name: "LAMMPS 分子动力学计算",
    shortName: "LAMMPS",
    icon: Atom,
    tagline: "面向材料界面、薄膜沉积、缺陷演化和热输运机制的分子动力学模拟与数据分析",
    software: "LAMMPS / OVITO / Python",
    applications: ["界面结合", "薄膜结构", "热导率计算", "原子尺度损伤"],
    outputs: ["原子模型", "轨迹文件", "结构统计", "机理分析图"],
  },
  {
    model: "C5",
    name: "科研计算资源服务",
    shortName: "Computing Resources",
    icon: Server,
    tagline: "面向科研团队和项目计算需求，提供 CPU/GPU 计算资源配置、任务运行、批量计算和结果管理支持",
    software: "CPU 工作站 / GPU 服务器 / Linux / Python",
    applications: ["批量计算", "参数扫描", "GPU 加速", "计算环境配置"],
    outputs: ["计算环境", "任务脚本", "运行结果", "数据归档"],
  },
  {
    model: "C6",
    name: "MEMS 可靠性软件开发",
    shortName: "MEMS Reliability",
    icon: BarChart3,
    tagline: "面向 MEMS 器件、传感器结构和封装可靠性分析，开发建模、寿命评估和数据可视化软件原型",
    software: "Python / Qt / Web / COMSOL API / Abaqus Python",
    applications: ["MEMS 可靠性", "寿命评估", "仿真自动化", "可视化软件"],
    outputs: ["软件原型", "计算流程", "可视化界面", "技术说明文档"],
  },
];

const workflowSteps = [
  {
    title: "需求定义",
    description: "明确研究问题、模型对象、计算资源需求、软件功能和目标输出",
  },
  {
    title: "模型建立",
    description: "建立有限元、多物理场、分子动力学或 MEMS 可靠性分析模型",
  },
  {
    title: "计算部署",
    description: "配置 CPU/GPU 计算环境，开展单工况、批量任务或参数扫描计算",
  },
  {
    title: "数据处理",
    description: "提取场变量、响应曲线、统计指标、失效位置和可靠性评价参数",
  },
  {
    title: "软件封装",
    description: "将重复计算流程封装为脚本、工具链或可视化软件原型",
  },
  {
    title: "报告交付",
    description: "输出模型文件、计算数据、软件说明、图表结果和分析报告",
  },
];

const researchAreas = [
  "先进封装热-力可靠性",
  "功率器件热管理",
  "MEMS 器件可靠性",
  "传感器结构仿真",
  "薄膜与界面材料建模",
  "多孔材料等效热导率",
  "分子动力学界面分析",
  "科研计算资源部署",
  "仿真流程自动化",
  "参数扫描与批量计算",
  "可靠性预测软件开发",
  "科研论文图表处理",
];

const deliverables = [
  {
    title: "模型文件",
    icon: FileText,
    description: "包括 Abaqus、Ansys、COMSOL、LAMMPS 等计算模型与输入文件",
  },
  {
    title: "计算结果",
    icon: Database,
    description: "包括云图、曲线、表格、统计指标和参数扫描结果",
  },
  {
    title: "计算环境",
    icon: Server,
    description: "包括运行脚本、依赖环境、批处理流程和计算资源配置说明",
  },
  {
    title: "软件原型",
    icon: Cpu,
    description: "包括 MEMS 可靠性分析、仿真自动化和数据可视化软件原型",
  },
  {
    title: "分析报告",
    icon: BarChart3,
    description: "包括模型假设、计算条件、结果解释和工程结论",
  },
  {
    title: "论文配图",
    icon: LineChart,
    description: "支持科研论文、项目申报和技术汇报中的高质量图表输出",
  },
];

export default function InformationTechnologyComputingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/service-computing-platform.png"
            alt="科研计算与工程软件服务"
            fill
            priority
            className="object-cover opacity-42"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute right-[-8%] top-[20%] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-14">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-300">
              Computing · Simulation · Software
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              科研计算与工程软件服务
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-100 md:text-xl">
              面向材料、器件、封装、MEMS 与传感器研发的仿真计算平台
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#services"
                className="rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
              >
                查看服务方向
              </Link>

              <Link
                href="/cooperation"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                项目咨询
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Service Lines"
            title="服务方向"
            description="围绕科研计算、工程仿真、计算资源和软件开发，提供从建模计算到结果交付的一体化服务"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {serviceLines.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.model}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={26} strokeWidth={2.2} />
                    </div>

                    <div>
                      <div className="text-sm font-bold text-blue-600">
                        {item.model} · {item.shortName}
                      </div>

                      <h2 className="mt-2 text-2xl font-black leading-9 text-slate-950">
                        {item.name}
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs font-bold text-slate-400">
                      软件与工具
                    </div>
                    <div className="mt-2 text-sm font-bold text-slate-950">
                      {item.software}
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs font-bold text-slate-400">
                      典型方向
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.applications.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs font-bold text-slate-400">
                      交付内容
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.outputs.map((tag) => (
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Workflow
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                从建模计算到软件交付
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                面向科研课题、论文支撑、计算资源部署和工程软件开发，建立规范化的需求定义、模型计算、数据处理和结果交付流程
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-6">
                <div className="text-sm font-black text-blue-700">
                  Research-Oriented Delivery
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  重点服务科研计算和工程验证场景，强调模型可解释、结果可复现、流程可自动化、图表可用于论文和项目汇报
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {workflowSteps.map((item, index) => (
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
    </>
  );
}
