import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should set up remove expense action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123"
  });
});

test("should set up edit expense action object", () => {
  const action = editExpense("123", { note: "test" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      note: "test"
    }
  });
});

test("should set up addExpense action object with provided values", () => {
    const expenseData = {
        description: 'rent',
        amount: 1000,
        createdAt: 1234,
        note: '1234 test'
    }
    const action =  addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test("should set up addExpense action object with default values", () => {
    const action =  addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
        description: '',
        amount: 0,
        createdAt: 0,
        note: '',
        id: expect.any(String)
        }
    })
})