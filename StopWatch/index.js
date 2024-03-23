const sayilar = document.body.querySelector("#sayilar");
const basla = document.body.querySelector("#start");
const durdur = document.body.querySelector("#pause");
const sifirla = document.body.querySelector("#reset");
let timer=null;

basla.addEventListener("click",start);
durdur.addEventListener("click",stop);
sifirla.addEventListener("click",reset);

function start(){
    if(timer==null){
        timer = setInterval(()=>{
            let currentInterval = sayilar.innerHTML;
            let zaman = currentInterval.split(":");
            let saniye= Number(zaman[2]);
            saniye+=1;
            zaman[2]=ciftHaneYapma(saniye);
            if(Number(zaman[2])==60){
                let dakika = Number(zaman[1]);
                dakika+=1;
                zaman[1]=ciftHaneYapma(dakika);
                zaman[2]="00";
            }
            if(Number(zaman[1])==60){
                let saat = Number(zaman[0]);
                saat+=1;
                zaman[0]=ciftHaneYapma(saat);
                zaman[1]="00";
            }
            sayilar.innerHTML=zaman[0]+":"+zaman[1]+":"+zaman[2];
        },1000);
    }

}
function stop(){
    clearInterval(timer);
    timer=null;
}
function reset(){
    let currentInterval = sayilar.innerHTML;
    let zaman = currentInterval.split(":");
    zaman[0]="00";
    zaman[1]="00";
    zaman[2]="00";
    sayilar.innerHTML=zaman[0]+":"+zaman[1]+":"+zaman[2];
    stop();
}


function ciftHaneYapma(veri){
    let veriString = String(veri);
    if(veriString.length==1){
        veriString="0"+veriString;
    }
    return veriString;
}