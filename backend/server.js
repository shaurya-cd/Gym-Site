import express from 'express'
const app = express();
import service1 from 'backend/assets/service (1).jpg'

app.get('/api/services', (req,res) => {
    const services = [
        {
            id:1,
            imageURL: service1,
            title:"Personal Training",
            description:"Work one-on-one with certified fitness trainers who create custom workout plans tailored to your goals, fitness level, and lifestyle."
        },
        {
            id:2,
            imageURL:"",
            title:"Group Fitness Classes",
            description:"From Zumba to HIIT and Yoga, our dynamic group classes offer fun, motivation, and variety."
        },
        {
            id:3,
            imageURL:"",
            title:"Cardio & Strength Equipment",
            description:"Access top-tier machines and free weights in our fully equipped training zones, designed for all levels of cardio and resistance workouts."
        },
        {
            id:4,
            imageURL:"",
            title:"Nutrition Guidance",
            description:"Receive personalized diet plans and meal advice from our in-house nutrition experts to fuel your fitness journey and boost results."
        },
        {
            id:5,
            imageURL:"",
            title:"Fitness Assessment",
            description:"Track your progress with regular body composition analysis and fitness evaluations to keep your goals measurable and achievable."
        },
        {
            id:6,
            imageURL:"",
            title:"Locker Room & Amenities",
            description:"Enjoy clean, secure locker rooms with showers, towel service, and relaxation areas including steam or sauna (where available)."
        }
    ]
    res.send(services);
})


const port = process.env.PORT || 3000

app.listen(port, (req,res) => {
    console.log(`Server at http://localhost:${port}`)
})