const express = require('express');
const userRouter = require("./router/user");
const {urlencoded} = require("express");
const server = express();
const cors = require('cors')

// 中间件：解决Ajax 跨域资源不共享问题
server.use(cors())

// 在路由注册的上方指定中间件
// 该中间件用于解析浏览器传递过来的以 urlencoded 格式的body内的数据
server.use(urlencoded({extended: false}))
// 自定义中间件，处理统一的响应结果数据类型
server.use((req,
            res,
            next) => {

    res.sendResResult = (code=1,msg='成功',data=null) => {
        res.send({
            code: code,
            msg: msg,
            data: data
        })
    }


    next()
})


// 注册指定路由
server.use(userRouter)

server.listen(3000,() => {
    console.log('服务器运行中，地址为：http://localhost:3000');
})
