module.exports = (req, res, next) => {
  const forcedErrorStatus = Number(req.query.error);
  const shouldRandomFail = req.query.randomError === "true";

  if (forcedErrorStatus >= 400) {
    return res.status(forcedErrorStatus).json({
      message: `Искусственная ошибка ${forcedErrorStatus}`,
      status: forcedErrorStatus,
    });
  }

  if (shouldRandomFail && Math.random() < 0.5) {
    return res.status(500).json({
      message: "Случайная ошибка сервера",
      status: 500,
    });
  }

  next();
};
