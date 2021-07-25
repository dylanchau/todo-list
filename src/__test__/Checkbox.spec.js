import { cleanup, fireEvent, render } from '@testing-library/react'
import { Checkbox } from 'components/Checkbox'

import { firebase } from '../firebase'

beforeEach(() => {
  cleanup()

  // firebase mockup
  jest
    .spyOn(firebase.firestore(), 'collection')
    .mockReturnValue({ doc: jest.fn(() => ({ update: jest.fn() })) })
})

// jest.mock('../firebase', () => ({
//   firebase: {
//     firestore: jest.fn(() => ({
//       collection: jest.fn(() => ({
//         doc: jest.fn(() => ({
//           update: jest.fn(),
//         })),
//       })),
//     })),
//   },
// }))

describe('Checkbox', () => {
  describe('Success', () => {
    it('Render the task checkbox', () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="Finish this tutorial series!" />
      )
      expect(queryByTestId('checkbox-action')).toBeTruthy()
    })

    // try to mock up firebase - draft 1
    // it('Render the task checkbox and accepts click acton', () => {
    //   const firestoreMock = {
    //     collection: jest.fn().mockReturnThis(),
    //     doc: jest.fn().mockReturnThis(),
    //     update: jest.fn().mockResolvedValueOnce(),
    //   }
    //   jest
    //     .spyOn(firebase, 'firestore')
    //     .mockImplementationOnce(() => firestoreMock)
    //   const { queryByTestId } = render(
    //     <Checkbox id="1" taskDesc="Finish this tutorial series!" />
    //   )
    //   expect(queryByTestId('checkbox-action')).toBeTruthy()
    //   fireEvent.click(queryByTestId('checkbox-action'))
    // })

    it('Render the task checkbox and accepts click acton', () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="Finish this tutorial series!" />
      )
      expect(queryByTestId('checkbox-action')).toBeTruthy()
      fireEvent.click(queryByTestId('checkbox-action'))
    })

    /* frebase mockup draft 2 - are replace by the statement
     * jest
     * .spyOn(firebase.firestore(), 'collection')
     * .mockReturnValue({ doc: jest.fn(() => ({ update: jest.fn() })) })
     */
    // it('Render the task checkbox and accepts key down action', () => {
    //   const update = jest.fn()
    //   const doc = jest.fn(() => ({ update }))
    //   const collection = jest
    //     .spyOn(firebase.firestore(), 'collection')
    //     .mockReturnValue({ doc })
    //   const { queryByTestId } = render(<Checkbox id="1" />)
    //   expect(queryByTestId('checkbox-action')).toBeTruthy()
    //   fireEvent.keyDown(queryByTestId('checkbox-action'), {
    //     key: 'Enter',
    //     code: 'Enter',
    //   })
    //   expect(doc).toHaveBeenCalledWith('1')
    //   expect(update).toHaveBeenCalledWith({ archived: true })
    //   expect(collection).toHaveBeenCalledWith('tasks')
    // })

    it('Render the task checkbox and accepts key down action', () => {
      const { queryByTestId } = render(<Checkbox id="1" />)
      expect(queryByTestId('checkbox-action')).toBeTruthy()
      fireEvent.keyDown(queryByTestId('checkbox-action'), {
        key: 'Enter',
        code: 'Enter',
      })
    })
  })
})
