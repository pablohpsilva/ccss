import mergeDeep from './utils'
import { IContext } from './types'

const context: IContext = {
    unit: 'rem',
    valueTransformer: n => `${n}${context.unit}`
}

/**
 * This function will set the context, based on the default one.
 *
 * @example
 * ```js
 * setContext({} as IContext) // { unit: 'rem', valueTransformer: fn(), gutter: 16 }
 * ```
 */
export const setContext = (c: IContext) => {
    mergeDeep(context, c)
}

export default context
