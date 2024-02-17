import {render, screen} from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom'
import { testStates } from '../redux/test-states'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

jest.mock('../redux/hooks')

describe("Home component", () => {
    const dispatch = jest.fn()
    beforeEach(() => {
        useAppSelector.mockImplementation(testStates)
        useAppDispatch.mockImplementation(()=>dispatch)
    })

    afterEach(()=>{
        jest.clearAllMocks();
    })
    it("dispatch checking", () => {
        render(<Home />)
        expect(dispatch).toHaveBeenCalled()
    })
})