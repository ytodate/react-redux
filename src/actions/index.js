import { createAction } from 'redux-actions'

export const INC = 'INC'
export const DEC = 'DEC'
export const PLUS2 = 'PLUS2'
export const PLUS3 = 'PLUS3'


export const inc = createAction(INC)
export const dec = createAction(DEC)
export const plus2 = createAction(PLUS2)
export const plus3 = createAction(PLUS3)
