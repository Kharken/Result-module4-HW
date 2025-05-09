
export interface ScrollPositionState {
  x: number;
  y: number;
}

export interface ScrollParams {
  y: number;
}

export type ScrollTuple = [ScrollPositionState, (params: ScrollParams) => void]
