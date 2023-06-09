import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')
Vue.filter('relativeTime', value => {
  return dayjs().to(dayjs(value))
})
// console.log(dayjs().format('YYYY-MM-DD'))
// dayjs().to(dayjs('1990-01-01'))
