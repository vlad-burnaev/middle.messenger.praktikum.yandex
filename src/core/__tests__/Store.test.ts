import { Store } from '../Store';

describe('core/Store', () => {
  it('should set state', () => {
    const store = new Store({ userId: -1 });

    store.set({ userId: 5 });

    expect(store.getState()).toEqual({ userId: 5 });
  });

  it('should emit "change" event after store updated', () => {
    const store = new Store({ userId: -1 });
    const mockFn = jest.fn();

    store.on('changed', mockFn);

    store.set({ userId: 5 });

    expect(mockFn).toHaveBeenCalledWith({ userId: -1 }, { userId: 5 });
  });
});
