var char_mum;
var char_son;
var count=0;
char_mum=prompt('输入母串为：');
char_son=prompt('输入子串为：');
for(let i=0;i<char_mum.length;i++){
    if(char_mum[i]===char_son[0]){
        let k=true;
        for(let j=0;j<char_son.length;j++){
            if(char_mum[i+j]!==char_son[j]){
                k=false;
            }
        }
        if(k){
            count++;
            i+=char_son.length-1;
        }
    }
}
console.log('输入母串为：'+char_mum+'\t输入子串为：'+char_son+'\n子串出现次数：'+count);
