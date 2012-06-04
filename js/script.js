
//#production_mondial

var hectolitreVin = 260 ;
var hectolitreBiere = 1400;

var hectolitreCalcule1 = 0 ;
var hectolitreCalcule2 = 0 ;

var hauteurBiere = 605;
var hauteurVin = hauteurBiere*260/1400;

var hauteurAnimation2 = 675;
var placementTirets21 = hauteurAnimation2 - hauteurVin - 30;
var placementTirets22 = hauteurAnimation2 - hauteurBiere - 30;

$(document).ready(function(){

	 $('#nbBiere2').text(0);
	var t1 =setInterval(function(){
				hectolitreCalcule1+=2;
                 $('#nbVin2').text(hectolitreCalcule1);
                 if(hectolitreCalcule1==hectolitreVin){
	                 clearInterval(t1);
                  	hectolitreCalcule1 = hectolitreVin;}
				}, 1);

	$('#biere_2 img').height(0);
	$('#tiret21').css({"marginTop":""+(hauteurAnimation2-25)+"px"});
	$('#tiret22').css({"marginTop":""+(hauteurAnimation2-25)+"px"});

	$('#tiret21').animate({"marginTop": ""+placementTirets21+"px"},2000,'easeInOutExpo');
	$('#vin_2 img').height(0).animate({'height':'+='+hauteurVin+'px'}, 2000, 'easeInOutExpo', function(){
		$('#biere_2 img').animate({'height':'+='+hauteurBiere+'px'}, 3000,'easeInOutExpo');
		$('#tiret22').animate({"marginTop": ""+placementTirets22+"px"},3000,'easeInOutExpo',function(){
			$('#nbBiere2').text(hectolitreCalcule2);
		});

		var t2 =setInterval(function(){
				hectolitreCalcule2+=3;
                  $('#nbBiere2').text(hectolitreCalcule2);
                  if(hectolitreCalcule2>hectolitreBiere-3){
                  		
                  		hectolitreCalcule2 = hectolitreBiere;
	                  	clearInterval(t2);
                  		}
				}, 1);
	});

	data_production();
	import_export();
	more_consume();
});


//#import_export
function data_production(){
	var data_production_wine= new Array(50.50,47.12,36.45,23.00,15.50,14.50,10.50,9.62,8.33,8.28);
	var data_production_beer= new Array(50.50,47.12,36.45,23.00,15.50,14.50,10.50,9.62,8.33,8.28);
	for (var i=0;i<10;i++){
		$("#production_vin li.diagram").eq(i).animate({
			width: data_production_wine[i]*4+"px"
		}, 1500, 'easeInOutQuint');
		$("#production_biere li.diagram").eq(i).animate({
			width: data_production_wine[i]*4+"px"
		}, 1500, 'easeInOutQuint');
	}
}
function import_export(){
	var data_import_wine= new Array(37,6.8,6.6,6.3,5.6,5.2,2.5,2.4,2.2,1.1);
	var data_export_wine= new Array(34.9,18.0,9.3,8.7,4.3,3.6,3.5,3.0,2.4,1.8);
	var data_export_beer= new Array(21,19,13,5,4.9,4,3.4,2.8,2.5,2.1);
	for (var i=0;i<10;i++){
		$("#biere_import li.diagram").eq(i).animate({
			width: data_import_wine[i]*13+"px"
		}, 1500, 'linear');
		$("#biere_export li.diagram").eq(i).animate({
			width: data_export_wine[i]*13+"px"
		}, 1500, 'linear');
		$("#vin_export li.diagram").eq(i).animate({
			width: data_export_beer[i]*13+"px"
		}, 1500, 'linear');
	}
}

