import { DataTypes, Sequelize, Model } from "sequelize";
import { sequelize } from "../../../config/database";

class Domain extends Model {}

Domain.init(
  {
    descripition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codeType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "domains",
  }
);

export default Domain;
