/**
 * Created by liuzheng on 4/12/16.
 */
import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers, Response} from 'angular2/http';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoggerService} from './blocks/logger.service';
import  'rxjs/Rx';
declare var jQuery:any;
declare var echarts:any;


@Component({
    template: `<div id="echarts" style="width:800px;height: 600px;"></div>`,
})
export class DashboardComponent {
    ngOnInit() {
        var ec = echarts.init(document.getElementById('echarts'));
        console.log(jQuery('#echarts').width());
        var option = {
            title: {
                text: '未来一周气温变化',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['最高气温', '最低气温']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    name: '最高气温',
                    type: 'line',
                    data: [11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '最低气温',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [
                            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        };

        ec.setOption(option, true);
    }
}
