import { useMachine } from '@xstate/react';
import { promiseMachine } from '../machines/promiseMachine';
import { mockRequest } from '../helpers/mockRequest';

export const AsyncButton = () => {
    const [state, send] = useMachine(promiseMachine);

    const { matches } = state;

    const disableButton = matches('rejected') || matches('resolved');

    const handleClick = async () => {
      send('START');
      const passed = await mockRequest();

      if (passed) {
        send('RESOLVE');
        return;
      }

      send('REJECT');
    }

    const text = (() => {
        switch (true) {
          case matches('waiting'):
            return 'Run mock request';
          case matches('pending'): 
            return 'loading ...';
          case matches('rejected'):
            return 'something went wrong'; 
          case matches('resolved'): 
            return 'all good!';
          default:
            return 'something went very wrong';
        }
    })();


    return (
      <button disabled={disableButton} onClick={handleClick}>{text}</button>
    )
}