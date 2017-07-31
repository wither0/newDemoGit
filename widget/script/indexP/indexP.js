$(main);

var glbcolor;
var mainP;
var startX = 0;
var startY = 0;
var substate = 0;

function main(){
	init();
	initP();
}

function init(){
	$("body").height($(window).height());
	$("#mainA").height($(window).height()-145);
	$("#mainP").height($(window).height());
	mainP = new Vue({
		el:"#mainP",
		data:{
			glbcolor:"#F0B0B0",
			//----------------------------manulist-------------------------------
			mainmanu:[
				{
					title:"我萌",
					value:"",
					isact:false,
					data:[{
						title:"主页",
						value:"main"
					},{
						title:"我的好友",
						value:"working"
					},{
						title:"我的作品",
						value:"fileL"
					},{
						title:"我的账号",
						value:"user"
					}]
				},
				{
					title:"萌音",
					value:"",
					isact:false,
					data:[{
						title:"VOCALOID",
						value:"working"
					},{
						title:"原创音乐",
						value:"working"
					},{
						title:"声药",
						value:"working"
					},{
						title:"翻唱",
						value:"working"
					}]
				},
				{
					title:"萌画",
					value:"",
					isact:false,
					data:[{
						title:"摸鱼",
						value:"fileL"
					},{
						title:"原画",
						value:"fileL"
					},{
						title:"习作",
						value:"fileL"
					},{
						title:"漫画",
						value:"fileL"
					}]
				},{
					title:"萌文",
					value:"",
					isact:false,
					data:[{
						title:"轻文连载",
						value:"working"
					},{
						title:"脑洞",
						value:"working"
					},{
						title:"随笔",
						value:"working"
					}]
				},{
					title:"萌游",
					value:"",
					isact:false,
					data:[{
						title:"手游推荐",
						value:"working"
					},{
						title:"我要开发",
						value:"working"
					},{
						title:"独立创作",
						value:"working"
					}]
				}
			],
			//----------------------------manulistend-------------------------------
			//----------------------------userinfo----------------------------------
			uinfo : [
				{
					title:"昵称:",
					value:"滑小稽"
				},{
					title:"等级:",
					value:"1"
				},{
					title:"萌点:",
					value:"60"
				},{
					title:"萌币:",
					value:"0"
				}
			],
			uinfoS:{
					title:"热门展示:",
					value:[
						{
							imgsrc:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
						},{
							imgsrc:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
						},{
							imgsrc:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
						}
					],
					signinfo:"苟利国家生死以"
			},
			myzplist:[
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				}
			],
			myfavlist:[
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				}
			],
			mysavelist:[
				{
					name:"",
					value:""
				},
				{
					name:"",
					value:""
				},
				{
					name:"",
					value:""
				}
			],
			isfrds:false,
			//----------------------------userinfoend-------------------------------
			//----------------------------pixinfo-----------------------------------
			picinfo:[
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				}
			],
			musicinfo:[
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				}
			],
			novinfo:[
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				}
			],
			gameinfo:[
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				}
			],
			hotinfo:[
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				},
				{
					name:"",
					value:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
				}
			],
			manulength:0,
			ismenu:false,
			islogin:false,
			isrigi:false,
			searchinfo:"",
			userhead:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg",
			//-------------------------otherpage------------------------------------
			infomnlist:[],
			ordermode:"按时间",
			subactive:false,
			ismore:false,
			//-------------------------filedetail-----------------------------------
			fileactive:"",
			Dfiles:{},
			reqinfo:"",
			//-------------------------loginfo--------------------------------------
			logid:"",
			logpws:"",
			rigid:"",
			rigpws:"",
			rigrepws:"",
			valicode:"",
			//-----------------------pagecon-------------------------------------------
			pagetype:"main"
		},
		methods:{
			liston:function(obj){
				for(var i=0;i<this.manulength;i++){
					if(obj.title!=this.mainmanu[i].title){
						this.mainmanu[i].isact = false;
					}
				}
				obj.isact = !obj.isact;
			},
			searchact:function(searchinfo){
				alert(searchinfo);
			},
			voicestart:function(){

			},
			sendfile:function(){

			},
			logact:function(){
				this.islogin = true;
			},
			rigiact:function(){
				var ruler = "";
				if(this.rigpws == this.rigrepws){
					$.ajax({
						url:"http://127.0.0.1:8080/rig",
						type:"POST",
						data:{
							uname:this.rigid,
							upws:this.rigpws,
							valicode:this.valicode
						},
						success:function(res){
							alert("success");
							this.logid = this.rigid;
							this.logpws = this.rigpws;
							this.isrigi = false;
							logact();
						}
					});
				}
				else{
					alert("密码格式错误或两次输入的密码不符");
				}
			},
			rigishow:function(){
				this.isrigi = true;
			},
			rigihide:function(){
				this.isrigi = false;
			},
			sendnumb:function(){

			},
			orderch:function(){
				if(this.subactive==true){
					this.subactive=false;
				}
				else{
					this.subactive=true;
				}
			},
			chorder:function(ordtype){
				if(ordtype==0){
					this.ordermode = "按时间";
					this.subactive=false;
				}
				if(ordtype==1){
					this.ordermode = "按热度";
					this.subactive=false;
				}
				if(ordtype==2){
					this.ordermode = "按萌币";
					this.subactive=false;
				}
				if(ordtype==3){
					this.ordermode = "按评论数";
					this.subactive=false;
				}
			},
			getmore:function(moretype){

		  },
			chanpage:function(nextpage){
				this.pagetype = nextpage;
			},
			todetail:function(){
				this.pagetype = "filedet";
			}
		}
	});
	mainP.$nextTick(function(){
		var objnumb = $(".detailinfo").length;
//		for(var i=0;i<objnumb;i++){
			$(".detailinfo").height($(".detailinfo").width()*1.3);
//		}
		var hotnumb = $(".hotinfo").length;
//		for(var j=0;j<hotnumb;j++){
			$(".hotinfo").height($(".hotinfo").width()*0.66);
//		}
	});
}

function initP(){
	mainP.manulength = mainP.mainmanu.length;
	$(".glbcolor").css({
		"background-color":mainP.glbcolor
	});
	$(".glbcolorB").css({
		"border-style":"solid",
		"border-width":"1px",
		"border-color":mainP.glbcolor
	});
	$(window).click(function(){
		for(var i=0;i<mainP.manulength;i++){
			if(mainP.ismenu == true && mainP.mainmanu[i].isact == true){
				mainP.mainmanu[i].isact = false;
				mainP.ismenu = false;
			}
			else{
				if(mainP.mainmanu[i].isact == true){
					mainP.ismenu = mainP.mainmanu[i].isact;
				}
			}
		}
	});

	window.ontouchstart = function(e){
		startX = e.touches[0].pageX;
		startY = e.touches[0].pageY;
	}
	window.ontouchmove = function(e){
		if(startX<=30){
			e.preventDefault();
			if(e.touches[0].pageX - startX > 100){
				if(substate == 0){
					showlog();
					substate = 1;
				}
			}
		}
		if(startX>=($(window).width()-30)){
			e.preventDefault();
			if(e.touches[0].pageX - startX < -100){
				if(substate == 1){
					hidelog();
					substate = 0;
				}
			}
		}
	}
}

function showlog(){
	$("#uinfo").animate({"left":"-1px"},1200);
}

function hidelog(){
	$("#uinfo").animate({"left":"-60%"},1200);
}
