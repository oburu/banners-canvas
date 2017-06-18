
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_hover-expand}","mouseover",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.$("Stage").animate({"height":"350px","width":"450px"},300);sym.$("background").animate({"top":"0"},300);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hover_out}","mouseout",function(sym,e){sym.stop(0);sym.getSymbol("animation-small").play(1);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("Stage").animate({"height":"250px","width":"300px"},300);sym.$("background").animate({"top":"-75"},300);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){});
//Edge binding end
//Symbol.bindElementAction(compId,symbolName,"${_Stage}","click",function(sym,e){window.open("https://ivendi.com/ivendi-modules/","_blank");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'animation-snall'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14593,function(sym,e){sym.play(1);});
//Edge binding end
})("animation-snall");
//Edge symbol end:'animation-snall'

//=========================================================

//Edge symbol: 'animation-big'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17002,function(sym,e){sym.play(1);});
//Edge binding end
})("animation-big");
//Edge symbol end:'animation-big'

//=========================================================

//Edge symbol: 'line'
(function(symbolName){})("line");
//Edge symbol end:'line'
})(jQuery,AdobeEdge,"mpu-ivendi");