const {Router} = require("express")
const router = Router()
const Teacher = require("../models/teacherModel")
const Department = require("../models/departmentModel")
const axios  = require("axios")

router.get("/", async(req, res)=>{
    try {
        // const teachers = await Teacher.find()
        // console.log(teachers);
        // await axios.get("https://student.samdu.uz/rest/v1/data/department-list?limit=200", {headers:{
        //     Authorization:"Bearer WQcaynOQ4pZQAyQuIMP480qfOJ_ZLvvk"
        // }}).then(res=>{
        //     console.log(res.data.data.items);
        //     res.data.data.items.forEach(async element => {
        //         await Department.create(element)
        //     });

        // })
        const departments = await Department.find()
        // console.log(department);
        res.render("home", {
            departments:departments
        })
    } catch (error) {
        res.send("Xatolik")
    }
})


module.exports = router