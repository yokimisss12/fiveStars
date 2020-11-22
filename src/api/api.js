import Server from './server'
// 此文件用于写接口
class API extends Server{
  /** 
   *  用途：获取验证码
   *  @url http://cangdu.org:8001/v1/captchas
   *  返回status为1表示成功
   *  @method get
   *  @return {promise}
   */
  async getCaptchaCode() {
    try{
      let result = await this.axios('post', '/v1/captchas', {})
      if (result.status === 1 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '获取验证码失败',
          response: result,
        }
        throw err
      }
    } catch(err){
      throw err
    }
  }
}

export default new API()