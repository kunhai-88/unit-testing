# 前端单元测试
前端单元测试技术选型

## 单元测试
单元测试是对软件组成单元进行测试。单元可以是一个函数，也可以是一个模块或一个组件，基本特征就是只要输入不变，必定返回同样的输出。软件越容易写单元测试，就表明它的模块化结构越好，给模块之间的耦合越弱。React的组件化和函数式编程，天生适合进行单元测试。

## 前端为什么要进行单元测试？
1. 发现被测代码与预期功能的是否有差异，验证代码的正确性。
2. 作为代码行为的描述和使用示例，便于以后修改和重构, 减少维护成本，降低重构难度。
3. 促使开发者写可测试的代码，加深我们对业务的理解。


## Jest 介绍

Jest是Facebook于2015年推出的一个基于Jasmine的JavaScript测试框架。

已经用于React、React Native、Babel、Antd的等项目的测试。

## Jest优点
- 易用性：基于[Jasmine](https://jasmine.github.io/)，自带断言库，测试覆盖率工具([Istanbul](https://github.com/gotwarlost/istanbul))。开箱即用,配置灵活。
- 沙箱和快照：Jest内置了JSDOM，能够模拟浏览器环境，并且并行执行
- 快照测试：Jest能够对React组件树进行序列化，生成对应的字符串快照，通过比较字符串提供高性能的UI检测
- 高性能：多线程运行，速度更快
- Mock系统：Jest实现了一个强大的Mock系统，支持自动和手动mock
- 支持异步代码测试：支持Promise和async/await

## Enzyme 介绍

Enzyme是Airbnb开源的React测试工具库库，它对官方的测试工具库ReactTestUtils的二次封装，提供了一套简洁强大的 API，并内置Cheerio
实现了jQuery风格的方式进行DOM 处理，开发体验十分友好。在开源社区有超高人气，同时也获得了React 官方的推荐。

## Tip 
- snapshot测试recompose的组件需使用enzyme的mount方法, shallow方法不能得到预期的结果
- 

## 资料


[star-history](https://star-history.t9t.io/#jasmine/jasmine&facebook/jest&mochajs/mocha&karma-runner/karma&airbnb/enzyme&avajs/ava)

[关于前端开发谈谈单元测试](https://segmentfault.com/a/1190000000317146)

[前端测试框架 Jest](https://zhuanlan.zhihu.com/p/28247899)

[使用 Jest 和 Enzyme 测试 React 组件](https://zhuanlan.zhihu.com/p/63297384)

[前端测试金字塔：重新思考你的测试](https://www.jianshu.com/p/7b163a97691a)

[最好用的JavaScript测试框架大盘点](https://mp.weixin.qq.com/s?src=11&timestamp=1563958194&ver=1747&signature=v2nPt1sRGSk2mCzAG7zq*XFGVP2SeX67H6CVZbYg3tDO2khhntgptMGQ-zZ3Nm*6yYY9eanML4mHGBfAmQXFms5*zyyQXWJxcEsEwFrc*e6AYUViVWdQeJRVq4nMQs4B&new=1)

[代码覆盖率工具 Istanbul 入门教程](http://www.ruanyifeng.com/blog/2015/06/istanbul.html)

[TestPyramid](https://martinfowler.com/bliki/TestPyramid.html)