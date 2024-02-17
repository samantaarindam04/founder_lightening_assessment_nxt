import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { testStates } from '../redux/test-states'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import Album from '@/app/album/[id]/page'

jest.mock('../redux/hooks')

describe("Album component", () => {
    const dispatch = jest.fn()
    beforeEach(() => {
        useAppSelector.mockImplementation(testStates)
        useAppDispatch.mockImplementation(() => dispatch)
    })

    afterEach(() => {
        jest.clearAllMocks();
    })
    it("dispatch checking", () => {
        render(<Album />)
        expect(dispatch).toHaveBeenCalledTimes(2);
    })
})