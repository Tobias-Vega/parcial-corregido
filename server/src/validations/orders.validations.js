import { body } from "express-validator";

export const createOrderValidations = [
    body('coffee').isString().custom((value) => {
        const validCoffees = ["Espresso", "Americano", "Cappuccino"];
        if (!validCoffees.includes(value)) {
            throw new Error('Invalid coffe type')
        }
        return true
    })
]