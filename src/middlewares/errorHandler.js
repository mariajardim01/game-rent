import status from "http-status"

export async function errorHandler(error, req, res, next) {
    console.log(error)
    if (error.type == 'invalid_body') return res.status(status.BAD_REQUEST).json(error.message);
    if (error.type == 'conflict') return res.status(status.CONFLICT).json(error.message);
    if (error.type == 'not_found') return res.status(status.NOT_FOUND).json(error.message)
    if (error.type == 'unprocessable_entity') return res.status(status.UNPROCESSABLE_ENTITY).json(error.message)
      if (error.type == 'bad_request') return res.status(status.BAD_REQUEST).json(error.message);
      console.error("Erro não tratado:", error);
  return res.status(status.INTERNAL_SERVER_ERROR).json({ message: "Erro interno do servidor" });

}