import { useMachine } from '@xstate/react';
import {promiseMachine} from '../machines/promiseMachine';


export const DemoComponent = () => {
    const [state, send] = useMachine(promiseMachine);

    const { matches } = state;

    return (
        <div>
            {matches('pending') && <p>loading. . .</p>}
            {matches('rejected') && <p>promise rejected</p>}
            {matches('resolved') && <p>promise resolved</p>}
            <div>
                <button onClick={() => send('RESOLVE')}>resolve</button>
                <button onClick={() => send('REJECT')}>reject</button>
            </div>
        </div>
    )
}