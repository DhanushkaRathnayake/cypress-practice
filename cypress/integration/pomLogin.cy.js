/// <reference types="cypress"/>

import { navigate, login, validateLogin } from "../page-objects/newTest"

describe('login', () => {

    beforeEach(() => {
        navigate()

    })

    it('should be able login to welcome page', () => {
        login('student', 'Password123')
        validateLogin('Logged In Successfully')
    })

})