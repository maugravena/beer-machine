import { http } from './config'

export default {
  get: (temperature) => {
    return http.get('beer-suggestion', {params: { temperature: temperature } })
  }
}
