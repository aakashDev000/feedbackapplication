import { NextFunction } from "express";
import { getMongodb } from "../../mongodb";
import { Db } from "mongodb";
import * as uuid from "uuid";

type Question3 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const userExperienceNumberBasedValueReturn = (question3: Question3): string => {
  const userExperience = {
    1: "Very Bad",
    2: "Bad",
    3: "Not Good",
    4: "Okay",
    5: "Good",
    6: "Very Good",
    7: "Excellent",
    8: "Outstanding",
    9: "Exceptional",
    10: "Perfect",
  };

  return userExperience[question3];
};

const reqdataKeyModified = (reqdata: {
  question1: string;
  question2: Array<string>;
  question3: Question3;
  question4: string;
  question5: Date;
}) => {
  const { question1, question2, question3, question4, question5 } = reqdata;

  return {
    "How often do you use this app ?": question1,
    "Main app goal?": question2,
    "Rate user experience (1-10):":
      userExperienceNumberBasedValueReturn(question3),
    "Suggest any improvements:": question4,
    "Enter your birthday?": question5,
  };
};

export const insertFeddbackData = async (
  _: any,
  res: any,
  next: NextFunction
) => {
  try {
    const { reqdata } = res.locals;
    const mongodb = (await getMongodb()) as Db;

    const feedbackid = uuid.v4();

    const insertFeedback = await mongodb
      .collection("userfeedback")
      .insertOne({ feedbackid, ...reqdataKeyModified(reqdata) });

    if (insertFeedback.acknowledged) {
      return res.status(201).json({
        data: {
          status: 201,
          data: {
            feedbackid,
          },
        },
      });
    }

    return res.status(400).json({
      data: {
        status: 400,
        data: {
          type: "BAD_DATA",
          data: "Error Occured in insert data",
        },
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
