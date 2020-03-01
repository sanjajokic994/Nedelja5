let app=document.querySelector('#app');
let div1=document.createElement('div');
let forma=document.createElement('form');
let div2=document.createElement('div');
let div3=document.createElement('div');

let pBudzet=document.createElement('p');
let pPrihod=document.createElement('p');
let pRashod=document.createElement('p');

let select=document.createElement('select');
let opc1=document.createElement('option');
let opc2=document.createElement('option');

let unos=document.createElement('input');
let iznos=document.createElement('input');
let dugme=document.createElement('button');

opc1.innerHTML='Prihod';
opc2.innerHTML='Rashod';
unos.placeholder='Opis';
iznos.placeholder='Iznos';
dugme.innerHTML='Sacuvaj';


let pCount=0;
let rCount=0;

dugme.addEventListener('click', dodajElement);

function dodajElement (e){
    e.preventDefault();
   
    let prihodi=[];
    let rashodi=[];
cena=iznos.value;
opis=unos.value;
if(unos.value.trim()==''){
    alert('Unos ne moze biti prazan')
    return
}
if(iznos.value.trim()==''){
    alert('Iznos ne moze biti prazan') 
    return
}
if(iznos.value<=0){
    alert('Iznos mora biti pozitivan!') 
    return  
}

   if(select.value=='Prihod'){
    let prihod={
        text:opis,
        novac:cena
    }
    prihodi.push(prihod)
   
    for(let i=0; i<prihodi.length;i++){
        
        div2.innerHTML+=prihodi[i].text+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+'+'+prihodi[i].novac+'<br/>';
        pCount+=parseInt(prihodi[i].novac);
        pPrihod.innerHTML=pCount
        let procenti=(rCount*100)/pCount
        pRashod.innerHTML=rCount+'\xa0\xa0\xa0'+procenti+'%'
       
    }}
    else{
        let rashod={
            text:opis,
            novac:cena
        }
        rashodi.push(rashod)
        for(let i=0;i<rashodi.length;i++){
          let procenti1=cena*100/pCount 
    div3.innerHTML+=rashodi[i].text+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+'-'+rashodi[i].novac+'\xa0\xa0\xa0'+procenti1+'%'+'<br/>'
    // div3.innerHTML+='<pre>'+rashodi[i].text          +       rashodi[i].novac+'</pre>'
    rCount+=parseInt(rashodi[i].novac);
    let procenti=(rCount*100)/pCount
    pRashod.innerHTML=rCount+'\xa0\xa0\xa0'+procenti+'%'
    } }
    iznos.value='';
    unos.value='';

    pBudzet.innerHTML=parseInt(pCount-rCount)

    


}

app.appendChild(div1);
app.appendChild(forma);
app.appendChild(div2);
app.appendChild(div3);
div1.appendChild(pBudzet);
div1.appendChild(pPrihod);
div1.appendChild(pRashod);
select.appendChild(opc1);
select.appendChild(opc2);
forma.appendChild(select);
forma.appendChild(unos);
forma.appendChild(iznos);
forma.appendChild(dugme);
