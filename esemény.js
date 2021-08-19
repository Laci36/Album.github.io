let adatok = [
    { kép : '1.jpg' , cím : 'Induló kép' ,  leírás : 'A hegy és vízpart '   },
    { kép : '2.jpg' , cím : 'Második kép' ,  leírás : 'A hegy és vízpart '   },
    { kép : '3.jpg' , cím : 'Harmadik kép' ,  leírás : 'A hegy és vízpart '   },
    { kép : '4.jpg' , cím : 'Negyedik kép' ,  leírás : 'A hegy és vízpart '   },
    { kép : '5.jpg' , cím : 'Ötödik kép' ,  leírás : 'A hegy és vízpart '   },
    { kép : '6.jpg' , cím : 'Hatodik kép' ,  leírás : 'Szikla '   },
    { kép : '7.jpg' , cím : 'Hetedik kép' ,  leírás : 'A hegy és vízpart '   },
    { kép : '8.jpg' , cím : 'Utolsó kép' ,  leírás : 'A hegy és vízpart '   },
]
let forrás = 0
let aktuális = 0
let vált = aktuális
$("#kicsik img:eq("+vált+")").addClass('keret')


function csökken(){
    if (vált < 1){
        vált = adatok.length-1
    }else {vált--}
    váltás(vált)
}

function növel(){
    if (vált < adatok.length-1){
        vált++
    } else { vált = 0}
    váltás(vált)
}

function képvált(){
    vált = forrás
    váltás(vált)
}

function váltás(száma) {
    $('#kép').attr('src',adatok[száma].kép)
    $('#kép-cím').text(adatok[száma].cím)
    $('#kép-leírás').text(adatok[száma].leírás)
    $("#kicsik img").removeClass('keret')
    $("#kicsik img:eq("+száma+")").addClass('keret')  
}