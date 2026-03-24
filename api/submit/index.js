module.exports = async function (context, req) {
  const data = req.body || {};

  context.log("Submission received:", data);

  context.res = {
    status: 200,
    body: { message: "Success", received: data }
  };
};
