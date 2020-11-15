const middleware = {}

middleware['resetBreacrumbs'] = require('../middleware/resetBreacrumbs.js')
middleware['resetBreacrumbs'] = middleware['resetBreacrumbs'].default || middleware['resetBreacrumbs']

export default middleware
