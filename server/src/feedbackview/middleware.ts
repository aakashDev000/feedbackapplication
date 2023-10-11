import { NextFunction } from "express";
import { getMongodb } from "../../mongodb";
import { Db } from "mongodb";

export const getFeddbackData = async (_: any, res: any, __: NextFunction) => {
  try {
    const { reqdata } = res.locals;
    const mongodb = (await getMongodb()) as Db;

    const { feedbackid } = reqdata;
    const feedBackData = await mongodb
      .collection("userfeedback")
      .findOne({ feedbackid }, { projection: { _id: 0 } });

    if (!feedBackData) {
      return res.status(400).json({
        data: {
          status: 400,
          data: {
            type: "BAD_DATA",
            data: "Feedback data not found",
          },
        },
      });
    }

    return res.status(201).json({
      data: {
        status: 200,
        data: feedBackData,
      },
    });
  } catch (error) {
    return res.status(400).json({
      data: {
        status: 400,
        data: {
          type: "BAD_DATA",
          data: error,
        },
      },
    });
  }
};
