import { createMachine, interpret } from "xstate";

enum AuthMachineStates {
    Unauthenticated = 'unauthenticated',
    Authenticated = 'authenticated'
}

// casing matters for string apparently
enum AuthMachineEvents {
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT'
}

export const authMachine = createMachine({
    id: 'auth',
    initial: AuthMachineStates.Authenticated,
    states: {
        [AuthMachineStates.Unauthenticated]: {
            on: {
                [AuthMachineEvents.SIGN_IN]: { 
                    target: AuthMachineStates.Authenticated
                },
            }
        },

        [AuthMachineStates.Authenticated]: {
            on: {
                [AuthMachineEvents.SIGN_OUT]: { 
                    target: AuthMachineStates.Unauthenticated
                },
            }
        }
    }
})

export const AuthService = () => {
    const auth = interpret(authMachine).onTransition((state) => console.info(state))

    const ready = () => {
        auth.start();
    }

    const dispose = () => {
        auth.stop();
    }

    const signIn = () => {
        auth.send({ type: AuthMachineEvents.SIGN_IN });
    }

    const signOut = () => {
        auth.send({ type: AuthMachineEvents.SIGN_OUT });
    }

    return { ready, dispose, signIn, signOut };
}