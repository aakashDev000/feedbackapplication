import Joi from "joi";

const errorMessage = ({ key }: { key: string }) => {
  return {
    "any.required": `${key} is Required`,
    "object.base": `${key} Must be and Object`,
    "object.unknown": "Unknown Keys are not Allowed",
    "alternative.match": `${key} is mismatched`,
    "any.only": `Invalid ${key}`,
    "string.base": `${key} Must be and String`,
    "string.empty": `${key} Cannot be empty`,
  };
};

const feedbackSubmitionValidator = Joi.object({
  question1: Joi.string()
    .valid("daily", "weekly", "monthly", "rarely", "firsttime")
    .required()
    .messages(errorMessage({ key: "How often do you use this app?" })),
  question2: Joi.array()
    .items(Joi.string())
    .min(1)
    .required()
    .messages(errorMessage({ key: "Main app goal?" })),
  question3: Joi.number()
    .min(1)
    .max(10)
    .required()
    .messages(errorMessage({ key: "Rate user experience (1-10):" })),
  question4: Joi.string()
    .trim()
    .min(10)
    .max(500)
    .required()
    .messages(errorMessage({ key: "Suggest any improvements:" })),
  question5: Joi.date()
    .required()
    .messages(errorMessage({ key: "Enter your birthday?" })),
});

const uuidValidator = Joi.object({
  feedbackid: Joi.string()
    .trim()
    .length(36)
    .required()
    .messages(errorMessage({ key: "feedbackid" })),
});

export { feedbackSubmitionValidator,uuidValidator };
