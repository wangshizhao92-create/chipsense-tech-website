# ChipSense Tech 企业官网

海南芯斟科技有限公司（ChipSense Tech）企业官网项目。

本项目基于 Next.js + App Router + Tailwind CSS 开发，主要用于展示公司定位、产品与服务、项目合作、关于我们和联系方式等内容。

当前线上测试地址：

```txt
https://chipsense-tech-website.vercel.app
````

---

## 1. 项目信息

```txt
项目名称：ChipSense Tech 企业官网
公司名称：海南芯斟科技有限公司 / ChipSense Tech
技术栈：Next.js + TypeScript + Tailwind CSS
部署平台：Vercel / 腾讯云 / 其他云服务器
代码仓库：https://github.com/wangshizhao92-create/chipsense-tech-website.git
```

主要模块：

```txt
首页
产品与服务
TMR 电流传感模块
P 系列产品
M 系列产品
工业环境监测模组
科研计算与工程软件服务
项目合作
关于我们
联系我们
robots.txt
sitemap.xml
搜索引擎验证文件
```

---

## 2. 本地环境要求

建议环境：

```txt
Node.js：20.x 或以上
npm：随 Node.js 安装
Git：Windows 推荐安装 Git for Windows
编辑器：VS Code
系统：Windows 10 / Windows 11
```

检查 Node.js 是否安装成功：

```powershell
node -v
npm -v
```

检查 Git 是否可用：

```powershell
git --version
```

如果 PowerShell 中无法直接使用 `git`，可使用完整路径：

```powershell
& "C:\Program Files\Git\cmd\git.exe" --version
```

---

## 3. 获取项目代码

进入本地工作目录：

```powershell
cd C:\WebStand
```

克隆项目：

```powershell
& "C:\Program Files\Git\cmd\git.exe" clone https://github.com/wangshizhao92-create/chipsense-tech-website.git
```

进入项目：

```powershell
cd C:\WebStand\chip-company-website
```

---

## 4. 安装依赖

首次运行需要安装依赖：

```powershell
npm install
```

如果依赖异常，可以删除依赖后重新安装：

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

---

## 5. 本地调试运行

启动本地开发服务器：

```powershell
npm run dev
```

浏览器打开：

```txt
http://localhost:3000
```

常用本地调试页面：

```txt
http://localhost:3000/
http://localhost:3000/products
http://localhost:3000/products/tmr-current-sensor
http://localhost:3000/products/tmr-current-sensor/p-series
http://localhost:3000/products/tmr-current-sensor/m-series
http://localhost:3000/projects
http://localhost:3000/about
http://localhost:3000/contact
http://localhost:3000/sitemap.xml
http://localhost:3000/robots.txt
```

停止本地开发服务器：

```txt
Ctrl + C
```

---

## 6. 本地构建检查

每次提交代码前，建议先执行构建检查：

```powershell
npm run build
```

如果构建成功，说明项目可以正常部署。

如果出现页面报错，例如：

```txt
Cannot read properties of undefined
```

通常说明某个页面读取的数据字段不存在，需要检查：

```txt
app/
components/
data/site.ts
```

---

## 7. 本地试运行生产版本

构建：

```powershell
npm run build
```

启动生产预览：

```powershell
npm run start
```

浏览器打开：

```txt
http://localhost:3000
```

说明：

```txt
npm run dev   用于开发调试
npm run build 用于构建检查
npm run start 用于本地预览生产版本
```

---

## 8. 主要目录结构

```txt
chip-company-website
├─ app
│  ├─ page.tsx
│  ├─ layout.tsx
│  ├─ robots.ts
│  ├─ sitemap.ts
│  ├─ products
│  │  ├─ page.tsx
│  │  └─ tmr-current-sensor
│  │     ├─ page.tsx
│  │     ├─ p-series
│  │     │  └─ page.tsx
│  │     └─ m-series
│  │        └─ page.tsx
│  ├─ projects
│  │  └─ page.tsx
│  ├─ about
│  │  └─ page.tsx
│  └─ contact
│     └─ page.tsx
├─ components
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  ├─ ProductCard.tsx
│  └─ SectionTitle.tsx
├─ data
│  └─ site.ts
├─ public
│  ├─ images
│  └─ baidu_verify_codeva-98CIaFyNMs.html
├─ package.json
├─ next.config.ts
└─ README.md
```

---

## 9. 常用修改位置

### 首页

```txt
app/page.tsx
```

主要修改：

```txt
首页 Hero 大标题
首页公司定位
产品系列区块
核心能力区块
应用场景区块
```

### 产品与服务页

```txt
app/products/page.tsx
```

### 产品数据

```txt
data/site.ts
```

一般产品卡片、应用场景、核心能力等数据建议统一放在这里维护。

### 顶部导航

```txt
components/Header.tsx
```

### 底部信息

```txt
components/Footer.tsx
```

### SEO 信息

```txt
app/layout.tsx
```

### sitemap

```txt
app/sitemap.ts
```

### robots

```txt
app/robots.ts
```

### 静态图片

```txt
public/images
```

---

## 10. Git 提交与推送

查看当前改动：

```powershell
& "C:\Program Files\Git\cmd\git.exe" status
```

添加全部改动：

```powershell
& "C:\Program Files\Git\cmd\git.exe" add .
```

提交：

```powershell
& "C:\Program Files\Git\cmd\git.exe" commit -m "update website content"
```

推送到 GitHub：

```powershell
& "C:\Program Files\Git\cmd\git.exe" push
```

完整常用流程：

```powershell
cd C:\WebStand\chip-company-website

