const express = require('express');
const userHandler = require('../router_handler/user');
const userRouter = express.Router();
//（增post删delete改patch/put查get）
// 根据 ID 查询
userRouter.get('/api/admin/users/id',userHandler.getUserById)

// 添加用户
userRouter.post('/api/admin/register',userHandler.addUser)


// 删除用户信息
userRouter.delete('/api/admin/users/:id',userHandler.deleteUser)

// 根据ID 修改用户部分信息
userRouter.patch('/api/admin/users',userHandler.modifyUserById)

// 查询用户列表
userRouter.get('/api/admin/users',userHandler.getUserList)

// 添加用户
userRouter.post('/api/admin/users', userHandler.addUser)

module.exports = userRouter