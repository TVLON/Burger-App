console.log("connected")
$("#addBurger").on("click", function() {
	console.log("hit")
	$.post( "/api/burgers", {burgerName:$("#burgerInput").val()}, function( data ) {
		console.log(data)
		window.location.reload();
	});
})
	
	
	console.log("connected")
$(".burgerDevoured").on("click", function() {
	console.log("hit")
	$.post( "/api/devoure", {id: $(this).attr("data-id")}, function( data ) {
		console.log(data)
		window.location.reload();
	});
})

