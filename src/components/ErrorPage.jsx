import { useRouteError } from 'react-router-dom'

export default function ErrorPage(){
    const error = useRouteError()
    return (
        <div className='space-y-8'>
            <h1 className='text-center text-5xl font-extrabold mt-20 text-blue-900'>Ups! parece que hay un error</h1>
            <p className='text-center'>El error es el siguiente:</p>
            <p className='text-center'>{error.statusText || error.message}</p>
        </div>
    )
}
        