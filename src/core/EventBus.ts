// eslint-disable-next-line no-unused-vars
type Handler = (...args: unknown[]) => void;

export default class EventBus {
  private listeners: Record<string, Handler[]> = {};

  constructor() {
    this.listeners = {};
  }

  public on(event: string, callback: Handler): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off(event: string, callback: Handler): void {
    if (!this.listeners[event]) {
      console.error(`Нет события, чтобы отписаться: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  public emit(event: string, ...args: unknown[]): void {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }

  public destroy() {
    this.listeners = {};
  }
}
