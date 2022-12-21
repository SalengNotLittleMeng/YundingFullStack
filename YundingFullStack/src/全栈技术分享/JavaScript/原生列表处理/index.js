function render() {
    // res是从后端获取过来的数据，其中id是后端给你的一个代表本条数据的唯一值，这点要跟后端协商好
    let res = [{ name: 'sam', age: 12, id: 1 }, { name: 'amy', age: 14, id: 2 }, { name: 'hell', age: 15, id: 3 }]
    let outer = document.getElementById("main")
    let buf = ''
    for (let i = 0; i < res.length; i++) {
        buf += `
        <div class="item">
            <div>
            <span>姓名：</span><span>${res[i].name}</span>
            <span>年龄：</span><span>${res[i].age}</span>
            </div>
            <div class='submit' desc='${res[i].id}'>同意</div>
            <div desc='${res[i].id}'>删除</div>
        </div>
            `
    }
    // 在html中的desc是一个自定义的属性，用来保存id，便于操作，注意自定义属性的取值要使用getAttribute
    outer.innerHTML = buf
}
render()
    // 这里使用事件委托，用大盒子来监听每一个列表
document.getElementById('main').addEventListener('click', (e) => {
    let id = null;
    // e.target表示当前点击的元素
    if (e.target.innerHTML == '同意') {
        e.target.innerHTML = '已同意'
        id = e.target.getAttribute('desc')
            // 使用axios将这个参数id传到后端，让后端执行同意的代码修改数据库，这里省略
            //注意实际写的时候可以将更新按钮为已同意的代码写在请求成功的回调函数中，下面的删除同理，这样有利于在后端处理失败时给用户反馈。但也可以先更新视图再给后端发送请求，有利于用户体验
    } else if (e.target.innerHTML == '删除') {
        id = e.target.getAttribute('desc')
            // 下面这句是让本条记录在点击后消失， e.target.parentNode表示当前点击的删除按钮对应的一整条记录，通过JS选择父节点来得到，具体代码要看项目的html结构
        e.target.parentNode.style.display = 'none'
            // 使用axios将参数id传到后端，让后端执行删除本条数据的请求，这里省略
    }
})