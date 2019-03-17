import request from 'superagent'

import APIS from '@/apis'

export default {
  uploadImage({ file }) {
    return new Promise((resolve, reject) =>
      request(APIS.FILES.UPLOAD_IMAGE.METHOD, APIS.FILES.UPLOAD_IMAGE.PATH())
        .attach('file', file)
        .end((err, res) => {
          if (err) reject(err)
          else resolve(res)
        })
    )
  }
}
