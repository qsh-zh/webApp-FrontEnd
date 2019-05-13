x = new Array();
y = new Array();
z = new Array();
var vm = new Vue({
    el:"#vm",
    created:function() {
        this.init();
    },
    methods: {
        init: function() {
			console.log("run into init")
            var that = this;
            that.$resource('/api/show_ruberAll').get().then(
                function(resp) {
                    resp.json().then(function(results) {
						// x.push(results["list"][0]["fields"]["ruber_date"])
						// y.push(results["list"][0]["fields"]["ruber_price"])
                        for(var term in results["list"])
                        {
							// console.log(term);
                            x.push(results["list"][term]["fields"]["ruber_date"]);
                            y.push(results["list"][term]["fields"]["ruber_price"]);
                            z.push(results["list"][term]["fields"]["ruber_price"]+ Math.random() * 100000000)
						}
						// console.log("zqssssssssss")
						// console.log(results["msg"])
						// console.log(results)
						// console.log(results["list"][0]["fields"]["ruber_price"])
						// console.log(x)
                        
                    })
                }
            )
        }
    }
})
var myChart = echarts.init(document.getElementById('Linegraph'));
var option = {
    title : {
        text : '天然橡胶价格图'
    },
    tooltip : {
        trigger : 'axis'
    },
    legend: {
        data:['真实橡胶价格图','预测橡胶价格图']
    },
    xAxis : {
        data : x
    },
    yAxis : {
        type: 'value'
        // min : 0,
        // splitLine : {
        //     show : true
		// }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox : {
        left : 'right',
        feature : {
            dataZoom : {
                yAxisIndex : 'none'
            },
            restore : {},
            saveAsImage : {}
        }
    },
    dataZoom : [ {
        start : 0,
        end : 100,
    }, {
        type : 'inside'
    } ],
    // visualMap : {
    //     top : 370,
    //     right : 0,
    //     pieces : [ {
    //         gt : 1500,
    //         lte : 1800,
    //         color : '#069911'
    //     }, {
    //         gt : 1800,
    //         lte : 2100,
    //         color : '#069911'
    //     }, {
    //         gt : 2100,
    //         lte : 2400,
    //         color : '#069911'
    //     }, {
    //         gt : 2400,
    //         lte : 2700,
    //         color : '#069911'
    //     }, {
    //         gt : 2700,
    //         lte : 3000,
    //         color : '#99193a'
    //     }, {
    //         gt : 3000,
    //         color : '#7e0023'
    //     } ],
    //     outOfRange : {
    //         color : '#999'
    //     }
    // },
    color:['red', 'green'],
    series : 
    [
                {
                name : '真实橡胶价格图',
                type : 'line',
                data: y,
                markLine : {
                    silent : true,
                    data : [ {
                        yAxis : 8
                    }, {
                        yAxis : 10
                    }, {
                        yAxis : 12
                    }, {
                        yAxis : 13
                    }, {
                        yAxis : 14
                    }, {
                        yAxis : 15
                    } ]
                }
            },

            {
            name : '预测橡胶价格图',
            type : 'line',
            data: z,

        }
]
};
console.log("zzzz888888")
console.log(option);
// window.onload = function() {

// }