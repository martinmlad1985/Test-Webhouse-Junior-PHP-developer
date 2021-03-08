import './main.sass'

const content= document.querySelector('.content')

const tap= document.getElementById('tap')
tap.addEventListener('click', ()=>{
	content.style.left= -100 + '%'
})

const cross= document.querySelector('.cross')
cross.addEventListener('click', ()=>{
	content.style.left= 0 + '%'
})


  $( function() {
    $( ".datepicker" ).datepicker({
      showWeek: true,
      firstDay: 1,
    });
  } );
  

 
