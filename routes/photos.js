const express = require("express")
const {getAllPhotos} = require("../controller/photos")
const {getPhoto} = require("../controller/photos")
const {createPhoto} = require("../controller/photos")
const {updatePhoto} = require("../controller/photos")
const {deletePhoto} = require("../controller/photos")
const {editPhoto} = require("../controller/photos")

const PhotoRouters = express.Router()

PhotoRouters.get("/",getAllPhotos)

PhotoRouters.get("/photos/:id", getPhoto)
PhotoRouters.post("/photos", createPhoto)
PhotoRouters.put("/photos/:id", updatePhoto)
PhotoRouters.delete("/photos/:id", deletePhoto)
PhotoRouters.get("/photos/edit/:id", editPhoto)

module.exports = PhotoRouters