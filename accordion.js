$(document).ready(()=>{

	$('#dropdown1').hide();
	$('#dropdown2').hide();
	$('#dropdown3').hide();


	let counter1 = 0 ;                   
	let counter2 = 0 ;                      //variables to keep track of number of click to hide/show the dropdown on double click.
	let counter3 = 0 ;

	$('#one').click((e)=>{
		e.preventDefault();
		counter1++;
		counter2 = 0;
		counter3 = 0;


		$('#dropdown1').show();
		$('#dropdown2').hide();
	    $('#dropdown3').hide();

	    if(counter1 % 2 == 0){
	    	$('#dropdown1').hide();
	    }else{}

	})

$('#two').click((e)=>{
	e.preventDefault();
	counter2++;

	counter1 = 0;
	counter3 = 0;
		$('#dropdown2').show();
		$('#dropdown1').hide();
	    $('#dropdown3').hide();

	    if(counter2 % 2 == 0){
	    	$('#dropdown2').hide();
	    }else{}


	})


$('#three').click((e)=>{
e.preventDefault();
		counter3++;
		counter1 = 0;
		counter2 = 0;
		$('#dropdown3').show();
		$('#dropdown1').hide();
		$('#dropdown2').hide();
	    

	    if(counter3 % 2 == 0){
	    	$('#dropdown3').hide();
	    }else{}


	})

})