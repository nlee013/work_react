const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path');

//Schema 호출
require('./models/taxiSchema')

//Express Object 생성
const app = express()

//Router function/method(함수)
const router = express.Router()

//Basic port -> app Object의 속성으로 설정
app.set('port', process.env.PORT || 8080)

//Set Fileupload folder
app.use(express.static('uploads'))

//Connect Database
mongoose.connect('mongodb://localhost:27017/shopping')
console.log('DB 연결.')

//json 형태 data를 app에 등록
app.use(express.json())

//만든 라우터taxiRoutes.js를 server.js서버에 등록하기
//register router
require('./routes/taxiRoutes')(app)
require('./routes/imageRoutes')(app, router)

//express server 시작
http.createServer(app).listen(app.get('port'),function(){
    console.log('서버를 시작했습니다 : ' + app.get('port'))
})

//Project build
app.use(express.static(path.join(__dirname, 'taxi/build')))

app.get('/', function(req, resp){
    resp.sendFile(path.join(__driname, 'taxi/build/index.html'))
})