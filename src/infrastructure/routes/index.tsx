import { createHashRouter, RouterProvider } from 'react-router-dom'

const hashRouter = createHashRouter([
    { path: '/category', element: <div>Helo world!</div> },
    { path: '/product', element: <div>Helo world!</div> },
    { path: '/user', element: <div>Helo world!</div> },
    { path: '/signin', element: <div>Helo world!</div> },
    { path: '/logout', element: <div>Helo world!</div> }
])

export function RouterManager() {
    return (
        <RouterProvider router={hashRouter} />
    )
}