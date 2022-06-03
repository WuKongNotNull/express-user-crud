const connection = require('../db/db.js');

// 根据 ID 查询用户
exports.getUserById = (req, res) => {

    // 从数据库中查询数据,根据指定 id 获得用户信息
    connection.query(
        'select * from `cms_user` where id = ?',
        [req.query.id],
        function (err, results) {
            // 响应给浏览器
            if (err) return res.sendResResult(0, '数据库出现异常', {err: err.message})

            if (results == null || results.length === 0) return res.sendResResult(0,'数据库中不存在该记录')

            res.sendResResult(1,'success',results[0])

        }
    );


}

// 添加用户（注册用户）
exports.addUser = (req, res) => {
    // 添加数据到数据库
    const sql = 'insert into cms_user set ?'  //快捷添加方式
    connection.query(sql,
        req.body,
        (err, results) => {
            if (err) return res.sendResResult(0, '数据库出现异常', {err: err.message})

            if (results.affectedRows === 0) return res.sendResResult(0, '添加用户失败')

            res.sendResResult()

        })
}


// 根据id 来删除用户信息
exports.deleteUser = (req, res) => {
    const sql = 'delete from cms_user where id = ?'
    connection.query(sql, req.params.id,
        (err,
         results) => {

            if (err) return res.sendResResult(0, '出现异常', {err: err.message})

            if (results.affectedRows === 0) return res.sendResResult(0, '删除失败')

            res.sendResResult()

        })

}

// 根据ID 修改用户部分信息
exports.modifyUserById = (req,res) => {
    const modifyUser = req.body;
    // 在数据库中进行修改操作
    const sql = 'update cms_user set nickname = ?,email = ? where id = ?';
    connection.query(sql,[modifyUser.nickname,modifyUser.email,modifyUser.id],(err,results) => {
        if(err) return res.sendResResult(0,'数据库异常',{'errInfo': err.message})
        if (results.affectedRows === 0) return res.sendResResult(0, '修改失败')

        res.sendResResult()


    })

}


// 查询用户列表
exports.getUserList = (req,res) => {
    // 从数据库中查询用户列表
    connection.query(
        'select * from `cms_user`',
        function (err, results) {
            // 响应给浏览器
            if (err) return res.sendResResult(0, '数据库出现异常', {err: err.message})

            if (results == null || results.length === 0) return res.sendResResult(0,'数据库中不存在该记录')

            console.log(results); // 数组
            res.sendResResult(1,'success',{userlist: results})

        }
    );

}

// 添加用户
exports.addUser = (req,res) => {
    console.log('前端项目传递过来的参数为：',req.body);
    // 添加数据到数据库
    const sql = 'insert into cms_user set ?'  //快捷添加方式
    connection.query(sql,
        req.body,
        (err, results) => {
            if (err) return res.sendResResult(0, '数据库出现异常', {err: err.message})

            if (results.affectedRows === 0) return res.sendResResult(0, '添加用户失败')

            res.sendResResult()

        })
}





