function tabuada(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('tab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var cont = 1; cont <= 10; cont++){
            var item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            tab.appendChild(item)
        }
    }
}