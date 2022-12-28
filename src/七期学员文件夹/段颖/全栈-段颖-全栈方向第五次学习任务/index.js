 let arr = prompt('请输入母串');
        let arr1 = prompt('请输入子串');
        let i,j;//分别为母串遍历计数器，与子串比较时形成的部分母串的子串
        let count = 0;
        for (i = 0; i < arr.length; i++) {//第一遍遍历母串,从第一个字符开始
            for (j= 0; j<arr1.length;j++) {
               if(arr[i+j]!=arr1[j]){
                break;//当有了不同字符退出循环。
               }
            }
             if (j == arr1.length) {
                count++;
            }
        }
        alert('出现的次数为' + count + '次');