let motherstr = prompt("请输入母串");
let childstr = prompt("请输入子串");
let motherindex = 0;
let childindex = 0;
let count = 0;
while(motherindex<motherstr.length){
    if (childstr[childindex]===motherstr[motherindex])
    {
        motherindex++;
        childindex++;
        if(childindex===childstr.length)
        {
            count++;
            childindex = 0;
        }
    }
    else
    {
        motherindex++;
        childindex=0;
    }
}
console.log("母串中子串的个数为：",count);