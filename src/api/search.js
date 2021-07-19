/**
 * 搜索相关接口模块
 */
import request from '@/utils/request'

/**
 * 获取搜索结果
 */
export function postSearch (params) {
  return request({
    method: 'POST',
    url: '/lifeLine/list',
    data: {
      params
    }
  })
}
