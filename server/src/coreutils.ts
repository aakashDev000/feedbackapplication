import { NextFunction } from "express";
import Joi from "joi";

// interface IResponse extends Response<any> {
//   locals: {
//     reqdata: any;
//   };
// }

export const getRequestData = (req: any, res: any, next: any) => {
  if (req.method === "POST") {
    const { data } = req.body;
    res.locals.reqdata = data;
  } else {
    const query = req.query;
    res.locals.reqdata = query;
  }

  next();
  return;
};

export const schemaValidation =
  (schema: any) => (_: any, res: any, next: NextFunction) => {
    const { error, value } = schema.validate(res.locals.reqdata, {
      abortEarly: false,
    });

    if (error) {
      const errData = error.details.map((err: Joi.ValidationErrorItem) => {
        const { message /* path = []  */ } = err;
        //   const pathMerge = path.toString();
        //   return `${message}(${pathMerge})`;
        return `${message}`;
      });

      res.status(400).json({
        data: {
          status: 400,
          data: {
            type: "VALIDATION_ERROR",
            data: errData,
          },
        },
      });
    }

    res.status(400).json({
      data: {
        status: 400,
        data: {
          type: "VALIDATION_ERROR",
          data: "Testing Error",
        },
      },
    });

    res.locals.reqdata = value;
    next();
    return;
  };
