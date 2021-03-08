import './main.sass'

const content= document.getElementById('content');
const qqq= document.getElementById('qqq')
qqq.addEventListener('click', ()=>{
	content.style.left= -400 + 'px'
})


  $( function() {
    $( ".datepicker" ).datepicker({
      showWeek: true,
      firstDay: 1,
    });
  } );
  

 
