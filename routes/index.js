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
      const departments = await Department.find().lean();
      const teachers = await Teacher.find({
        "department.parent": Number(req.query.faculty),
      }).lean();
      console.log(departments.filter(el=>el.id==req.query.faculty));
      res.render("home", {
        faculties: departments.filter((el) => el.structureType.code == 11),
        kafedra: departments.filter((el) => el.structureType.code == 12),
        teachers: teachers.filter((el) => el.full_name != undefined),
        query:departments.filter(el=>el.id==req.query.faculty)[0].name
      });
    } else if (req.query.kafedra) {
      const departments = await Department.find().lean();
      const teachers = await Teacher.find({"department.id": Number(req.query.kafedra)}).lean();
      res.render("home", {
        faculties: departments.filter((el) => el.structureType.code == 11),
        kafedra: departments.filter((el) => el.structureType.code == 12),
        teachers: teachers.filter((el) => el.full_name != undefined),
        query:departments.filter(el=>el.id==req.query.kafedra)[0].name

      });
    }else if(req.query.name){
      const departments = await Department.find().lean();
      const teachers = await Teacher.searchPartial(req.query.name, (err, data) => {
        if (err) throw new Error();
      })
      console.log(teachers);
      res.render("home", {
        faculties: departments.filter((el) => el.structureType.code == 11),
        kafedra: departments.filter((el) => el.structureType.code == 12),
        teachers: teachers.filter((el) => el.full_name != undefined),
        query:req.query.name
      });
    } else {
      const departments = await Department.find().lean();
      const teachers = await Teacher.find().lean();
      res.render("home", {
        faculties: departments.filter((el) => el.structureType.code == 11),
        kafedra: departments.filter((el) => el.structureType.code == 12),
        teachers: teachers.filter((el) => el.full_name != undefined),
        query:"Hammasi"
      });
    }
  } catch (error) {
    const departments = await Department.find().lean();
      const teachers = await Teacher.find().lean();
      res.render("home", {
        faculties: departments.filter((el) => el.structureType.code == 11),
        kafedra: departments.filter((el) => el.structureType.code == 12),
        teachers: teachers.filter((el) => el.full_name != undefined),
        query:"Hammasi"
      });
  }
});

module.exports = router;
