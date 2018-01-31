var a = [];
var asd = [];
$("#add").on("click", function() {
	var inputf = $("#first_name").val();
	var inputs = $("#video_title").val();
	var inputp = $("#publisher").val();
	var inputer = [inputf,inputs,inputp];
	
	
	
	
	$( "#lister" ).append( "<tr><td>"+inputf+"</td><td>"+inputs+"</td><td>"+inputp+"</td></tr>" );
	console.log(a);
});
$("#countout").on("click", function() {
	for (var i=0; i<6; i++){
		asd.push("Player"+i);
		$( "#counter" ).append( "<p data-name='"+asd[i]+"'>"+asd[i]+"</p>" );
		console.log(asd);
	};
});
$("#remove").on("click", function() {
	
	var val = $("#player_name").val();
	
	for (var i=0; i<asd.length; i++){
		if (val == asd[i]){
			
			 $("p[data-name='"+asd[i]+"']" ).remove();
			asd.splice(i,1);
		}
		
		
		
		
		console.log(asd);
	};
});

var list = [];

$("#txtAdd").on("keyup", function (e){
	
	
if(e.keyCode == "13"){
	
	var add = $("#txtAdd").val();
	console.log(add);
	
	$("ul").append("<li>"+add+"</li>");
	
	list.push(add);
	$(this).val("");
	}
});

$("#txtRemove").on("keyup", function(){
	var  remove = $(this).val();
	console.log("keyup");
	
	
	for (var i=0; i< list.length; i++){
		if (list[i] == remove) {
			list.splice(i,1);
			
			$("ul").html("");
			
			for (x=0; x<list.length; x++){
				$("ul").append("<li>"+list[x]+"</li>");
				
			}
			$(this).val("");
		}
	}
});



