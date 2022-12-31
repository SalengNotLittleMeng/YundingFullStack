var fn = function (Mstr, Sstr) {
            let count = 0;
            for (let i = 0; i < Mstr.length; i++) {
                let Flag = true;
                let m = i;
                for (let n = 0; n < Sstr.length; n++, m++) {
                    if (Mstr[m] !== Sstr[n]) {
                        Flag = false;
                        break;
                    }
                }
                if (Flag === true) {
                    count++;
                }
            }
            return count;
        }

        let a = prompt("请输入母串")
        let b = prompt("请输入子串")
        document.write(fn(a, b));