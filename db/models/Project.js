module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total: {
      type: DataTypes.DECIMAL.UNSIGNED,
      allowNull: false,
    },
    balance: {
      type: DataTypes.DECIMAL.UNSIGNED,
      allowNull: true,
    },
    coin: {
      type: DataTypes.ENUM("ARS", "USD"),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  };

  const config = {
    tableName: "projects",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true,
  };

  const Project = sequelize.define("Project", cols, config);

  Project.associate = function (models) {
    Project.belongsTo(models.User, {
      as: "Users",
      foreignKey: "users_id",
    });
    Project.hasMany(models.Payment, {
      as: "Payments",
      foreignKey: "projects_id",
    });
    Project.hasMany(models.Cashflow, {
      as: "Cashflows",
      foreignKey: "projects_id",
    });
    Project.hasMany(models.Asset, {
      as: "Assets",
      foreignKey: "projects_id",
    });
  };

  return Project;
};
