<template>
  <div class="report-container">
<!-- 面包屑导航 -->
<el-breadcrumb separator-class="el-icon-arrow-right" class="el-breadcrumb">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>数据统计</el-breadcrumb-item>
  <el-breadcrumb-item>数据报表</el-breadcrumb-item>
</el-breadcrumb>
<!-- 卡片区域 -->
<el-card>
  <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
  <div id="main" style="width: 700px;height:400px;"></div>
</el-card>
  </div>
</template>

<script>
// 导入echarts
import * as echarts from 'echarts'
// 导入lodash 合并数据
import _ from 'lodash'
export default {
  name: 'MyReport',
  data () {
    return {
      // 使用刚指定的配置项和数据显示图表。
      // 需要合并的数据
      options: {
        title: {
          text: '用户来源'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#E9EEF3'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ]
      }
    }
  },
  // 页面元素已被渲染完毕
  async mounted () {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'))
    const { data: res } = await this.$http.get('reports/type/1')
    if (res.meta.status !== 200) return this.$message.error('获取失败')
    // 指定图表的配置项和数据
    const result = _.merge(res.data, this.options)
    // 展示数据
    myChart.setOption(result)
  }
}
</script>

<style>

</style>
