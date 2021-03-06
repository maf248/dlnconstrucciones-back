const db = require("../db/models");
const fs = require("fs");
const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res, next) => {
    db.Category.findAll()
      .then((categories) => {
        var response = {
          meta: {
            status: 200,
          },
          data: [...categories],
        };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  detail: (req, res, next) => {
    db.Category.findByPk(req.params.id, {
      include: [
        {
          association: "Batches",
        },
      ],
    })
      .then((category) => {
        var response = category
          ? {
              meta: {
                status: 200,
              },
              data: category,
            }
          : {
              meta: {
                status: 404,
              },
              data: category,
            };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  edit: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Category.update(
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
        .then((category) => {
          if (category[0]) {
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
                status: 404,
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
      db.Category.create({
        title: req.body.title,
        image: req.file ? req.file.filename : undefined,
      })
        .then((category) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: category,
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
    db.Category.findByPk(req.params.id, {
      include: [
        {
          association: "Batches",
        },
      ],
    })
      .then((category) => {
        if (category) {
          db.Category.destroy({
            where: {
              id: {
                [db.Sequelize.Op.like]: [req.params.id],
              },
            },
          })
            .then((x) => {
              if (x) {
                try {
                  fs.unlinkSync(`./public/images/${category.dataValues.image}`);
                } catch (err) {
                  console.error(err);
                }

                if (category.dataValues.Batches.length) {
                  category.dataValues.Batches.forEach((element) => {
                    db.Batch.destroy({
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
                    data: `Successfully deleted all batches and category id: ${req.params.id}`,
                  });
                }
              } else {
                return res.json({
                  meta: {
                    status: 406,
                  },
                  data: `Could not delete category id: ${req.params.id}`,
                });
              }
            })
            .catch((err) => console.log(err));
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not find category id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
