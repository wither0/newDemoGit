$(infoload);

var infoListA;

function infoload(){
  // $.ajax({
  //   url:"",
  //   type:"post",
  //   data:[],
  //   success:function(res){
  //     mainP.infomnlist = res;
  //   }
  // });
  mainP.infomnlist = [
    {
      name:"sock",
      img:"",
      value:"",
      author:"Akira",
      time:"2017.7.15 10:44",
      reconnumb:"52",
      like:"12"
    },{
      name:"sock",
      img:"",
      value:"",
      author:"Akira",
      time:"2017.7.15 10:44",
      reconnumb:"52",
      like:"12"
    },{
      name:"sock",
      img:"",
      value:"",
      author:"Akira",
      time:"2017.7.15 10:44",
      reconnumb:"52",
      like:"12"
    },{
      name:"sock",
      img:"",
      value:"",
      author:"Akira",
      time:"2017.7.15 10:44",
      reconnumb:"52",
      like:"12"
    },{
      name:"sock",
      img:"",
      value:"",
      author:"Akira",
      time:"2017.7.15 10:44",
      reconnumb:"52",
      like:"12"
    },{
      name:"sock",
      img:"",
      value:"",
      author:"Akira",
      time:"2017.7.15 10:44",
      reconnumb:"52",
      like:"12"
    },
  ];
  mainP.Dfiles = {
    title:"sock",
    author:"Akira",
    authead:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg",
    dz:"12",
    time:"2017.7.15 10:44",
    filetype:"image",
    moebeen:0,
    moeB:0,
    data:[
      "../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg"
    ],
    rep:[
      {
        rehead:"../image/8ad4b31c8701a18ba8d8c64c9a2f07082838fe86.jpg",
        reinfo:"ssssad",
        rename:"Akira",
        retime:"2017.7.21 22:44",
        usemoeB:0,
        usemoeBeen:0
      }
    ]
  };
  mainP.$nextTick(function(){
    fixheight();
  });
}

function fixheight(){
  $("#mainfile").height($("#mainimg0").height);
}
