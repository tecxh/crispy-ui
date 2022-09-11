import { createMachine } from 'xstate';

export const promiseMachine = createMachine({
    id: 'promise', // machine identity
    initial: 'waiting', // initial state 'node'
    states: { // docs say 'define child states'
        // 'child states'  ?= 'nodes'
        waiting: {
            on: {
                START: { target: 'pending' }
            }
        },
        pending: {
            on: {
                RESOLVE: { target: 'resolved' },
                REJECT: { target: 'rejected' },
            }
        },
        resolved: {
            type: 'final',
        },
        rejected: {
            type: 'final',
        },
    }
});
