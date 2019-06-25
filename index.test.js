const realAdd = require('./real-add')
const add = require('.')

jest.mock('./real-add')

afterEach(() => {
  // what I want here is to be able to call something like:
  // jest.assertNoRemainainMockImplementations()
  jest.clearAllMocks()
})

test('add calls real add', () => {
  realAdd.mockImplementationOnce(() => 2)
  expect(add(1, 1)).toBe(2)

  // the "correct" solution is to make this assertion:
  // expect(realAdd).toHaveBeenCalledTimes(1)
  // expect(realAdd).toHaveBeenCalledWith(1, 1)

  // however, in a larger testbase, you could easily have a
  // situation where someone changes the code so it no longer
  // calls the mocked function, so they remove the assertions
  // without removing the mock implementation.
})
