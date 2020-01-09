const apiArr = [
  'activity',
]

let apiObj = {}

apiArr.map((item) => {
  apiObj['/' + item] = {
    target: 'http://0.0.0:9092',
    changeOrigin: true,
    pathRewrite: {
    }
  }
  apiObj['/' + item].pathRewrite['^/' + item] = '/' + item
})

module.exports = apiObj