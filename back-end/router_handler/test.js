exports.handleIndex = (req,res) => {
    console.log(req.query);
    res.send(
        `我是悟空非空也 `
    )
}

exports.handleHome = (req,res) => {
    res.send('我是城职学生')
}

exports.handleAbout = (req,res) => {
    res.send('关于我的内容')
}