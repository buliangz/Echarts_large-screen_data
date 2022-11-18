///////////////
//           //
//           //
//           //
//  API注册  //
//           //
//           //
//           //
///////////////

function my_Main_1(){
    var chartDom = document.getElementById('leftDiv_lef');
    var myChart_1 = echarts.init(chartDom);
    var option;
    
    
    function randomData() {  
        //随机生成 
        return Math.round(Math.random()*1000);  
     }
     
     
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
    title: {
        text:'API在线数量',
        //   x: '3%',                 // 水平安放位置，默认为左对齐，可选为：
        top:'2%',
        left:'center',
        textStyle: {
                fontSize: 12,
                // fontWeight: 'bolder',
                color: '#fff'          // 主标题文字颜色
            },
    },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['开放API', '合作API', '内部API', '其他API'],
         
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'API',
          type: 'bar',
          barWidth: '60%',
          color:'#9feaa9',
          data: [randomData(), randomData(), randomData(), randomData()]
        }
      ]
    };
    
    
    
    option && myChart_1.setOption(option);
    window.addEventListener("resize", function() {
        myChart_1.resize();
    });
    myChart_1.setOption(option);

}
setInterval("my_Main_1();", 3000);
my_Main_1();



///////////////
//           //
//           //
//           //
//  新增API  //
//           //
//           //
//           //
///////////////

function myMain(){

    var myChart2 = echarts.init(document.getElementById("leftDiv_rig"));

    var data =[];
    var data1=[];
    var data2=[];
    var data3=[];

    function sum(){
        var i=0
        for (i;i<3;i++){
            data[i] = Math.round(Math.random() * 50000) ;
            data1[i] = Math.round(Math.random() * 50000) ;
            data2[i] = Math.round(Math.random() * 50000) ;
            data3[i] = Math.round(Math.random() * 50000) ;
        }
        // i=0;
        
    };
    sum();
    // setInterval(sum(),500);

    option = {
        title:{
            text:"xxxx年新增IPA总量",
            // left:'43%',
            left: 'center',
            top:'2%',
            textStyle: {color:'#fff',fontSize:"ouat"},
            
        },
        xAxis: {
        type: 'category',
        data: ['1-4', '5-8', '9-12']
        },
        yAxis: {
        type: 'value'
        },
        tooltip: {
            trigger: 'axis'
        },
        
        grid: {
            top: '22%',
            left: '5%',
            right: '4%',
            bottom: '5%',
            containLabel: true
        },
        // legend: {
        //     data: ['开放API', '合作方API', '内部API'],
        //     top:'7%',
        //     textStyle: {color: "#fff"}
        // },

        series: [
        {
            name: '开放API',
            // stack: 'Total',
            
            data: data,
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#FFDC5E', //改变折线点的颜色
                    lineStyle: {
                        color: '#FFDC5E' //改变折线颜色
                    }
                } 
            }
        },{
            name: '合作方API',
            // stack: 'Total',
            data: data1,
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#66E0E3', //改变折线点的颜色
                    lineStyle: {
                        color: '#66E0E3' //改变折线颜色
                    }
                } 
            }
        },{
            name: '内部API',
            // stack: 'Total',
            data: data2,
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#9feaa5', //改变折线点的颜色
                    lineStyle: {
                        color: '#9feaa5' //改变折线颜色
                    }
                } 
            }
        },{
            name: '其他API',
            // stack: 'Total',
            data: data3,
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#9fb5ea', //改变折线点的颜色
                    lineStyle: {
                        color: '#9fb5ea' //改变折线颜色
                    }
                } 
            }
        }
        ]
    };
    
    

    // echart图表自适应
    window.addEventListener("resize", function() {
        myChart2.resize();
    });
    myChart2.setOption(option);
}
myMain()