npm run build

& "C:\Program Files\Git\cmd\git.exe" add .
& "C:\Program Files\Git\cmd\git.exe" commit -m "update website content"
& "C:\Program Files\Git\cmd\git.exe" push
```

---

## 11. Vercel 部署

当前项目已通过 GitHub 仓库部署到 Vercel。

Vercel 部署逻辑：

```txt
本地修改代码
↓
git commit
↓
git push
↓
GitHub 仓库更新
↓
Vercel 自动触发部署
↓
Production Deployment 状态变为 Ready
```

线上地址：

```txt
https://chipsense-tech-website.vercel.app
```

每次 push 后，进入 Vercel 项目页面检查部署状态：

```txt
Ready 表示部署成功
Error 表示部署失败，需要查看日志
Building 表示正在部署
```

---

## 12. Vercel 构建配置

一般保持默认即可。

推荐配置：

```txt
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

如果 Vercel 部署失败，优先检查：

```txt
1. 本地 npm run build 是否成功
2. package.json 是否完整
3. 是否有 TypeScript 类型错误
4. 是否有图片路径错误
5. 是否有未提交的文件
```

---

## 13. 搜索引擎验证

### Google Search Console

HTML 验证码配置在：

```txt
app/layout.tsx
```

当前 Google 验证码：

```txt
NGUmBX3xKLVcQqK3b-Z2IU1xFx_mR0Sqtc-HdfpX_K4
```

对应 Next.js metadata：

```ts
verification: {
  google: "NGUmBX3xKLVcQqK3b-Z2IU1xFx_mR0Sqtc-HdfpX_K4",
}
```

### Bing Webmaster Tools

Bing 验证码：

```txt
0C8849E3DE3D973B66796AE0BE4D1BFF
```

对应 Next.js metadata：

```ts
verification: {
  other: {
    "msvalidate.01": "0C8849E3DE3D973B66796AE0BE4D1BFF",
  },
}
```

### 百度搜索资源平台

百度当前采用文件验证。

验证文件位置：

```txt
public/baidu_verify_codeva-98CIaFyNMs.html
```

线上访问地址：

```txt
https://chipsense-tech-website.vercel.app/baidu_verify_codeva-98CIaFyNMs.html
```

文件内容：

```txt
codeva-98CIaFyNMs
```

---

## 14. sitemap 提交

当前 sitemap 地址：

```txt
https://chipsense-tech-website.vercel.app/sitemap.xml
```

当前 robots 地址：

```txt
https://chipsense-tech-website.vercel.app/robots.txt
```

建议提交到：

```txt
Google Search Console
Bing Webmaster Tools
百度搜索资源平台
```

重点收录页面：

```txt
https://chipsense-tech-website.vercel.app/
https://chipsense-tech-website.vercel.app/products
https://chipsense-tech-website.vercel.app/products/tmr-current-sensor
https://chipsense-tech-website.vercel.app/products/tmr-current-sensor/p-series
https://chipsense-tech-website.vercel.app/products/tmr-current-sensor/m-series
https://chipsense-tech-website.vercel.app/projects
https://chipsense-tech-website.vercel.app/about
https://chipsense-tech-website.vercel.app/contact
```

---

## 15. 国内访问说明

当前 Vercel 免费域名：

```txt
https://chipsense-tech-website.vercel.app
```

在国外访问正常，在国内网络可能存在访问慢、打不开或间歇性失败的问题。

