$(document).ready(function(){
       	$("#input-search").on("focus",function(){
       		$("li.search").addClass("ativo");
         	}).on("blur",function(){
         		$("li.search").removeClass("ativo");
       	});
       	$(".thumbnails").owlCarousel({
       		margin: 10,
       		loop:true,
       		nav:true,
       		navText: ["Aterior","Próximo"],
       		responsive:{
        		0 :{
        		item: 1
        		},
        		480 :{
                	item: 3
               		},
               		768 :{
        		item: 4
             		},
               		1200 :{
        		item: 6
                	} 
        	}
        });	
});