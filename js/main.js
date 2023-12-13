
var quoteCards= document.getElementById('quoteCards');
var contaner = [`<div class="text-center w-50 m-auto active">
        <p class="text-white py-3">Beware of what you become in pursuit of what you want.</p>
        <span class="text-white-50">Jim Rohn</span>
        </div>`
        ,
        `<div class="text-center w-50 m-auto active">
        <p class="text-white py-3">It's not what happens to you, but how you react to it that matters.</p>
        <span class="text-white-50">Epictetus</span>
        </div>`
        ,
        `<div class="text-center w-50 m-auto active">
        <p class="text-white py-3">The best revenge is massive success.</p>
        <span class="text-white-50">Frank Sinatra</span>
        </div>`
        ,
        `<div class="text-center w-50 m-auto active">
        <p class="text-white py-3">You miss 100% of the shots you don't take.</p>
        <span class="text-white-50">Wayne Gretzy</span>
        </div>`
        ,
        `<div class="text-center w-50 m-auto active">
        <p class="text-white py-3 ">Resentment is like drinking poison and waiting for your enemies to die.</p>
        <span class="text-white-50">Nelson Mandela</span>
        </div>`
        ,
        `<div class="text-center w-50 m-auto active">
        <p class="text-white py-3">Do not take life too seriously. You will not get out alive.</p>
        <span class="text-white-50">Elbert Hubbard</span>
        </div>` ];

function contanerQount(){
    for(var i=0 ;i<contaner.length; i++)
    {
        var random = Math.round(Math.random()*10);
        if(random<=2){
            document.getElementById('quoteCards').innerHTML=contaner.at(0);
        } 
        else if (random>2 && random <4){
            document.getElementById('quoteCards').innerHTML=contaner.at(1);
        }
        else if(random>=4 && random <6){
            document.getElementById('quoteCards').innerHTML=contaner.at(2);
        }
        else if(random>=6 && random <8){
            document.getElementById('quoteCards').innerHTML=contaner.at(3);
        }
        else if(random>=8 && random <10){
            document.getElementById('quoteCards').innerHTML=contaner.at(4);
        }
        else{
            document.getElementById('quoteCards').innerHTML=contaner.at(5); 
        }
    }
    console.log(random);
}


