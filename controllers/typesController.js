const db = require("../db/models");
const fs = require("fs");
const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res, next) => {
    db.Type.findAll()
      .then((types) => {
        var response = {
          meta: {
            status: 200,
          },
          data: [...types],
        };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  detail: (req, res, next) => {
    db.Type.findByPk(req.params.id, {
      include: [
        {
          association: "Jobs",
        },
      ],
    })
      .then((type) => {
        var response = type
          ? {
              meta: {
                status: 200,
              },
              data: type,
            }
          : {
              meta: {
                status: 404,
              },
              data: type,
            };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  edit: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Type.update(
        {
          title: req.body.title,
          image: req.file ? req.file.filename : undefined,
        },
        {
          where: {
            id: {
              [db.Sequelize.Op.like]: [req.params.id],
            },
          },
        }
      )
        .then((type) => {
          if (type[0]) {
            return res.json({
              meta: {
                status: 200,
              },
              data: {
                message: "Editado correctamente",
              },
            });
          } else {
            return res.json({
              meta: {
                status: 406,
              },
              data: {
                message: "Id invalido",
              },
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      return res.json({
        meta: {
          status: 400,
        },
        data: {
          errors: errors.errors,
          body: req.body,
        },
      });
    }
  },
  create: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty() && req.file !== undefined) {
      db.Type.create({
        title: req.body.title,
        image: req.file ? req.file.filename : undefined,
      })
        .then((type) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: type,
          });
        })
        .catch((err) => console.log(err));
    } else if (errors.isEmpty() && req.file === undefined) {
      return res.json({
        meta: {
          status: 400,
        },
        data: {
          message:
            "No se subio ninguna imagen, o solo fueron en formato incorrecto. Acepta jpg, png y jpeg",
        },
      });
    } else {
      return res.json({
        meta: {
          status: 400,
        },
        data: {
          errors: errors.errors,
          body: req.body,
        },
      });
    }
  },
  delete: (req, res, next) => {
    db.Type.findByPk(req.params.id, {
      include: [
        {
          association: "Jobs",
        },
      ],
    })
      .then((type) => {
        if (type) {
          db.Type.destroy({
            where: {
              id: {
                [db.Sequelize.Op.like]: [req.params.id],
              },
            },
          })
            .then((x) => {
              if (x) {
                try {
                  fs.unlinkSync(`./public/images/${type.dataValues.image}`);
                } catch (err) {
                  console.error(err);
                }

                if (type.dataValues.Jobs.length) {
                  type.dataValues.Jobs.forEach((element) => {
                    db.Job.destroy({
                      where: {
                        id: {
                          [db.Sequelize.Op.like]: [element.id],
                        },
                      },
                    })
                      .then((x) => {
                        if (x) {
                          try {
                            fs.unlinkSync(`./public/images/${element.image}`);
                          } catch (err) {
                            console.error(err);
                          }
                        }
                      })
                      .catch((err) => console.log(err));
                  });
                  return res.json({
                    meta: {
                      status: 200,
                    },
                    data: `Successfully deleted all jobs and type id: ${req.params.id}`,
                  });
                }
              } else {
                return res.json({
                  meta: {
                    status: 406,
                  },
                  data: `Could not delete type id: ${req.params.id}`,
                });
              }
            })
            .catch((err) => console.log(err));
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not find type id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
