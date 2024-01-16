function toggleTheme(){
    if( localStorage.getItem("shala-theme") !== null){
      if( localStorage.getItem("shala-theme") === "dark"){
             $("body").addClass("dark");
      }
      else{
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }
  toggleTheme();
  $(".toggle-theme ").on("click",function(){
    $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
        localStorage.setItem("shala-theme","dark");
    }
    else{
        localStorage.setItem("shala-theme","light");
    }
    updateIcon();
  });
  function updateIcon(){
   if($("body").hasClass("dark")){
    $(".toggle-theme i").removeClass("fa-moon");
    $(".toggle-theme i").addClass("fa-sun");
   }
   else{
         $(".toggle-theme i").removeClass("fa-sun");
    $(".toggle-theme i").addClass("fa-moon");
   }
  };

  var counter = function() {
		
		$('#section-counter, .ftco-appointment').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	 //about-pro-active
	 $('.causes_active').owlCarousel({
		loop:true,
		margin:30,
	  autoplay:true,
		navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
		nav:false,
		dots:false,
	  autoplayHoverPause: true,
	  autoplaySpeed: 800,
		responsive:{
			0:{
				items:1,
				nav:false
	  
			},
			767:{
				items:2,
				nav:false
			},
			992:{
				items:3,
				nav:false
			},
			1200:{
				items:3,
			}
		}
	  });
	