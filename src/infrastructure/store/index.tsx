import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { Store } from './store'

export function StoreManager(properties: PropsWithChildren) {
    return (
        <Provider store={Store} children={properties.children} />
    )
}