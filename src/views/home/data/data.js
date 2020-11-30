/* eslint-disable */
export default {
  'experience': [
    {
      'company': '广东蜂助手股份有限公司',
      'job': '前端组长',
      'time': '2017.04 - 2020.11',
      'detail': '担任前端组长一职，主要负责公司产品《蜂助手聚合收银支付》，《智慧停车平台》，《PageBuilder/PageDesign》等项目。负责项目相关前端框架设计、开发、上线、维护等工作，同时负责需求整合，人力资源统筹，开发周期安排等项目管理工作。',
      'role': '前端管理、前端开发',
      'tech': 'Vue,React,Ant-Design,ECMAScript,Webpack,微信公众号,小程序'
    },
    {
      'company': '广州际讯数码科技有限公司',
      'job': '前端工程师',
      'time': '2016.09 - 2017.04',
      'detail': '担任移动Web前端开发一职。主要负责公司微信公众号内容开发，公司App《好波通》内置H5页面的业务设计、开发，同时负责公司后台数据系统开发。',
      'role': '前端管理、前端开发',
      'tech': 'Vue,Vux,ES6,Webpack,微信公众号'
    },
    {
      'company': '广州热点软件科技股份有限公司',
      'job': '开发工程师',
      'time': '2014.04 - 2016.09',
      'detail': '担任开发工程师一职，独立负责公司<code>Portal</code>网关系列产品的设计、开发、维护工作。负责产品《Eportal 2099》产品从版本1.4到版本2.4等数个版本开发。',
      'role': '前后端开发',
      'tech': 'PHP,MySql,jQuery,jQueryUI,Angular.js'
    },
    {
      'company': '惠州学院',
      'job': '网络工程专业',
      'time': '2010.09 - 2014.07',
      'detail': '就读于惠州市惠州学院 网络工程专业'
    }
  ],
  'technology': [
    '<code>Vue</code>全家桶、<code>React</code>全家桶开发；',
    '熟悉<code>ECMAScript</code>各版本的语言特性，熟悉各种面对模块化编程的差异及使用；',
    '熟悉主流的前端工程化工程链配置，如<code>Webpack</code>、<code>Grunt</code>等；',
    '熟悉各类<code>Css</code>样式预编译语言，如<code>Less</code>、<code>SASS</code>等；',
    '熟悉各类主流的面向对象设计模式，能独立开发高质量的代码；',
    '熟悉<code>Node.js</code>开发，熟悉<code>Koa</code>, <code>Express</code>开发'
  ],
  'project': [
    {
      title: 'PageDesign/PageBuilder页面自动生成器',
      companyTime: '广东蜂助手股份有限公司（2018.06 ~ now）',
      techKey: 'React, Ant-Design',
      content1: `<div>随着我司业务日益发展，需要大量的后台管理系统开发，前端不仅需要应付H5活动页面、移动端Web页面开发，也需要更多介入到后台管理系统的开发中去，工作量不言而喻。</div>`,
      content2: `
        <div>由于此类管理系统只要求页面自然美观，交互简单快捷，且主要是面向公司产品经理、运营人员使用，
              我们决定采用一种通过“拖曳”、“配置参数”、“预配置”、“快速部署”的方式来快速构建、生成页面的方式解决此类业务。</div>`,
      content3: `
        <li>《PageDesign/PageBuilder》基于<code>Ant-Design</code> + <code>React</code>生态体系构建，使用<code>Ant-Design</code>框架中的<code>Drag</code>, <code>Drop</code>特性实现“拖曳”功能，通过鼠标拖动控制到指定容器，并通过<code>Ant-Design</code>栅格化布局实现排版；</li>
        <li>预配置基本的组件(Form表单、表格、树菜单结构等)及基本参数，无需要过多关注组件配置，自动生成页面ID+组件ID，生成页面后轻松实现事件绑定；</li>
        <li>后台基于<code>RESTful API</code>设计接口，通过封装<code>Axios</code>快速绑定<code>CRUD HTTP</code>操作；</li>
        <li>封装使用<code>React Router</code>实现页面跳转；</li>
        <li>接入我司统一身份认证平台<b>蜂助手Hive护城河统一认证</b>实现权限控制；</li>
       `,
      content4: `
        <li>后端开发人员可以通过此框架快速生成页面，快速响应需求变更，只需基本的<code>JavaScript</code>开发基础就能自行解决前端开发需求；</li>
        <li>降低人力资源成本，无需前端人员过多介入开发，同时产品经理亦可以通过《PageDesign》设计可用于开发的产品原型，大量降低开发成功、沟通成本；</li>
        <li>系统集成身份校验、鉴权，菜单权限控制，去除重复的开发任务，使开发人员更多专注业务开发；</li>
      `
    },
    {
      title: '2099Eportal Wi-Fi运营网关',
      companyTime: '广州热点软件科技股份有限公司（2014-04~2016-09）',
      techKey: 'Ext.Js, PHP, MySql, ',
      content1:
        `<div> 《2099 Eportal Wi-Fi运营网关》是面向大中型商业机构设计的一体化商业网关。与<code>Dr.Cloud</code>私有云平台组成客户私有商业<code>Wi-Fi</code>运营平台。
          是公司商业Wifi网关的重头产品。</div>`,
      content2:
        `<div>Eportal Wi-Fi在长期的功能迭代中，虽然能满足客户的大部分要求，但仍存在页面审美过时，交互体验不高等缺点。</div>`,
      content3:
        `<div>负责Eportal网关产品从1.4版本到2.4版本的6个版本的开发，项目采用<code>PHP(SpeedPHP)</code> + <code>MySql</code> + <code>Sqlite</code>等技术，在满足其功能升级的情况下，
        将<code>Ext Js</code>升级到版本4.X，页面更加美观大方。后续陆续开发了以<code>BootStrap</code> + <code>jQueryUI</code> + <code>Angular.js</code>技术栈的新管理系统，
        更加贴合流行的技术趋势，使产品保持了活力与竞争力</div>`,
      content4: `<div>
        <li>Eportal Wi-Fi管理系统持续得到了客户的认可，也得到公司的市场运营同事，现场运维工程师的认识，项目多次评选为年度最佳项目；</li>
        <li>本人为项目主力开发，曾作为技术代表出差海航集团（北京），南京青奥会（2014）等，并连续两年获取最佳员工称号。</li>
        </div>`
    },
    {
      'title': '聚合收银支付系统',
      'companyTime': '广东蜂助手股份有限公司(2017.07 ~ now)',
      'techKey': 'Vue, Vuex, ..',
      content1: `
        <div>移动支付的浪潮兴起给国民生活、出行带来极大的便利。然而市场上的支付方式繁多，消费者往往需要根据商家提供不同的支付方式切换不同的APP，给消费者带来麻烦。</div>`,
      content2: `
        <div>
        《聚合收银支付系统》整合了市面上常见的支付方式如：微信支付、支付宝支付、京东、花呗、京东分期、电信翼支付等诸多支付上游，实现商户、普通用户双向扫码达到交易支付的功能；
        同时为客户提供角色管理、门店管理、支付通道管理、支付数据分析等诸多功能，为客户财务信息化提供帮助；
        </div>
      `,
      content3: `
        <div>
        <li>使用<code>Vue</code>及<code>Vuex</code>、<code>Vux.UI</code>等技术作为前端页面的开发与设计；</li>
        <li>使用<code>crypto-js AES</code>加密方式对前端<code>Http</code>请求进行接口数据加密，保证关键接口参数不被泄露；</li>
        <li>对接微信公众号<code>JS-SDK</code>，开发摄像头扫码功能，支持商户、用户双向互扫；</li>
        <li>与客户端同事密切配合，同时研发<b>Android</b>, <b>IOS</b>等客户端版本；</li>
        </div>`,
      content4: `
        <div>
          项目服务于香港稻香集团、中国联通长沙分公司等用户。其中为长沙联通公司订制了<b>花呗分期</b>预授权购机服务，为营业厅手机销售与话费套餐绑定提供了强有力的销售支撑，
          受用户广泛好评，本人为项目主力开发，也荣获年度最佳员工称号。
        </div>`
    },
    {
      'title': '智慧停车管理平台',
      'companyTime': '广东蜂助手股份有限公司(2019.01 ~ now)',
      'techKey': 'Vue, Vuex, React, flux...',
      content1: `
        <div>互联网+物联网的快速发展给予复杂的停车场景的智能化、信息化提供了快速发展的契机。随着我国人均汽车拥有率的快速攀升，车位难寻、计费繁琐、车位利用率等问题也日益突出</div>`,
      content2: `<div>我司在作了一系列的市场调研之后，通过与海康威视、大华科技等视频桩、车检器等硬件厂商合作，提出了一系列智慧停车管理的解决方案，通过互联网+物联网的结合，以解决
        车位定位、计时计费管理、车辆车位信息化、车辆停车指引等问题。</div>`,
      content3: `
        <div>在快速迭代了两个版本后，我们发现技术上存在了几个问题，<b>基础设备管理与智慧停车管理系统耦合严重</b>；系统虽引入了<code>Vue</code>，但仍是以<code>JSP</code>的开发模块为主要开发；<b>路内停车与室内停车系统</b>是分开的，但它们有大量相似的业务逻辑，为此我做了以下工作：</div>
        <li>分拆<b>管理系统</b>及<b>基础设备管理</b>，由于<b>基础设备管理</b>由我司内部使用，故使用《PageDesign/PageBuilder》快速地重新设计、重构，形成独立系统；</li>
        <li>使用<code>Vue + iView-UI</code>重构、开发《智慧停车系统》，同时整合路内停车、室内停车相关业务；</li>
        <li>使用<code>Uni-app</code>独立开发《智慧停车小程序》，引入定位功能实现车辆定位、停车指引功能；实现小程序中停车计时计费、支付等功能</li>`,
      content4: `<div>《智慧停车项目》在历经几个版本迭代进形成以《SAAS物料管理系统》，《设备管理系统》，《管理停车管理系统》三大系统为基础的项目，覆盖小程序、H5页面、PDA手持设备等几个平台，同时在佛山唐园、珠城鸿富鑫物业等几个地方部署运营。</div>`
      // content4: '《智慧停车管理平台》是由《SAAS物料管理系统》，《智慧停车设备管理系统》，《智慧停车管理系统》三大系统组成。主要采用React、Vue等框架及周边生态构建开发而成。'
    },
    {
      'title': '好波通好好彩盈彩',
      'companyTime': '广州际讯数码科技有限公司（2016.09~2017.04）',
      'techKey': 'Vue.js, Vuex-UI',
      content1: `<div>传统的体育彩票需到线下购彩，对于在这个快递、外卖都非常成熟的时代这样的方式无疑有些过时。</div>`,
      content2: `<div>
      开发《好波通好好彩盈彩》，旨在打通线上体彩下单与线下彩票门店出票的壁垒，通过App、微信等方式下单、付款，线下出票的方式，实现用户足不出户就能进行体育彩票购买。
      同时在线上还推出我们的大咖推介产品，让彩民可以选择多个投注产品进行全方位投注，提高彩民购彩的多样性、娱乐性。
      </div>`,
      content3: `
      <li>使用<code>Vue.js + Vux-UI</code>为页面开发技术，实现了大多数页面在微信端彩店的与在APP端无差别使用；</li>
      <li>使用媒体查询、<code>Rem.js</code>等满足不同DPI不同尺寸手机的显示效果；</li>
      <li>由于项目涉及大量后台接口，使用了<code>WebStorage</code>等前端缓存技术缓存了大量页面接口数据，优化页面打开速度及体验；</li>
      <li>采用<code>ESLint + Standard</code>规范团队语法规则；使用<code>Webpack</code>打包并引入微信公众平台接口文件进行开发。</li>`,
      content4: `<div>
      《好波通好好彩盈彩》大大促进了我司主力产品《大咖推介》(体彩投注方案)的购买率，通过在线销售体彩，带动核心盈利产品的销量，增加收益，
      同时为产品后续迭代提供持续的、有力的保障。</div>`
    },
    {
      'title': '好波通大咖聊天室',
      'companyTime': '广州际讯数码科技有限公司（2016.09~2017.01）',
      'techKey': '微信公众号JSSDK, WebSocket, Node.js Express',
      content1: `
        <div>
          移动互联网的兴起，4G时代的来临给球迷朋友们的线上互动带来无限可能，我们不再局限以往论坛发贴、开主题、码字回复这些“效率低下”的线上互动，我们急需一个提高丰富球迷观赛体验、保持用户粘性的全新娱乐方式。
        </div>`,
      content2: `
        <div>
          开发《大咖聊天室》平台，平台给球迷用户、彩民、大咖专家(体育台主持人)提供一个聊天交流沟通互娱的平台，对于我司连接用户、保持用户黏性、提高产品丰富性起到极大的作用。
          平台须提供的功能有在线直播、图文直播、聊到室、抢红包、抢推介等一系列功能。
        </div>`,
      content3: `
        <li>项目使用<code>Vue.js</code> + <code>Vux.UI</code>等技术构建前端H5页面，使用“图片预加载”，“Sprite雪碧图”等技术优化复杂的前端活动页面；</li>
        <li>采用使用<code>WebSocket</code> + <code>Node.js Express</code>实现聊天室功能，第三方图片云存储保留用户聊天图片；</li>
        <li>微信公众号<code>JS-SDK</code>接入公众号红包发放功能，利用<code>WebSocket</code>分发消息的功能，提供“进球抢红包”，“答题抢红包”等一系列活动；</li>
        `,
      content4: `
        <li>抢红包、在线直播+大咖聊天一度吸引了大量粉丝关注，大大提升了我司产品知名度、公众号关注度，有效地提高球迷参与积极性及App、公众号的用户活跃度；</li>
        <li>项目初期部署在我司自行搭建的服务器上，后续因访问增加，改为采用《环信即信通信云》。</li>
      `
    },
    {
      'title': '',
      'companyTime': '',
      'techKey': '',
      'content1': '',
      'content2': ''
    }
  ],
  'evaluation': {
    'desc': `
      <div>
         <li>在蜂助手就职期间，推动<code>Vue</code>及周边生态(如<code>Vuex</code>, <code>Vux.UI</code>, <code>iView.UI</code>)等技术的应用，推翻了<code>Angular.js</code>,<code>Require.js</code>等技术的使用，
         并在公司举办了<b><code>Vue</code>技术应用与深入</b>, <b>前端自动化测试Korma与mock.js</b>等培训客程，荣获过一次最佳员工称号；</li>
         <li>在城市热点就职期间，使用<code>PHP, MySql, Ext.js, Angular.js</code>独自负责<b><code>Eportal WIFI</code>运营网关系统</b>多个版本的前后端开发，该产品广受客户好评，项目组也多次获得公司最佳项目组称号，
         本人连续两年获得最佳员工称号；</li>
         <li>拥有6年+的前端开发经验、熟悉主流的 <code>Vue</code>, <code>React</code>及其周边生态技术的开发；</li>
         <li>熟悉 <code>JavaScript</code>面对对象开发及设计模式，<code>ECMAScript</code>各类版本语法，<code>TypeScript</code>开发；</li>
         <li>熟悉微信公众号、小程序等开发，<code>iView-UI</code>, <code>Ant-Design</code>使用，各种前端工具库如 <code>Day.js</code>, <code>crypto-js加密库</code>, <code>Axios</code>, <code>lodash</code>等</li>
         <li>有<code>PHP</code>, <code>Node.js</code>, <code>MySql</code>等后台开发经验，掌握<code>wireShark</code>, <code>Charles</code>等前端抓包、参数注入等工具；</li>
      </div>
    `
      // '6年+前端开发经验，对JavaScript面向对象开发及ECMAScript高版本语法有着深刻理解，熟悉主流的Vue、React及周边生态开发，
    // 对其实现原理有进一步理解。熟悉微信公众号、小程序等开发，亦对流行的如快应用、各家小程序开发不抗拒。 熟悉各类前端UI框架的使用、
    // 开发，如ElementUI、Ant-Design等，有自己研发的UI框架，戳XXXX在《城市热点公司》使用过PHP+MYsql进行过后台开发，对后端开发有
    // 一定的感知。在《际讯有限公司》使用Grunt.js等打包工具构建过公司大量的活动前端项目，实现了项目的生产自动化，提高项目生产率及产品质量。
    // 使用WebSocket+Socket.索钻石研的欲望，有较强的英语阅读文档能力，环境适应能力转高，能短时间融入团队并参与开发，富有耐心与责任心，
    // 在以上任职的三家公司期间均担任过团队负责的角色，对项目管理、进度把控，人力管理方面均有相关经验。目前
    // 的求职方向是以Vue.js、React.js为基础的前端开发，多客户端开发、各大公众平台、各厂商小程序开发等。对大前端开发（以Node.js、GoLang等脚本语言作后台开发亦可胜任，希望能收到您的回复。'
  }
}
