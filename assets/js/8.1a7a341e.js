(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{344:function(s,t,a){s.exports=a.p+"assets/img/2023-04-14-18-22-04.e4d1e9fe.png"},345:function(s,t,a){s.exports=a.p+"assets/img/2023-04-14-18-48-04.bd1d567e.png"},346:function(s,t,a){s.exports=a.p+"assets/img/2023-04-14-18-48-21.4685f92c.png"},371:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("最近维护的Air001准备上线了，为了衬托出其强大的性价比，因此我想来做点"),t("s",[s._v("缺德")]),s._v("的事，让我们来和同样以高打性价比的STC系列单片机来对比下CoreMark的跑分吧，本文将会详细介绍移植过程以及跑分结果。测试的MCU为"),t("code",[s._v("降龙棍 STC32G12K128")]),s._v("与"),t("code",[s._v("打狗棒 STC8H8K64U")]),s._v("。\n")]),s._v(" "),t("h2",{attrs:{id:"stc32g12k128"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stc32g12k128"}},[s._v("#")]),s._v(" STC32G12K128")]),s._v(" "),t("h3",{attrs:{id:"开启usb-cdc打印log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启usb-cdc打印log"}},[s._v("#")]),s._v(" 开启USB-CDC打印Log")]),s._v(" "),t("p",[s._v("我买到的降龙棍开发板非常的HiFi，整个板子上外设除了LED和芯片就没什么了，下载程序都是用的自带的USB-HID的bootloader，然后我又懒得接一个串口模块，因此我们可不可以利用原生的USB，走CDC虚拟串口来打印跑分后的数据呢？")]),s._v(" "),t("p",[s._v("答案当然是肯定的，STC非常的贴心，自带了一个写好的USB库，其中包含了HID和CDC两类主要的操作。那我们就先尝试去移植吧。")]),s._v(" "),t("h4",{attrs:{id:"下载库文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载库文件"}},[s._v("#")]),s._v(" 下载库文件")]),s._v(" "),t("p",[s._v("STC的USB库文件下载链接为"),t("a",{attrs:{href:"https://stcai.com/filedownload/656048",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://stcai.com/filedownload/656048"),t("OutboundLink")],1),s._v("，下载后会发现是一个压缩文件，我们将其解压备用。")]),s._v(" "),t("h4",{attrs:{id:"创建工程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建工程"}},[s._v("#")]),s._v(" 创建工程")]),s._v(" "),t("p",[s._v("打开Keil，新建一个工程，芯片选择"),t("code",[s._v("STC32G12K128")]),s._v("，然后我们复制刚才解压的文件中的"),t("code",[s._v("stc32_stc8_usb.h")]),s._v("和"),t("code",[s._v("stc_usb_cdc_32g.lib")]),s._v("到我们新建的工程的目录下，并添加进自己的工程中。")]),s._v(" "),t("h4",{attrs:{id:"编写初始化代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写初始化代码"}},[s._v("#")]),s._v(" 编写初始化代码")]),s._v(" "),t("p",[s._v("我们在main.c中添加如下的代码：")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stc32g.h"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stc32_stc8_usb.h"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STC32G_Delay.h"')])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("USER_DEVICEDESC "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("USER_PRODUCTDESC "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("USER_STCISPCMD "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@STCISP#"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不停电自动 ISP 下载命令")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("CDC_init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" helloStr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!\\r\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("CDC_init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    IE2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使能 USB 中断")]),s._v("\n    EA "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DeviceState "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" DEVSTATE_CONFIGURED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等待 USB 完成配置")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("USB_SendData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BYTE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("helloStr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sizeof")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("helloStr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("delay_ms")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("CDC_init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    P_SW2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    P3M0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x03")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// P3.0/P3.1 和 USB 的 D-/D+共用 PIN 脚，")]),s._v("\n    P3M1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x03")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要将 P3.0/P3.1 设置为高阻输入模式")]),s._v("\n    IRC48MCR "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使能内部 48M 的 USB 专用 IRC")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("IRC48MCR "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x01")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    USBCLK "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置 USB 时钟源为内部 48M 的 USB 专用 IRC")]),s._v("\n    USBCON "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x90")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使能 USB 功能")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usb_init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用 USB CDC 初始化库函数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("可能需要注意的是，您需要修改keil中的"),t("code",[s._v("Memory Mode")]),s._v("，将其修改为"),t("code",[s._v("XSmall")]),s._v("，"),t("code",[s._v("Code ROM Size")]),s._v("修改为"),t("code",[s._v("Large")])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(344),alt:""}})]),s._v(" "),t("p",[s._v("然后编译，发现0 Warning，0 Error，我们下载之后打开串口助手，此时应该能看到每隔一分钟打印一次"),t("code",[s._v("Hello World!")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"移植coremark"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移植coremark"}},[s._v("#")]),s._v(" 移植CoreMark")]),s._v(" "),t("h4",{attrs:{id:"下载coremark库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载coremark库"}},[s._v("#")]),s._v(" 下载CoreMark库")]),s._v(" "),t("p",[s._v("我们在工程目录下克隆整个仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/eembc/coremark.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"在keil中加入所需的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在keil中加入所需的文件"}},[s._v("#")]),s._v(" 在Keil中加入所需的文件")]),s._v(" "),t("p",[s._v("在工程中，加入如下几个文件："),t("code",[s._v("core_list_join.c")]),s._v(" "),t("code",[s._v("core_main.c")]),s._v(" "),t("code",[s._v("core_matrix.c")]),s._v(" "),t("code",[s._v("core_state.c")]),s._v(" "),t("code",[s._v("core_util.c")]),s._v(" s"),t("code",[s._v("simple/core_portme.c")]),s._v("，不要忘记把添加include路径\n"),t("img",{attrs:{src:a(345),alt:""}}),s._v(" "),t("img",{attrs:{src:a(346),alt:""}})]),s._v(" "),t("h4",{attrs:{id:"修改coremark的具体实现函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改coremark的具体实现函数"}},[s._v("#")]),s._v(" 修改CoreMark的具体实现函数")]),s._v(" "),t("h5",{attrs:{id:"_0x01-修改coremark的main函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0x01-修改coremark的main函数"}},[s._v("#")]),s._v(" 0x01 修改coremark的main函数")]),s._v(" "),t("p",[s._v("首先打开"),t("code",[s._v("core_main.c")]),s._v("文件，将里面的"),t("code",[s._v("MAIN_RETURN_TYPE main(int argc, char *argv[])")]),s._v("函数重命名为")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("MAIN_HAS_NOARGC")])]),s._v("\nMAIN_RETURN_TYPE\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("coremark_main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("   argc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("argv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("else")])]),s._v("\nMAIN_RETURN_TYPE\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("coremark_main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" argc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("argv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("并在"),t("code",[s._v("coremark.h")]),s._v("中添加")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("MAIN_HAS_NOARGC")])]),s._v("\nMAIN_RETURN_TYPE\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("coremark_main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("else")])]),s._v("\nMAIN_RETURN_TYPE\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("coremark_main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" argc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("argv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("函数声明，这里是为了解决main函数重复的问题，而我们想要在运行正式的程序之前初始化一些我们自己的外设。")]),s._v(" "),t("h5",{attrs:{id:"_0x02-添加ee-printf函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0x02-添加ee-printf函数"}},[s._v("#")]),s._v(" 0x02 添加"),t("code",[s._v("ee_printf")]),s._v("函数")]),s._v(" "),t("p",[s._v("这里我们没法直接使用printf函数输出，因此选择自己写一个"),t("code",[s._v("ee_printf")]),s._v("函数将运行结果输出。我们打开"),t("code",[s._v("core_portme.h")]),s._v("文件，将"),t("code",[s._v("HAS_PRINTF")]),s._v("的值设定为0，并在文件末尾添加"),t("code",[s._v("ee_printf")]),s._v("的函数定义。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifndef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("HAS_PRINTF")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("HAS_PRINTF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ee_printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后我们在"),t("code",[s._v("simple")]),s._v("文件夹下新建一个"),t("code",[s._v("ee_printf.c")]),s._v("文件，在里面写上"),t("code",[s._v("ee_printf")]),s._v("函数的定义。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"coremark.h"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stdio.h"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stc32_stc8_usb.h"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdarg.h>")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ee_printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    va_list args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("va_start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    len "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vsprintf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("va_end")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("USB_SendData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BYTE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h5",{attrs:{id:"_0x03-添加时钟"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0x03-添加时钟"}},[s._v("#")]),s._v(" 0x03 添加时钟")]),s._v(" "),t("p",[s._v("接下来我们需要一个时钟源来判断程序运行了多久，显然这很容易。我们采用定时器0作为时钟源，1ms中断一次来进行计数。我们将引入STC标准库中的"),t("code",[s._v("STC32G_Timer")]),s._v("与"),t("code",[s._v("STC32G_NVIC")]),s._v("，如何添加到工程中不多赘述，初始化等操作也不多赘述，具体可以自行到仓库中查看源代码。此处我们只需要指定，每经过1ms，SysTickFlag将会自增1即可。")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("需要注意，请记得在"),t("code",[s._v("STC32G_Timer_Isr.c")]),s._v("中修改中断函数")])]),s._v(" "),t("p",[s._v("同样的，在"),t("code",[s._v("core_portme.h")]),s._v("文件中，将"),t("code",[s._v("HAS_TIME_H")]),s._v("和"),t("code",[s._v("USE_CLOCK")]),s._v("的宏定义修改为0，并注释掉"),t("code",[s._v("#include <time.h>")]),s._v("，将"),t("code",[s._v("CORE_TICKS")]),s._v("的类型修改为"),t("code",[s._v("long")]),s._v("。")]),s._v(" "),t("p",[s._v("然后我们进入到"),t("code",[s._v("simple/core_portme.c")]),s._v("文件中，重点重写"),t("code",[s._v("GETMYTIME")]),s._v("等几个宏，我们将其注释，并替换为如下的代码：")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Type_def.h"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extern")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" u32 SysTickFlag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("NSECS_PER_SEC")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("CORETIMETYPE")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("GETMYTIME")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("_t "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SysTickFlag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("MYTIMEDIFF")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ini"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ini"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("TIMER_RES_DIVIDER")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("SAMPLE_TIME_IMPLEMENTATION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("EE_TICKS_PER_SEC")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("NSECS_PER_SEC "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" TIMER_RES_DIVIDER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("请注意，这时候编译器可能会有很多报错，是因为和关键字重复了，建议查看commit记录查看修改了什么")])]),s._v(" "),t("h4",{attrs:{id:"烧录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#烧录"}},[s._v("#")]),s._v(" 烧录")]),s._v(" "),t("p",[s._v("使用STC-ISP软件烧录，其中IRC频率修改为最高35M，等待烧录后打开串口查看跑分结果。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("STC32的CoreMark跑分工程开源仓库为"),t("a",{attrs:{href:"https://github.com/HalfSweet/STC32G-CoreMark",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/HalfSweet/STC32G-CoreMark"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);