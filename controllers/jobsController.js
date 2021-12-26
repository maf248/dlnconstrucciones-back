const db = require("../db/models");
const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res, next) => {
    db.Job.findAll()
      .then((jobs) => {
        var response = {
          meta: {
            status: 200,
          },
          data: [...jobs],
        };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  detail: (req, res, next) => {
    db.Job.findByPk(req.params.id)
      .then((job) => {
        var response = job
          ? {
              meta: {
                status: 200,
              },
              data: job,
            }
          : {
              meta: {
                status: 404,
              },
              data: job,
            };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  edit: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Job.update(
        {
          types_id: req.body.type,
          title: req.body.title,
          description: req.body.description,
          image: req.file?.filename,
        },
        {
          where: {
            id: {
              [db.Sequelize.Op.like]: [req.params.id],
            },
          },
        }
      )
        .then((job) => {
          if (job[0]) {
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

    if (errors.isEmpty()) {
      db.Job.create({
        types_id: req.body.type,
        title: req.body.title,
        description: req.body.description,
        image: req.file?.filename,
      })
        .then((job) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: job,
          });
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
  delete: (req, res, next) => {
    db.Job.destroy({
      where: {
        id: {
          [db.Sequelize.Op.like]: [req.params.id],
        },
      },
    })
      .then((x) => {
        if (x) {
          return res.json({
            meta: {
              status: 200,
            },
            data: `Successfully deleted job id: ${req.params.id}`,
          });
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not delete job id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
