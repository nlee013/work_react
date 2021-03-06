const mongoose = require('mongoose')

const Taxi = mongoose.model('taxidbs')

//미들웨어 생성
module.exports = (app) => {

    //데이터 조회
    app.get('/api/taxi',async(req,res)=>{
        const user = await Taxi.find()

        return res.status(200).send(user)
    })

    //데이터 입력
    app.post('/api/taxi',async(req,res)=>{
        const user = await Taxi.create(req.body)

        return res.status(200).send({
            error:false,
            user
        })
    })

    //데이터 수정
    app.put('/api/taxi',async(req,res)=>{
        const id = req.body.id
        const user = await Taxi.findByIdAndUpdate(id,req.body)

        return res.status(200).send({
            error:false,
            user
        })
    })

    //데이터 삭제
    app.delete('/api/taxi',async(req,res)=>{
        const id = req.body.id
        const user = await Taxi.findByIdAndDelete(id)

        return res.status(200).send({
            error:false,
            user
        })
    })
}

//만든 라우터taxiRoutes.js를 server.js서버에 등록하기