 // 基于准备好的dom，初始化echarts实例
 var mapBoxEchart = echarts.init(document.getElementById('mapBox'));

 // 指定相关的配置项和数据
 function randomData() {  
    //随机生成 
    return Math.round(Math.random()*100000);  
 }

 optionChinaMap = {
     tooltip : {
         trigger: 'item'
     },
     legend: {
         orient: 'horizontal',//图例的排列方向
         textStyle: {color:'#fff'},
         x:'left',//图例的位置
         y:'2%',

         data:['xxxx年各地区API调用量']
     },

     visualMap: {//颜色的设置  dataRange
         textStyle: {color:'#fff'},
         x: 'left',
         y: 'bottom',
         
         splitList: [
             {start: 70000},{start: 50000, end: 70000},
             {start: 30000, end: 50000},{start: 10000, end: 30000},
             {start: 5000, end: 10000},{start: 0, end: 5000},
         ],
         // text:['高','低'],// 文本，默认为数值文本
         // color: ['#65A2D9', '#E09107', '#A3E00B']
         color: ['#5475f5', '#9feaa5', '#3FA7FF','#66E0E3', '#FFDC5E', '#9fb5ea']  
     },
    //  roamController: {//控制地图的上下左右放大缩小
    //      show: true,
    //      x: 'right',
    //      mapTypeControl: {
    //          'china': true
    //      }
    //  },
     series : [
         {
             name: 'xxxx年各地区API调用量',
             type: 'map',
             mapType: 'china',

             zoom: 1.1,//初始地图缩放比例
             roam: false,//是否开启鼠标缩放和平移漫游
             showLegendSymbol: false,//是否显示地区圆点
             itemStyle:{//地图区域的多边形 图形样式
                 normal:{//是图形在默认状态下的样式
                    
                    label:{
                         show: false,//是否显示地区名称
                        //  textStyle: {color: "rgb(249, 249, 249)"}
                    },
                    //  areaColor: "rgb(28, 241, 39)", //区域颜色
                 },
                 emphasis:{//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    
                    label:{
                        show:true,
                    },
                    textStyle: {color: "#fff"}
                 }
             },
             top:"5%",//组件距离容器的距离
             data:[
                 {name: '北京',value: randomData() },{name: '天津',value: randomData() },  
                 {name: '上海',value: randomData() },{name: '重庆',value: randomData() },  
                 {name: '河北',value: randomData() },{name: '河南',value: randomData() },  
                 {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },  
                 {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },  
                 {name: '安徽',value: randomData() },{name: '山东',value: randomData() },  
                 {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },  
                 {name: '浙江',value: randomData() },{name: '江西',value: randomData() },  
                 {name: '湖北',value: randomData() },{name: '广西',value: randomData() },  
                 {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },  
                 {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },  
                 {name: '吉林',value: randomData() },{name: '福建',value: randomData() },  
                 {name: '贵州',value: randomData() },{name: '广东',value: randomData() },  
                 {name: '青海',value: randomData() },{name: '西藏',value: randomData() },  
                 {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },  
                 {name: '海南',value: randomData() },{name: '台湾',value: randomData() },  
                 {name: '香港',value: randomData() },{name: '澳门',value: randomData() }  
             ]
         }
     ]
 };

 mapBoxEchart.setOption(optionChinaMap, true);
 // echart图表自适应
 window.addEventListener("resize", function() {
     mapBoxEchart.resize();
 });