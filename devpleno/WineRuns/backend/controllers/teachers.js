const get = ({ db }) => async (req, res) => {
  const { user } = res.locals;
  if (user.role === "admin") {
    const teachers = await db
      .select({
        id: "teachers.id",
        name: "users.name",
        email: "users.email"
      })
      .from("teachers")
      .leftJoin("users", "users.id", "teachers.user_id");
    res.send(teachers);
  } else {
    res.status(401);
    return res.send({
      error: true,
      message: "only admins can get teacher."
    });
  }
};
module.exports = {
  get
};
