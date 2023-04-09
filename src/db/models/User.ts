import { DataTypes, Sequelize , Model} from "sequelize";
import { sequelize } from "../../../config/database";

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelize,
    modelName: "users",
  }
);

export default User;