function more_consume(){
	// var data_beer_more_consum = new Array(45,42,46,42,36,40,40,36),
	// 	data_wine_more_consum = new Array(32,34,31,33,39,34,34,35),
	// 	data_liqueur_more_consum = new Array(18,19,18,22,21,22,21,23),
	// 	paper_width = 700,
	// 	paper_height = 500,
	// 	paper = Raphael(document.getElementById("plus_consom"), paper_width, paper_height),
	// 	line_beer = "",
	// 	line_wine = "",
	// 	line_liqueur = "",
	// 	letter,
	// 	abscisse,
	// 	ordonnee = paper.path("M0"+" "+paper_height+"L0 0"),
	// 	abscisse = paper.path("M0"+" "+paper_height+"L"+paper_width+" "+paper_height),
	// 	ordonnee_50 = paper.path("M0 1L5 1"),
	// 	ordonnee_25 = paper.path("M0 "+paper_height/2+"L5 "+paper_height/2),
	// 	abscisse_1999 = paper.path("M"+((paper_width/8)*1)+" "+paper_height+"L"+((paper_width/8)*1)+" "+(paper_height-5)),
	// 	abscisse_2001 = paper.path("M"+((paper_width/8)*2)+" "+paper_height+"L"+((paper_width/8)*2)+" "+(paper_height-5)),
	// 	abscisse_2003 = paper.path("M"+((paper_width/8)*3)+" "+paper_height+"L"+((paper_width/8)*3)+" "+(paper_height-5)),
	// 	abscisse_2005 = paper.path("M"+((paper_width/8)*4)+" "+paper_height+"L"+((paper_width/8)*4)+" "+(paper_height-5)),
	// 	abscisse_2007 = paper.path("M"+((paper_width/8)*5)+" "+paper_height+"L"+((paper_width/8)*5)+" "+(paper_height-5)),
	// 	abscisse_2009 = paper.path("M"+((paper_width/8)*6)+" "+paper_height+"L"+((paper_width/8)*6)+" "+(paper_height-5)),	
	// 	abscisse_2011 = paper.path("M"+((paper_width/8)*7)+" "+paper_height+"L"+((paper_width/8)*7)+" "+(paper_height-5));
	// 	for (var i=1;i<=7;i++){
	// 		//M : point d'origine, L : point d'arrivée en absolute
	// 		if (i==1){letter="M"}else{letter="L"};
	// 		//Courbes
	// 		line_beer += letter+i*(paper_width/8)+" "+(paper_width-((data_beer_more_consum[i]*paper_width)/50));
	// 		line_wine += letter+i*(paper_width/8)+" "+(paper_width-((data_wine_more_consum[i]*paper_width)/50));
	// 		line_liqueur += letter+i*(paper_width/8)+" "+(paper_width-((data_liqueur_more_consum[i]*paper_width)/50));
	// 		//Cercles
	// 		var circle_beer = paper.circle(i*(paper_width/8), paper_width-((data_beer_more_consum[i]*paper_width)/50), 5);
	// 		circle_beer.attr({
	// 			"stroke":"#FCD014",
	// 			"fill":"#FCD014"
	// 		});
	// 		var circle_wine = paper.circle(i*(paper_width/8), paper_width-((data_wine_more_consum[i]*paper_width)/50), 5);
	// 		circle_wine.attr({
	// 			"stroke":"#8F0F0B",
	// 			"fill":"#8F0F0B"	
	// 		});
	// 		var circle_liqueur = paper.circle(i*(paper_width/8), paper_width-((data_liqueur_more_consum[i]*paper_width)/50), 5);
	// 		circle_liqueur.attr({
	// 			"stroke":"#A2D4DD",
	// 			"fill":"#A2D4DD"	
	// 		});
	// 	}
	// 	var beer_path = paper.path(line_beer);
	// 	beer_path.attr({
	// 		"stroke":"#FCD014",
	// 		"stroke-width":"5"	
	// 	});
	// 	var wine_path = paper.path(line_wine);
	// 	wine_path.attr({
	// 		"stroke":"#8F0F0B",
	// 		"stroke-width":"5"	
	// 	});
	// 	var liqueur_path = paper.path(line_liqueur);
	// 	liqueur_path.attr({
	// 		"stroke":"#A2D4DD",
	// 		"stroke-width":"5"	
	// 	});
}

//#production_pays


