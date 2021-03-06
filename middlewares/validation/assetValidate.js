const { check, body } = require("express-validator");
const db = require("../../db/models");

module.exports = [
  check("projects_id")
    .isNumeric()
    .custom(async function (value, { req }) {
      let project;
      try {
        project = await db.Project.findOne({
          where: {
            id: req.body.projects_id,
          },
        });
        if (project) {
          return true;
        } else {
          return Promise.reject();
        }
      } catch (error) {
        console.log(error);
      }
    })
    .withMessage(
      "El project id debe ser numerico, y tiene que existir en la base de datos"
    ),
  check("asset")
    .custom((value, { req }) => {
      if (req.file !== undefined && req.files === undefined) {
        switch (req.file.mimetype) {
          case "image/jpg":
            return ".jpg";
          case "image/jpeg":
            return ".jpeg";
          case "image/png":
            return ".png";
          case "video/mp4":
            return ".mp4";
          case "video/quicktime":
            return ".mov";
          case "video/x-msvideo":
            return ".avi";
          case "video/x-ms-wmv":
            return ".wmv";
          case "video/x-matroska":
            return ".mkv";
          default:
            return false;
        }
      } else if (req.file === undefined && req.files !== undefined) {
        return !req.files.some(
          (e) =>
            e.mimetype !== "image/jpg" &&
            e.mimetype !== "image/jpeg" &&
            e.mimetype !== "image/png" &&
            e.mimetype !== "video/mp4" &&
            e.mimetype !== "video/quicktime" &&
            e.mimetype !== "video/x-msvideo" &&
            e.mimetype !== "video/x-ms-wmv" &&
            e.mimetype !== "video/x-matroska"
        );
      }
      return false;
    })
    .optional()
    .withMessage(
      "El archivo debe tener formato: jpg jpeg o png en caso de imagen. Formatos mp4 mov avi wmv o mkv para videos."
    ),
];
