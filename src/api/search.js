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
export function getRainData (params) {
  return request({
    method: 'GET',
    url: `https://api.seniverse.com/v4?${params}`
  })
}
export function getRain (query) {
  return request({
    method: 'GET',
    url: `https://api.seniverse.com/v4?${query}`
  })
}