////////////////
//            //
//            //
//            //
//  API占有率  //
//            //
//            //
//            //
////////////////
function my_Main(){
    var myChart3 = echarts.init(document.getElementById("rightDiv_left_to"));
    option = {
      tooltip: {
        trigger: 'item',
        left:'left',
      },
      title: {
        text:'API占有率(%)',
        y:'1.5%',
        x:'center',
        textStyle:{
          color:"#fff",
          fontSize:'14px',
        //   while:'10',
        },
      },
      legend: {
        // top: '5%',
        // left: 'left',
        y:'25%',
        x:'2%',
        orient: 'vertical',
        itemWidth: 15,             // 图例图形宽度
        itemHeight: 12,            // 图例图形高度
        textStyle:{
          color:"#fff",
          fontSize:'10px'
        },
      },
     
      series: [
        {
          name: 'API占有率(%)',
          type: 'pie',
          radius: ['20%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 6,
            borderColor: '#aaa',
            borderWidth: 1,
            
            
          },
          center: ['55%', '55%'],    // 默认全局居中
          label: {
            show: false,
            // position: 'center'
          },
          emphasis: {
            label: {
              // show: true,
              fontSize: '12',
              // fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 50, name: '开放API' },
            { value: 25, name: '合作API' },
            { value: 20, name: '内部API' },
            { value: 5, name: '其他API' },
          ]
        }
      ]
    };
    myChart3.setOption(option);
    window.addEventListener("resize", function() {
      myChart3.resize();
    });
};
my_Main();



///////////////
//           //
//           //
//           //
//  文本轮播  //
//           //
//           //
//           //
///////////////



///////////////
//           //
//           //
//           //
//  API注册  //
//           //
//           //
//           //
///////////////

function my_Main_5(){
    var app = {};

    var chartDom = document.getElementById('rightDiv_rig');
    var myChart5 = echarts.init(chartDom);
    var option;
    
    function randomData() {
      //随机生成
      return Math.round(Math.random() * 10000);
    }
    option = {
      legend: {
        itemWidth: 15,             // 图例图形宽度
        itemHeight: 12,            // 图例图形高度
        textStyle:{
            color:"#fff",
            fontSize:'10px'
        },
        x:'center',
        y:'8%'
      },
      tooltip: {},
      title: {
        text: 'xxxx年API注册量(次)',
        // padding: [10, 0, 0, 25],
        left:'center',
        textStyle:{
            color:"#fff",
            fontSize:'ouat',
            // width: ,
            
        },
        y:'4',
      },
      label: {
        show: true,
        position: 'right',
        color:'#fff',
        // top:'center',
      },
      grid: {
        top: '17%',
        left: '2%',
        right: '10%',
        bottom: '5%',
        containLabel: true,
        
        },
      dataset: {
        dimensions: ['product', '开放API', '合作API', '内部API', '其他API'],
        source: [
          {
            product: '10-12',
            开放API: randomData(),
            合作API: randomData(),
            内部API: randomData(),
            其他API: randomData()
          },
          {
            product: '7-9月',
            开放API: randomData(),
            合作API: randomData(),
            内部API: randomData(),
            其他API: randomData()
          },
          {
            product: '4-6月',
            开放API: randomData(),
            合作API: randomData(),
            内部API: randomData(),
            其他API: randomData()
          },
          {
            product: '1-3月',
            开放API: randomData(),
            合作API: randomData(),
            内部API: randomData(),
            其他API: randomData()
          }
        ]
      },
      xAxis: { type: 'value' },
      yAxis: { type: 'category' },
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };
    
    option && myChart5.setOption(option);
    

    myChart5.setOption(option);
    window.addEventListener("resize", function() {
      myChart5.resize();
    });
}
my_Main_5();






///////////////
//           //
//           //
//           //
//  实时API  //
//           //
//           //
//           //
///////////////
var app = {};

var chartDom = document.getElementById('rightDiv_bot');
var myChart6 = echarts.init(chartDom);
var option;

const categories = (function () {
  let now = new Date();
  let res = [];
  let len = 10;
  while (len--) {
    res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
    now = new Date(+now - 2000);
  }
  return res;
})();
const categories2 = (function () {
  let res = [];
  let len = 10;
  while (len--) {
    res.push(10 - len - 1);
  }
  return res;
})();
const data = (function () {
  let res = [];
  let len = 10;
  while (len--) {
    res.push(Math.round(Math.random() * 1000));
  }
  return res;
})();
const data2 = (function () {
  let res = [];
  let len = 0;
  while (len < 10) {
    res.push(+(Math.random() * 10 + 5).toFixed(1));
    len++;
  }
  return res;
})();
option = {
  title: {
    text: 'API实时调用数据（刷新频率：s）',
    textStyle:{
        color:"#fff",
        fontSize:'14px'
    },
    x:'5%',
    y:'4%'
  },
//   color:'#9fb5ea',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        
        backgroundColor: '#283b56'
      }
    }
  },
  grid: {
    top: '30%',
    left: '5%',
    right: '4%',
    bottom: '5%',
    containLabel: true,
    
    },
  legend: {
    y:'10%',
    x:'right',
    padding: [0,25,0,0], 
    textStyle:{
        color:"#fff",
        
        // fontSize:'14px'
    },
  },
  toolbox: {
    show: true
  },
  dataZoom: {
    show: false,
    start: 0,
    end: 100
    
  },
  
  xAxis: [
    {
      type: 'category',
      boundaryGap: true,
      data: categories
      
    },
    {
      type: 'category',
      boundaryGap: true,
      data: categories2
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      name: '调用次数',
      max: 30,
      min: 0,
      boundaryGap: [0.2, 0.2],
      
    },
    {
      type: 'value',
      scale: true,
      name: '访问量',
      max: 1200,
      min: 0,
      boundaryGap: [0.2, 0.2]
    }
  ],
  series: [
    {
      name: '访问量',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: data
    },
    
    {
      name: '调用次数',
      type: 'line',
      data: data2
    }
  ]
};
app.count = 11;
setInterval(function () {
  let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
  data.shift();
  data.push(Math.round(Math.random() * 1000));
  data2.shift();
  data2.push(+(Math.random() * 10 + 5).toFixed(1));
  categories.shift();
  categories.push(axisData);
  categories2.shift();
  categories2.push(app.count++);
  myChart6.setOption({
    xAxis: [
      {
        data: categories
      },
      {
        data: categories2
      }
    ],
    series: [
      {
        data: data
      },
      {
        data: data2
      }
    ]
  });
}, 2100);

option && myChart6.setOption(option);
window.addEventListener("resize", function() {
    myChart6.resize();
});



