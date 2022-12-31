function rec() {
    var m_str = prompt('请输入母字符串');
    var c_str = prompt('请输入子字符串');
    var count = 0;
    var m_num = 0;
    var c_num = 0;
    while (m_num !== m_str.length) {
        if (m_str[m_num] == c_str[c_num]) {
            c_num++;
            if (c_num == c_str.length - 1) {
                count++;
                c_num = 0;
            }
        }
        m_num++;
    }
    alert('循环次数为'+count);
}