如果需要国内稳定访问，建议使用：

```txt
腾讯云域名
腾讯云备案
腾讯云轻量应用服务器
Nginx 部署
HTTPS 证书
百度搜索资源平台重新验证正式域名
```

---

# 16. 腾讯云部署方案

## 16.1 推荐部署架构

```txt
用户浏览器
↓
正式域名
↓
腾讯云 DNS
↓
腾讯云轻量应用服务器
↓
Nginx
↓
Next.js 静态站点或 Node.js 服务
```

推荐正式域名示例：

```txt
https://www.chipsensetech.cn
```

---

## 16.2 备案前注意事项

如果域名解析到中国大陆服务器，需要先完成 ICP 备案。

备案通过前，不建议将未备案域名解析到腾讯云大陆服务器并公开访问。

备案主体建议：

```txt
海南芯斟科技有限公司
```

网站名称建议：

```txt
海南芯斟科技有限公司官网
```

网站服务内容建议：

```txt
单位门户网站 / 企业官网
```

---

## 16.3 方案 A：静态导出部署

如果官网主要是展示页面，推荐静态部署，稳定、省资源、维护简单。

### 修改 next.config.ts

在项目根目录打开：

```txt
next.config.ts
```

配置为：

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

说明：

```txt
output: "export" 用于生成纯静态文件
images.unoptimized: true 用于兼容 next/image 静态导出
```

### 本地生成静态文件

```powershell
cd C:\WebStand\chip-company-website
npm run build
```

构建成功后会生成：

```txt
out
```

最终上传 `out` 文件夹中的内容到服务器即可。

---

## 16.4 腾讯云服务器安装 Nginx

以 Ubuntu 22.04 为例。

登录服务器后执行：

```bash
sudo apt update
sudo apt install -y nginx
```

启动 Nginx：

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

查看状态：

```bash
sudo systemctl status nginx
```

---

## 16.5 上传静态文件到服务器

本地构建后，将 `out` 文件夹上传到服务器。

服务器建议目录：

```txt
/var/www/chipsense-tech
```

在服务器上创建目录：

```bash
sudo mkdir -p /var/www/chipsense-tech
sudo chown -R $USER:$USER /var/www/chipsense-tech
```

将本地 `out` 文件夹内容上传到：

```txt
/var/www/chipsense-tech
```

如果使用 scp，示例：

```powershell
scp -r C:\WebStand\chip-company-website\out\* root@服务器公网IP:/var/www/chipsense-tech/
```

---

## 16.6 配置 Nginx

新建配置文件：

```bash
sudo nano /etc/nginx/sites-available/chipsense-tech
```

写入：

```nginx
server {
    listen 80;
    server_name chipsensetech.cn www.chipsensetech.cn;

    root /var/www/chipsense-tech;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    location /sitemap.xml {
        try_files $uri =404;
    }

    location /robots.txt {
        try_files $uri =404;
    }
}
```

启用站点：

```bash
sudo ln -s /etc/nginx/sites-available/chipsense-tech /etc/nginx/sites-enabled/chipsense-tech
```

检查配置：

```bash
sudo nginx -t
```

重启 Nginx：

```bash
sudo systemctl reload nginx
```

---

## 16.7 腾讯云 DNS 解析

进入腾讯云控制台：

```txt
域名注册
我的域名
解析
```

添加解析：

```txt
主机记录：www
记录类型：A
记录值：服务器公网 IP
```

可选添加根域名：

```txt
主机记录：@
记录类型：A
记录值：服务器公网 IP
```

解析完成后访问：

```txt
http://www.chipsensetech.cn
```

---

## 16.8 配置 HTTPS

备案完成并成功解析后，可以申请免费 SSL 证书。

腾讯云控制台：

```txt
SSL 证书
申请免费证书
绑定域名：www.chipsensetech.cn
```

证书签发后，可下载 Nginx 证书文件并配置 HTTPS。

Nginx HTTPS 示例：

```nginx
server {
    listen 80;
    server_name chipsensetech.cn www.chipsensetech.cn;
    return 301 https://www.chipsensetech.cn$request_uri;
}

server {
    listen 443 ssl;
    server_name www.chipsensetech.cn;

    ssl_certificate /etc/nginx/ssl/chipsensetech.cn_bundle.crt;
    ssl_certificate_key /etc/nginx/ssl/chipsensetech.cn.key;

    root /var/www/chipsense-tech;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }
}
```

检查并重载：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

# 17. 方案 B：Node.js 生产服务部署

