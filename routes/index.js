const { Router } = require("express");
const router = Router();
const Teacher = require("../models/teacherModel");
const Department = require("../models/departmentModel");
const axios = require("axios");

router.get("/", async (req, res) => {
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
    console.log(req.query);
    if (req.query.faculty) {
      console.log(1);
      const departments = await Department.find().lean();
      const teachers = await Teacher.find({
        "department.parent": req.query.faculty,
      }).lean();
      console.log(teachers);
      res.render("home", {
        faculties: departments.filter((el) => el.structureType.code == 11),
        kafedra: departments.filter((el) => el.structureType.code == 12),
        teachers: teachers.filter((el) => el.full_name != undefined),
      });
    } else if (req.query.kafedra) {
      console.log(2);
      const departments = await Department.find().lean();
      const teachers = await Teacher.find({
        "department.id": req.query.kafedra,
      }).lean();
      console.log(teachers);
      res.render("home", {
        faculties: departments.filter((el) => el.structureType.code == 11),
        kafedra: departments.filter((el) => el.structureType.code == 12),
        teachers: teachers.filter((el) => el.full_name != undefined),
      });
    } else {
      console.log(3);
      const departments = await Department.find().lean();
      const teachers = await Teacher.find().lean();
      res.render("home", {
        faculties: departments.filter((el) => el.structureType.code == 11),
        kafedra: departments.filter((el) => el.structureType.code == 12),
        teachers: teachers.filter((el) => el.full_name != undefined),
      });
    }
  } catch (error) {
    console.log(error);
    res.send("Xatolik");
  }
});

module.exports = router;
