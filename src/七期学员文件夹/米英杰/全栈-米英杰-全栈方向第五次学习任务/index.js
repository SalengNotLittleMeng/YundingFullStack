//不使用字符串函数
function fn1()
{
    let string =document.getElementById("string").value
    let subString =document.getElementById("subString").value
    let count = 0
    let i = 0
    while(true)
    {
        let flag = true
        if (string[i] == subString[0])
        {
            let j = i + 1, k = 1
            while (true)
            {
                if (subString[k] == undefined)
                {
                    break
                }
                if (string[j] != subString[k])
                {
                    flag = false
                    break
                }
                j++, k++
            }
            if (flag)
            {
                 count++
            }
        }
        i++
        if(string[i] == undefined)
        {
            break
        }
    }
    document.getElementById("result").innerHTML = `子串出现次数:${count}次`
    if (string == ''|| subString == '')
    {
        document.getElementById("result").innerHTML="您有信息未输入"
    }
}

//使用字符串函数
function fn2()
{
    let string =document.getElementById("string").value
    let subString =document.getElementById("subString").value
    let count = 0
    for (let i = 0; i < string.length; i++) 
    {
        let times = 0
        if (string[i] == subString[0]) 
        {
            times++
            for (let j = i + 1, k = 1 ; k < subString.length ; j++, k++) 
            {
                if (string[j] == subString[k]) 
                {
                    times++
                }
            }
            if (times == subString.length) 
            {
                count++
                continue
            }
        }
    }
    document.getElementById("result").innerHTML = `子串出现次数:${count}次`
    if (string == ''|| subString == '')
    {
        document.getElementById("result").innerHTML="您有信息未输入"
    }
}


// fn1(prompt('请输入一个母串：'), prompt('请指定一个子串：'))