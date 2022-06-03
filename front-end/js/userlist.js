// 先加载 dom ,后执行
$(function () {
    console.log('131 hang');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/admin/users',
        dataType: "json",
        success: function (result) {
            console.log('用户列表为：',result);
            showData(result.data.userlist)
        },
        error: function (e) {
            console.log('userlist err is ', e);
        }
    });
})

$('#btn').click(function () {
    console.log('根据 id 查询用户');
    var id = $("input[name='id']").val();
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/admin/users/id?id='+id,
        async: false, // 关闭异步
        //dataType: "json",
        success: function (result) {
            const user = result.data;
          //  console.log('根据ID 查询结果为： -->', result);
            alert(JSON.stringify(user))

        },
        error: function (e) {
            console.log('err is ', e);
        }
    });
})



function showData(data) {
        $('#tbody').empty();
        for (let i = 0; i < data.length; i++) {
            $('#tbody').append(`
                <tr>
                        <td>
                            ${data[i].id}
                        </td>
                        <td>
                            ${data[i].username}
                        </td>
                        <td>
                            ${data[i].nickname}
                        </td>
                        <td>
                            ${data[i].email}
                        </td>
                        <td>
                            <a href='edit.html?id=${data[i].id}' target="_blank" id="${data[i].id}">编辑</a>
                        </td>
                        <td>
                            <button onclick="del(this)"  value="${data[i].id}">删除</button>
                        </td>
                    </tr>

            `);

        }




}
// 一旦对象被点激，执行指定函数 如何去获得对象 如何指定某个对象

// 实现删除功能
function  del(object) {
    // 获得被点击的对象的 id
    const id =object.value;
    // 根据 id 删除用户
    $.ajax({
        method: 'delete',
        url: 'http://localhost:3000/api/admin/users/'+id,
        async: false,
        success: (res) => {
            console.log(res);
            if(res.code === 1){
                alert('删除成功')
                window.open('index.html','_self')
                return
            }
                alert('删除失败')


        },
        error: (err) => {
            console.log(err);
        }
    })

}

// 打开添加用户页面
$('#addBtn').on('click', () => {
    window.open('addUser.html','_blank')
})