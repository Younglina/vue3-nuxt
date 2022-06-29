import { http } from '../utils/http'

export function getRoomList() {
  return http.httpGet('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList', {
    pageNo: 1,
    pageSize: 3,
  })
}

export function loginWithPhone(data: { phone: string; password: string }) {
  return http.post('/login/cellphone', data)
}
