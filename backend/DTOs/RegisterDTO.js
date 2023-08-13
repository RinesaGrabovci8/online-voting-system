const { check, validationResult } = require('express-validator');

class RegisterDto {
    constructor(id, password, confirmPassword) {
        this.id = id;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    static validate() {
        return [
            check('id').notEmpty().withMessage('ID verification number is required'),
            check('password').notEmpty().withMessage('Password is required')
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/)
                .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one digit'),
            check('confirmPassword').custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Confirm password does not match');
                }
                return true;
            })
        ];
    }

    static validateResult(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
}

module.exports = RegisterDto;
