const { Router } = require("express");
const router = Router();
const Teacher = require("../models/teacherModel");
const Admin = require("../models/adminModel");
const Department = require("../models/departmentModel");
const axios = require("axios");
const bcrypt = require("bcryptjs");

router.get("/", async (req, res) => {
  try {
    if(req.session.isLogged){
      if (req.query.faculty) {
        const departments = await Department.find().lean();
        const teachers = await Teacher.find({
          "selected.department.parent": Number(req.query.faculty),
        }).lean();
        res.render("home", {
          faculties: departments.filter((el) => el.structureType.code == 11),
          kafedra: departments.filter((el) => el.structureType.code == 12),
          teachers: teachers.filter((el) => el.isLo),
          query: departments.filter((el) => el.id == req.query.faculty)[0].name,
        });
      } else if (req.query.kafedra) {
        const departments = await Department.find().lean();
        const teachers = await Teacher.find({
          "selected.department.id": Number(req.query.kafedra),
        }).lean();
        res.render("home", {
          faculties: departments.filter((el) => el.structureType.code == 11),
          kafedra: departments.filter((el) => el.structureType.code == 12),
          teachers: teachers.filter((el) => el.full_name != undefined),
          query: departments.filter((el) => el.id == req.query.kafedra)[0].name,
        });
      } else if (req.query.name) {
        const departments = await Department.find().lean();
        const teachers = await Teacher.searchPartial(
          req.query.name,
          (err, data) => {
            if (err) throw new Error();
          }
        );
        res.render("home", {
          faculties: departments.filter((el) => el.structureType.code == 11),
          kafedra: departments.filter((el) => el.structureType.code == 12),
          teachers: teachers.filter((el) => el.full_name != undefined),
          query: req.query.name,
        });
      } else {
        const departments = await Department.find().lean();
        const teachers = await Teacher.find().lean();
        res.render("home", {
          faculties: departments.filter((el) => el.structureType.code == 11),
          kafedra: departments.filter((el) => el.structureType.code == 12),
          teachers: teachers.filter((el) => el.full_name != undefined),
          query: "Hammasi",
        });
      }
    }else res.redirect("login")
    
  } catch (error) {
    if(error) throw error
    res.render("login");
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const { password, login } = req.body;

    const admin = await Admin.findOne({ login });
    if (admin) {
      if (bcrypt.compareSync(password, admin.password)) {
        const admin = await Admin.findOne({login}).select("-password")
        req.session.admin = admin
        req.session.isLogged=true
        req.session.save(err=>{
          if(err) throw err
          res.redirect("/")
        })
      } else res.render("login", {
        message:"Login yoki parol xato"
      });
    } else res.render("login", {
      message:"Login yoki parol xato"
    });
  } catch (error) {
    if(error) throw error
    res.render("login", {
      message:"Login yoki parol xato"
    });
  }
});

module.exports = router;
