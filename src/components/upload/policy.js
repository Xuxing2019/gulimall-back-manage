import http from '@/utils/httpRequest.js'

export function policy () {
  return new Promise((resolve, reject) => {
    http({
      url: http.adornUrl('/gulimallthirdparty/oss/policy'),
      method: 'post',
      params: http.adornData({})
    }).then(({data}) => {
      resolve(data)
    })
  })
}
