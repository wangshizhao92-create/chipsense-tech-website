export const companyInfo = {
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
    title: "科研计算与工程软件服务",
    href: "/products/information-technology-computing",
    image: "/images/service-computing-platform.png",
    description:
      "面向材料、器件、封装、MEMS 与传感器研发的仿真计算、计算资源和软件开发服务。",
    tags: ["仿真计算", "计算资源", "软件开发"],
    applications: ["Abaqus / Ansys", "COMSOL / LAMMPS", "MEMS 可靠性"],
  },
];

export const capabilities = [
  {
    title: "传感模组设计",
    description: "围绕电流检测、环境感知和工业监测场景开展模块化设计。",
  },
  {
    title: "嵌入式采集",
    description: "支持信号采集、边缘判断、本地状态输出和参数配置。",
  },
  {
    title: "工业接口适配",
    description: "适配 UART、CAN、RS485、USB 和告警输出等常用接口。",
  },
  {
    title: "测试与标定",
    description: "支持功能测试、参数标定、样机验证和结果记录。",
  },
  {
    title: "状态分析",
    description: "支持电流曲线、环境数据和设备状态的采集分析。",
  },
  {
    title: "系统集成",
    description: "支持传感节点、采集终端、通信接口和可视化页面集成。",
  },
];

export const applications = [
  {
    title: "功率电子电流检测",
    description: "用于电流检测、快速保护与运行状态感知。",
    icon: "zap",
  },
  {
    title: "工业电源与逆变器",
    description: "适配工业电源、逆变器与变流系统应用。",
    icon: "cpu",
  },
  {
    title: "储能 PCS 与充电设备",
    description: "面向储能系统、充电设备和电池侧采样。",
    icon: "battery",
  },
  {
    title: "工业环境安全监测",
    description: "支持温湿度、气体、烟雾等环境参数监测。",
    icon: "shield",
  },
  {
    title: "设备状态监测",
    description: "用于风机、水泵、机床等设备运行状态判断。",
    icon: "activity",
  },
  {
    title: "传感器测试与标定",
    description: "支持模组测试、参数标定和样机验证。",
    icon: "settings",
  },
  {
    title: "数据采集与可视化",
    description: "实现数据采集、趋势分析和结果展示。",
    icon: "bar-chart",
  },
  {
    title: "芯片测试与仿真计算服务",
    description: "支持芯片封装、传感模组和工业样机的测试验证与仿真分析。",
    icon: "cpu",
  },
];
