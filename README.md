# 前端单元测试
使用jest+enzyme 测试react项目


## Jest 介绍

Jest是Facebook于2015年推出的一个基于Jasmine的JavaScript测试框架。

已经用于React、React Native、Babel、Antd的等项目的测试。

## Jest优点
- 易用性：基于[Jasmine](https://jasmine.github.io/)，自带断言库，支持多种测试风格。开箱即用,配置灵活。
- 沙箱和快照：Jest内置了JSDOM，能够模拟浏览器环境，并且并行执行
- 快照测试：Jest能够对React组件树进行序列化，生成对应的字符串快照，通过比较字符串提供高性能的UI检测
- 高性能：多线程运行，速度更快
- Mock系统：Jest实现了一个强大的Mock系统，支持自动和手动mock
- 支持异步代码测试：支持Promise和async/await
- 自动生成静态分析结果：内置[Istanbul](https://github.com/gotwarlost/istanbul)，测试代码覆盖率，并生成对应的报告

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