import { createMachine, interpret } from "xstate";

enum AuthMachineStates {
    Unauthenticated = 'unauthenticated',
    Authenticated = 'authenticated'
}

// casing matters for string apparently
enum AuthMachineEvents {
    SignIn = 'SIGN_IN',
    SignOut = 'SIGN_OUT'
}

export const authMachine = createMachine({
    id: 'auth',
    initial: AuthMachineStates.Authenticated,
    states: {
        [AuthMachineStates.Unauthenticated]: {
            on: {
                [AuthMachineEvents.SignIn]: { 
                    target: AuthMachineStates.Authenticated
                },
            }
        },

        [AuthMachineStates.Authenticated]: {
            on: {
                [AuthMachineEvents.SignOut]: { 
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
        auth.send({ type: AuthMachineEvents.SignIn });
    }

    const signOut = () => {
        auth.send({ type: AuthMachineEvents.SignOut });
    }

    return { ready, dispose, signIn, signOut };
}