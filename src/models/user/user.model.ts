import {DataTypes, Model} from "sequelize";
import {User} from "@/models/user/types/user";
import {sequelizeConnection} from "@/db/db-connection";

export class UserSchema extends Model<User> implements User {
  public id: number;

  public is_bot: boolean;

  public first_name: string;

  public last_name?: string;

  public username?: string;

  public language_code?: string;

  public is_premium?: true;

  public added_to_attachment_menu?: true;
}

UserSchema.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
  },

  is_bot: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },

  first_name: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },

  last_name: {
    type: DataTypes.STRING(128),
    allowNull: true,
  },
  username: {
    type: DataTypes.STRING(128),
    allowNull: true,
  },
  language_code: {
    type: DataTypes.STRING(4),
    allowNull: true,
  },
  is_premium: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  added_to_attachment_menu: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
},   {
  tableName: 'users',
  sequelize: sequelizeConnection,
})
