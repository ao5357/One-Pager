jQuery(document).ready(function($){
	// Placeholder polyfill
	if(!("placeholder" in document.createElement("input"))){
		$("input[placeholder]").each(function(){
			$this = $(this), val = $this.attr("placeholder");
			$this.val(val).css("color","#aaa")
				.focus(function(){
					$this.css("color","#000");
					if($this.val() == val){$this.val("");}
					})
				.blur(function(){
					if($this.val() == ""){$this.val(val).css("color","#aaa");}
					});
			});
		}

	$articles = $("article");
		$articles.find(".content").addClass("hide");
		$articles.on("click","h2",function(e){
			var imgspans = $(this).siblings(".content").toggleClass("hide slide-down").find("span[data-img-src]");
			imgspans.each(function(){
				var $this = $(this), imgSrc = $this.attr("data-img-src");
				$this.replaceWith('<img src="' + imgSrc + '" alt="" />');
				});
			});

	var $slider = $('.slider'), offset = 0;
	window.setInterval(function(){
		$slider.fadeOut("slow", function(){
			$slider.css("background-position","-" + offset + "px 0").fadeIn("fast");
			});
		offset = (offset + 280) % 840;
		}, 6000);
});