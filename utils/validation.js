import Joi from 'joi'
const phoneExp = /^[789]\d{9}$/
const formValidation = (data) => {
    const formSchema = Joi.object({
        name: Joi.string().min(3).max(50).label('Name').required(),
        email: Joi.string().label('Email').required().email({
            tlds: false,
        }),
        subject: Joi.string().min(3).max(50).label('Subject').required(),
        number: Joi.string()
            .min(10)
            .label('Mobile Number')
            .required()
            .pattern(phoneExp),
        message: Joi.string().min(3).max(250).label('Message').required(),
    }).required()

    return formSchema.validate(data)
}

export { formValidation }