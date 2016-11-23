import { Subject } from 'rx';
import { IState } from './state';
type S = IState | Promise<IState>;

export const Actions = new Subject<IAction | S>();

export interface IAction { <S>(state: S): S; };

export async function initialAction(state: IState) {
    return state;
}