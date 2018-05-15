$(document).ready(()=>{
	$('#popup').hide();

	$("#btn").click(()=>{

		$("#popup").slideDown(100);
		$("a").hide();
		// $("#popup").fadeTo("slow", 0.9);
		// $("#popup").animate.fadeTo({ top: "-10px" }, 'slow');
	})

	$("#closebtn").click(()=>{
		$("#popup").hide();
		$("a").show();
	})

	

})