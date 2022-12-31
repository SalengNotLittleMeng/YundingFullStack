
function inp() {
    let value1 = document.getElementById("mom").value
    let momarr = Array.from(value1)
    let value2 = document.getElementById("son").value
    let sonarr = Array.from(value2)
    let sum=0
    console.log(momarr)
    console.log(sonarr)
    if (value1.length < value2.length) {
        document.write("error")
        return 0
    }
    else {
        for (let i = 0,j=0; i <= value1.length; i++) {
                
            for ( j = 0; j <= value2.length; j++){
                if (sonarr[j] !== momarr[i])
                    break 
                 
            }
           if (j === value2.length) 
                sum++
        }
    }
    console.log()
    let div = document.getElementById("result")
    div.innerText=sum
    return sum
}

