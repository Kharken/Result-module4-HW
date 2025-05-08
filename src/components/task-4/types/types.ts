export type WindowEventType = keyof WindowEventMap;
export type WindowEventCallback<T extends WindowEventType> =
  (event: WindowEventMap[T]) => void;
export type WindowEventOptions = AddEventListenerOptions | boolean | undefined;
export interface ViewportState {
  width: number;
  height: number;
}
