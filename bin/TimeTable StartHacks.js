(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.starthacksbackgroundmichellewong = function() {
	this.initialize(img.starthacksbackgroundmichellewong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5120,2880);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Element = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.Time = new cjs.Text("", "20px 'Sinkin Sans 200 X Light'", "#FFFFFF");
	this.Time.name = "Time";
	this.Time.textAlign = "right";
	this.Time.lineHeight = 34;
	this.Time.lineWidth = 211;
	this.Time.parent = this;
	this.Time.setTransform(167.1,-12.6,0.784,0.784);

	this.TimeTitle = new cjs.Text("", "40px 'Sinkin Sans 200 X Light'", "#FFFFFF");
	this.TimeTitle.name = "TimeTitle";
	this.TimeTitle.lineHeight = 66;
	this.TimeTitle.lineWidth = 629;
	this.TimeTitle.parent = this;
	this.TimeTitle.setTransform(210.1,-25.1,0.784,0.784);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2A3QgYgXAAggQAAggAYgWQAWgYAgAAQAhAAAWAYQAYAWAAAgQAAAggYAXQgWAYghAAQggAAgWgYg");
	this.shape.setTransform(186.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.TimeTitle},{t:this.Time}]}).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F729F").s().p("EgoaAF+IAAr7MBQ0AAAIAAL7g");
	this.shape_1.setTransform(290.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F729F").s().p("AhuBvQguguAAhBQAAhAAugvQAugtBAAAQBBAAAtAtQAvAvAABAQAABBgvAuQgtAuhBAAQhAAAgugug");
	this.shape_2.setTransform(186.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Element, new cjs.Rectangle(0,-38.1,705,76.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.title = new cjs.Text("StartHacks", "100px 'Sinkin Sans 300 Light'", "#FFFFFF");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 162;
	this.title.lineWidth = 645;
	this.title.parent = this;
	this.title.setTransform(0,-80);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-324.6,-82,649.3,164), null);


(lib.Header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.title = new lib.Symbol1();
	this.title.parent = this;
	this.title.setTransform(360.1,260.1,0.783,0.783,0,0,0,0.1,2.3);

	this.instance = new lib.starthacksbackgroundmichellewong();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.141,0.141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.title}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Header, new cjs.Rectangle(0,0,720,405), null);


// stage content:
(lib.TimeTableStartHacks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var titleA=["Registration","Closing Ceremonies","Workshop 1","Workshop 2","Workshop 3","Judging Period","Team Building","Cup Stacking","Saturday Lunch","Satuday Dinner","Sunday Breakfast","Sunday Dinner","Snack 1","Snack 2","Snack 3","Registration Period"]
		var timeA=["10:00am","12:00pm","1:30pm","1:30pm","2:30pm","5:30pm","6:30pm","8:00pm","10:30pm","3:00am","7:00am","1:30pm","1:30pm","3:00pm","4:30pm","6:00pm"]
		var held = false
		var lastMouseY = 0;
		var MouseY = 0;
		var offset = 0;
		var field = new createjs.Container();
		var header = new lib.Header();
		var headerC = new createjs.Container();
		
		function Main(){
			console.log("Main::started");
			field.z = 
		
			createjs.Touch.enable(stage);
			
			stage.addChild(field);
			stage.addChild(headerC);
			for(var i = 0; i < 16; i++){
				console.log("running")
				var elm = new lib.Element();
				elm.x = 0;
				elm.y = (75 + 50) * i + 450;
				elm.TimeTitle.text = titleA[i];
				elm.Time.text = timeA[i];
				elm.cache(0,-38,704,76);
				console.log(elm);
				field.addChild(elm);
				
			}
			header.title.scaleX = field.y/1000 + 1
			header.title.scaleY = field.y/1000 + 1
			header.y = (field.y/2 - 50)
			header.title.y = (field.y/4 - 225)*-1
			
			header.title.cache(-600/2,-128/2,600,128)
			headerC.addChild(header);
		
		}
		
		function nextFrame(){
			if(header.title.scaleX >= 0.5 && header.title.scaleX <= 1){
				
				header.title.scaleX = field.y/1000 + 1
				header.title.scaleY = field.y/1000 + 1
				if(header.title.scaleX > 1){
					header.title.scaleX = 1
					header.title.scaleY = 1
				}
				else if(header.title.scaleX < .5){
					header.title.scaleX = .5
					header.title.scaleY = .5
				} else{
					header.y = (field.y/2 - 50)
					header.title.y = (field.y/4 - 225)*-1
				}
				
			}
			
		}
		
		field.addEventListener("mousedown", function(evt){
			console.log("MouseDown");
			offset = (evt.stageY/2) - field.y;
		});
		field.addEventListener("pressmove", function(evt) {
			console.log("MouseMove");
			field.y = (evt.stageY/2) - offset;
			if(field.y >0){
				field.y = 0;
			}else if(field.y < -1500){
				field.y = -1500;
			}
			nextFrame();
		});
		
		var main = new Main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAAAhj/MAAADH/");
	this.shape.setTransform(188,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(547,219,2,1282);
// library properties:
lib.properties = {
	width: 720,
	height: 1000,
	fps: 60,
	color: "#4F729F",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/starthacksbackgroundmichellewong.jpg", id:"starthacksbackgroundmichellewong"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;