var colPri = "#ff4444";

var navHeight;
var aWelcomePos;
var aPortfolioPos;
var aContactPos;
var $navItem0;
var $navItem1;
var $navItem2;
var projectTiles;

$(document).ready( function(e) {	
	
	$('.nav-link').click( (e) => {
		$('.nav-link').removeClass('active');
		$(e.target).addClass('active');
		
	});
	
	navHeight = $('.navbar').outerHeight(true);	
	aWelcomePos = $("#a-welcome").offset().top - navHeight;
	aPortfolioPos = $("#a-projects").offset().top - navHeight;
	aContactPos = $("#a-contact").offset().top - navHeight;	
	$navItem0 = $(".nav-link:eq(0)");
	$navItem1 = $(".nav-link:eq(1)");
	$navItem2 = $(".nav-link:eq(2)");
	$(window).scroll(onScroll);
	
	projectTiles = document.getElementsByClassName("project-tile");
	for (i = 0; i < projectTiles.length; i++){
    addEventListener(projectTiles[i], () => {
				projectTiles[i].addClass("clicked");
		});
	}
	
});


function onScroll() {
	var scrollPos = $(window).scrollTop();
	
	if (scrollPos > aWelcomePos && scrollPos < aPortfolioPos) {
	  $('.nav-link').removeClass('active');
    $navItem0.addClass('active');								
	}
	
	else if (scrollPos > aPortfolioPos && scrollPos < aContactPos) {
		$('.nav-link').removeClass('active');
    $navItem1.addClass('active');								
	}
	
	else if (scrollPos > aContactPos) {
		$('.nav-link').removeClass('active');
    $navItem2.addClass('active');		
	}
}


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 70,
      "density": {
        "enable": true,
        "value_area": 1400
      }
    },
    "color": {
      "value": colPri
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": colPri
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 50,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 8.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 400,
        "rotateY": 900
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
