
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
    var random = Math.floor(Math.random()*contaner.length);
    document.getElementById('quoteCards').innerHTML=contaner[random];
}

