import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "海南芯斟科技有限公司 | ChipSense Tech",
    template: "%s | 海南芯斟科技有限公司",
  },
  
  description:
    "海南芯斟科技有限公司是一家面向功率电子与工业智能感知的传感器模组公司，提供 TMR 电流传感模块、工业环境监测传感器模组、科研计算与工程软件服务",
  keywords: [
    "海南芯斟科技有限公司",
    "ChipSense Tech",
    "TMR 电流传感模块",
    "工业环境监测传感器",
    "电化学检测",
    "传感数据采集",
    "科研计算",
    "工程软件服务",
    "MEMS 可靠性",
    "Abaqus 仿真",
    "Ansys 仿真",
    "COMSOL 多物理场",
    "LAMMPS 分子动力学",
  ],
  authors: [{ name: "海南芯斟科技有限公司" }],
  creator: "海南芯斟科技有限公司",
  publisher: "海南芯斟科技有限公司",
  verification: {
    google: "NGUmBX3xKLVcQqK3b-Z2IU1xFx_mR0Sqtc-HdfpX_K4",
    other: {
     "msvalidate.01": "0C8849E3DE3D973B66796AE0BE4D1BFF",
     "baidu-site-verification": "codeva-K461245gLD",
  },
  },
  openGraph: {
    title: "海南芯斟科技有限公司 | ChipSense Tech",
    description:
      "面向功率电子与工业智能感知的传感器模组公司，提供 TMR 电流传感模块、工业环境监测传感器模组、科研计算与工程软件服务",
    type: "website",
    locale: "zh_CN",
    siteName: "ChipSense Tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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