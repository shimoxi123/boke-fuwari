---
title: "STM32 单片机入门教程"
published: 2025-07-14 14:00:00
description: "STM32 单片机入门教程，适合电子类专业学生和电子工程师。"
image: "https://cdn.jsdelivr.net/gh/shimoxi123/img/img/OIP.webp"
tags: ["STM32", "单片机", "嵌入式开发", "ARM", "Cortex-M", "硬件编程", "电子工程"]
category: "嵌入式开发"
draft: false
---


<!-- more -->
## 一、前言

STM32 是意法半导体（ST）推出的一系列基于 ARM Cortex-M 内核的高性能、低功耗 32 位单片机，被广泛应用于嵌入式系统开发。本教程将带你从零开始了解 STM32，适合电子类专业学生和电子工程师入门学习。

## 二、准备工作

### 1. 所需硬件

- STM32 开发板（如 STM32F103C8T6，俗称“蓝丁板”）
- USB 转串口模块（如 CH340、CP2102）
- 杜邦线、USB 数据线、面包板等基本工具

### 2. 所需软件

- [Keil MDK](https://www.keil.com/download/)：主流 STM32 编译环境
- [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html)：图形化配置工具
- ST-Link 驱动或串口驱动程序
- [串口调试助手](https://freeware.the-meiers.org/)（可选）

---

## 三、STM32 基础知识

### 1. 核心架构

STM32 单片机基于 ARM Cortex-M0/M3/M4/M7 架构，具有如下特点：

- 32 位 RISC 架构，运行速度快
- 丰富的片上外设（GPIO、USART、ADC、SPI、I2C 等）
- 超低功耗模式，适合低功耗应用

### 2. 常用系列对比

| 系列   | 内核            | 特点            |
| ---- | ------------- | ------------- |
| F0   | Cortex-M0     | 入门级，性价比高      |
| F1   | Cortex-M3     | 经典耐用，资源中等     |
| F4   | Cortex-M4     | 高性能，带 DSP 指令集 |
| L 系列 | Cortex-M0+/M4 | 超低功耗应用        |

---

## 四、第一个项目：点亮 LED

### 1. 使用 STM32CubeMX 配置

1. 新建一个 STM32 项目，选择对应芯片（如 STM32F103C8）
2. 配置一个 GPIO 引脚为输出模式（如 PC13）
3. 设置时钟树（Clock Configuration）
4. 生成代码并导出到 Keil 工程

### 2. 使用 Keil 编写代码

在 `main.c` 中修改代码：

```c
#include "main.h"

int main(void)
{
    HAL_Init();
    SystemClock_Config();
    MX_GPIO_Init();

    while (1)
    {
        HAL_GPIO_TogglePin(GPIOC, GPIO_PIN_13);
        HAL_Delay(500);
    }
}
```

### 3. 下载程序

使用 ST-Link 或 USB-UART 将程序烧录到开发板上。

---

## 五、常用外设应用简介

### 1. USART 串口通信

- 配置串口引脚并开启中断接收
- 使用 `HAL_UART_Transmit` 和 `HAL_UART_Receive` 完成收发

### 2. ADC 模数转换

- 适用于电压检测、传感器信号采集
- 配置通道与采样时间，读取 `HAL_ADC_GetValue`

### 3. PWM 输出

- 用于控制电机、LED 亮度、蜂鸣器等
- 配置 TIM 定时器为 PWM 模式

### 4. 中断系统

- NVIC 支持多种中断优先级
- 可响应外部中断（如按键）或外设中断（如串口）

---

## 六、学习建议与资源

### 1. 学习路线

1. 熟悉 STM32 基础概念与开发环境
2. 学会 GPIO、USART、PWM、ADC 等外设使用
3. 学习 FreeRTOS 多任务操作系统（进阶）
4. 掌握低功耗与系统调试技巧

### 2. 推荐资源

- [野火 STM32 教程](https://www.embedfire.com/)
- [正点原子资料](https://www.openedv.com/)
- [ST 官方中文社区](https://community.st.com/s/)：包含 STM32CubeMX、HAL 库教程

---

## 七、总结

STM32 是入门嵌入式开发的绝佳平台，拥有广泛的社区支持和成熟的工具链。希望本教程能帮助你迈出学习嵌入式系统的第一步。后续你还可以探索更多应用，如 OLED 屏幕显示、蓝牙通信、物联网接入等。

如需更深入资料，欢迎留言交流，祝开发愉快！

