# `jest.assertNoRemainainMockImplementations()`

I'd like to propose something like this which would throw an error if there are
any remaining mock implementations which have not been called.

This would only be applicable to the following mock implementations:

1. `mockFn.mockImplementationOnce(fn)`
2. `mockFn.mockReturnValueOnce(value)`
3. `mockFn.mockResolvedValueOnce(value)`
4. `mockFn.mockRejectedValueOnce(value)`

I don't think it's reasonable to expect it to apply to all mock implementations.
