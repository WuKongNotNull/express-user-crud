// 初始化加载页面
$(function () {
    console.log('打开 edit 页面');
    console.log(window.location.href);
    var id = getQueryVariable("id");

    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/admin/users/id?id='+id,
        async: false,
        success: function (res) {
            console.log(res.data);
           // $('#exampleInputUsername').val(res.data.username);
           // $('#exampleInputUsername').value = 'zhangsan';
            $("#exampleInputNickname").val(res.data.nickname);
            $("#exampleInputEmail").val(res.data.email);
            $('#exampleInputId').val(id);
        },
        error: function (err) {
            console.log(err);

        }
    })
})

// 提交表单，进行修改
$('#myModifyBtn').on('click',function () {
    // alert('提交修改操作')
    var serialize = $('#myform').serialize();  // 存放在请求体 body 中
    console.log(serialize);
    $.ajax({
        type: 'patch',
        url: 'http://localhost:3000/api/admin/users',
        data: serialize,
        async: false,
        success: function (res) {
            console.log(res.data);
            window.open('index.html')

        },
        error: function (err) {
            console.log(err);

        }
    })


})

// 如何获得 url 中的 id
function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
