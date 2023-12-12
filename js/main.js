

// var contaner=' '; 
// for(var i = 0 ; i<=10 ; i++)
//         {
//             contaner+=`
//             <div class="text-center w-50 m-auto active">
//             <p class="text-white-50 py-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique ex autem harum deserunt asperiores quos ab dolor sapiente expedita doloremque sit sequi, nihil cum! Aliquam cum natus illum.</p>
//             <span class="text-white-50">Lorem, ipsum dolor.</span>
//             </div>
//             `
// }
// document.getElementById('quoteCards').innerHTML=contaner;

var quoteCards= document.getElementById('quoteCards');
    var contaner = [ ] ; 
    var randomNum=Math.random(Math.floor(contaner)*10);
function quoteContaner(){
    for(var i = 0 ; i<=randomNum ; i++)
    {
    var Quote ={
        quoteCards: function quote1(){
        }
    }
    }
    contaner.push(Quote);
    document.getElementById('quoteCards').innerHTML=contaner;
}