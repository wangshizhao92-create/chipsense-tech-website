import fs from "fs";
import path from "path";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content, "utf8");
  console.log("updated:", file);
}

write(
  "data/site.ts",
`export const companyInfo = {
  name: "海南芯斟科技有限公司",
  englishName: "ChipSense Tech",
  slogan: "面向功率电子与工业智能感知的传感器模组公司",
  creditCode: "91460000MAK5XJLE88",
  address: "海南省海口市龙华区滨海街道龙昆北路2号珠江广场裙楼第四层",
  email: "sz_wang163@163.com",
};

export const products = [
  {
    title: "TMR 电流传感模块",
    href: "/products/tmr-current-sensor",
    image: "/images/tmr-catalog/m1-catalog-module.png",
    description:
      "面向功率电子、工业控制与设备状态监测的非接触式电流检测模组。",
    tags: ["非接触测量", "快速响应", "工业可靠"],
    applications: ["工业电源", "逆变器", "电机驱动"],
  },
  {
    title: "工业环境监测传感器模组",
    href: "/products/industrial-environment-monitoring",
    image: "/images/product-industrial-monitoring.png",
    description:
      "面向车间、仓储、园区和工业现场的多参数环境感知与安全预警模组。",
    tags: ["多参数监测", "边缘预警", "低功耗节点"],
    applications: ["车间", "仓储", "园区"],
  },
  {
    title: "传感数据采集与可视化系统",
    href: "/products/information-technology-computing",
    image: "/images/service-computing-platform.png",
    description:
      "面向传感器模组测试、工业检测和项目样机展示的数据采集与可视化系统。",
    tags: ["数据采集", "状态分析", "可视化系统"],
    applications: ["传感测试", "工业数据", "样机展示"],
  },
];

export const capabilities = [
  {
    title: "传感模组设计",
    description: "围绕电流检测、环境感知和工业监测场景进行模块化设计。",
  },
  {
    title: "嵌入式与数据采集",
    description: "支持 MCU、通信接口、数据采集与边缘状态判断。",
  },
  {
    title: "工业接口适配",
    description: "支持 UART、CAN、RS485、告警输出等常用工业接口。",
  },
  {
    title: "测试与标定",
    description: "面向传感器模组开展功能测试、参数标定和样机验证。",
  },
  {
    title: "状态分析",
    description: "支持曲线分析、状态识别、异常预警和结果展示。",
  },
  {
    title: "系统集成",
    description: "支持传感节点、采集终端、通信接口和可视化页面集成。",
  },
];

export const applications = [
  "功率电子电流检测",
  "工业电源与逆变器",
  "储能 PCS 与充电设备",
  "工业环境安全监测",
  "设备状态监测",
  "传感器测试与标定",
  "数据采集与可视化",
  "项目样机展示",
];
`
);

write(
  "components/Footer.tsx",
`import Link from "next/link";
import { companyInfo } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr_1.2fr]">
          <div>
            <div className="text-xl font-black tracking-tight text-slate-950">
              {companyInfo.name}
            </div>
            <div className="mt-2 text-sm font-bold text-blue-600">
              {companyInfo.englishName}
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              {companyInfo.slogan}
            </p>
          </div>

          <div>
            <div className="text-sm font-black text-slate-950">产品系列</div>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <Link href="/products/tmr-current-sensor" className="hover:text-blue-600">
                TMR 电流传感模块
              </Link>
              <Link href="/products/industrial-environment-monitoring" className="hover:text-blue-600">
                工业环境监测传感器模组
              </Link>
              <Link href="/products/information-technology-computing" className="hover:text-blue-600">
                传感数据采集与可视化系统
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-black text-slate-950">公司信息</div>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>统一社会信用代码：{companyInfo.creditCode}</p>
              <p>注册地址：{companyInfo.address}</p>
              <p>联系方式：{companyInfo.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
`
);

write(
  "app/layout.tsx",
`import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "海南芯斟科技有限公司",
  description: "面向功率电子与工业智能感知的传感器模组公司",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
`
);

console.log("company footer patch completed");