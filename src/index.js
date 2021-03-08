import './main.sass'

const content= document.getElementById('content');
const qqq= document.getElementById('qqq')
qqq.addEventListener('click', ()=>{
	content.style.left= -100 + '%'
})


  $( function() {
    $( ".datepicker" ).datepicker({
      showWeek: true,
      firstDay: 1,
    });
  } );
  

 
