let BASE_URL = ''
const TIME_OUT = 2000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:1888'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}
export { TIME_OUT, BASE_URL }
