
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
/*
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Stage}","click",function(sym,e){
	window.open("https://ivendi.com/ivendi-modules/","_blank");
});

//Edge binding end
})("stage");
//Edge symbol end:'stage'
*/
//=========================================================

//Edge symbol: 'close-button'
(function(symbolName){})("close-button");
//Edge symbol end:'close-button'

//=========================================================

//Edge symbol: 'engage-animation'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",21750,function(sym,e){sym.play(1);});
//Edge binding end
})("engage-animation");
//Edge symbol end:'engage-animation'

//=========================================================

//Edge symbol: 'animation-350'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",23000,function(sym,e){sym.play(1);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("animation-350");
//Edge symbol end:'animation-350'

//=========================================================

//Edge symbol: 'line'
(function(symbolName){})("line");
//Edge symbol end:'line'

//=========================================================

//Edge symbol: 'line_1'
(function(symbolName){})("line_1");
//Edge symbol end:'line_1'

//=========================================================

//Edge symbol: 'close-button_1'
(function(symbolName){})("close-button_1");
//Edge symbol end:'close-button_1'
})(jQuery,AdobeEdge,"iVendi-leaderboard-big");