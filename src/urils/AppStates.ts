import { state, action, createStore } from 'usm-redux';

export class AppStates {
    @state
    states = {
        counter: 0
    }

    @action
    increase() {
        this.states.counter += 1;
    }

    @action
    decrease() {
        this.states.counter -= 1;
    }
}

export const controller = new AppStates();

export const store = createStore({
    modules: [controller],
});