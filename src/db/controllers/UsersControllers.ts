import User from "../models/User";

export const getUserList = async (req: any, res: any) => {
  await User.create({ name: "Eduardo", email: "eduardo.dilauro@gmail.com",  });
  const userListAll = User.findAll();
  console.log(userListAll);
  return res.send({ message: "message" });
};