如果后续网站需要动态 API、服务端渲染或后台功能，可以使用 Node.js 方式部署。

服务器安装 Node.js：

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

克隆仓库：

```bash
cd /var/www
sudo git clone https://github.com/wangshizhao92-create/chipsense-tech-website.git
sudo chown -R $USER:$USER chipsense-tech-website
cd chipsense-tech-website
```

安装依赖并构建：

```bash
npm install
npm run build
```

安装 PM2：

```bash
sudo npm install -g pm2
```

启动：

```bash
pm2 start npm --name chipsense-tech -- start
pm2 save
pm2 startup
```

Nginx 反向代理配置：

```nginx
server {
    listen 80;
    server_name chipsensetech.cn www.chipsensetech.cn;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

检查并重载：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 18. 推荐当前使用的部署方式

当前官网是企业展示站，推荐：

```txt
短期：
Vercel 继续保留，用于海外访问和 GitHub 自动部署

国内正式站：
腾讯云备案域名 + 腾讯云轻量服务器 + Nginx + 静态导出
```

推荐优先采用：

```txt
方案 A：Next.js 静态导出部署
```

原因：

```txt
速度快
维护简单
服务器配置要求低
适合企业官网
不依赖 Node.js 长期运行
更适合百度收录
```

---

## 19. 常见问题

### 19.1 本地能打开，Vercel 打不开

检查：

```txt
是否已经 git push
Vercel 最新部署是否 Ready
Vercel Build Logs 是否报错
图片路径是否正确
是否有大小写路径问题
```

---

### 19.2 百度验证文件 404

检查文件是否存在：

```txt
public/baidu_verify_codeva-98CIaFyNMs.html
```

检查线上是否可访问：

```txt
https://chipsense-tech-website.vercel.app/baidu_verify_codeva-98CIaFyNMs.html
```

如果访问显示：

```txt
codeva-98CIaFyNMs
```

说明文件验证部署成功。

---

### 19.3 sitemap 无法抓取

先检查：

```txt
https://chipsense-tech-website.vercel.app/sitemap.xml
```

能否浏览器直接打开。

如果能打开，搜索引擎仍显示无法抓取，通常可以：

```txt
删除旧 sitemap
重新提交 sitemap.xml
等待搜索引擎重新抓取
```

---

### 19.4 国内打不开 Vercel

这是正常现象。

解决方式：

```txt
购买正式域名
完成 ICP 备案
部署到腾讯云大陆服务器
重新提交百度收录
```

---

### 19.5 页面内容不一致

优先检查：

```txt
app/page.tsx
app/products/page.tsx
data/site.ts
```

确保首页、产品页、导航、sitemap 中的公司定位和产品方向一致。

---

## 20. 推荐维护流程

每次修改建议按以下流程：

```powershell
cd C:\WebStand\chip-company-website

npm run dev
```

本地浏览器检查页面。

确认无误后：

```powershell
npm run build
```

构建成功后：

```powershell
& "C:\Program Files\Git\cmd\git.exe" status
& "C:\Program Files\Git\cmd\git.exe" add .
& "C:\Program Files\Git\cmd\git.exe" commit -m "update website"
& "C:\Program Files\Git\cmd\git.exe" push
```

等待 Vercel 自动部署完成。

如果是腾讯云静态部署，还需要：

```powershell
npm run build
```

然后上传 `out` 文件夹内容到腾讯云服务器：

```txt
/var/www/chipsense-tech
```

最后重载 Nginx：

```bash
sudo systemctl reload nginx
```

---

## 21. 当前项目状态记录

```txt
当前 Vercel 地址：
https://chipsense-tech-website.vercel.app

当前 GitHub 仓库：
https://github.com/wangshizhao92-create/chipsense-tech-website.git

当前本地项目路径：
C:\WebStand\chip-company-website

当前推荐主线：
继续保留 Vercel 作为海外访问和快速部署地址；
腾讯云完成域名、备案和国内部署后，作为正式国内官网；
百度优先提交正式备案域名；
Google 和 Bing 可继续使用 Vercel 或正式域名。
```

````

然后你本地执行：

```powershell
cd C:\WebStand\chip-company-website

notepad README.md
````

把上面内容粘进去保存。

再执行：

```powershell
npm run build

& "C:\Program Files\Git\cmd\git.exe" add README.md
& "C:\Program Files\Git\cmd\git.exe" commit -m "add project readme"
& "C:\Program Files\Git\cmd\git.exe" push
```
