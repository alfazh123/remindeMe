import Image from 'next/image'

export default function Home() {

    const hours = Array.from(Array(24).keys())
    const minutes = Array.from(Array(60).keys())


    return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-blue-400">
        <div className='mb-3'>
            <h1 className="text-4xl font-bold">Remindeme</h1>
            <p className="text-2xl font-semibold">A simple reminder app</p>
        </div>
        <div className='flex justify-between mb-5'>
            <select className='flex rounded-md px-3 py-2 mx-3 text-blue-400 shadow-md'>
                {hours.map((hour) => {
                    return <option key={hour}>{hour}</option>
                })}
            </select>
            <p className='flex justify-center items-center text-3xl'>:</p>
            <select className='flex rounded-md px-3 py-2 mx-3 text-blue-400 shadow-md'>
                {minutes.map((minute) => {
                    return <option key={minute}>{minute}</option>
                })}
            </select>
            <button className='rounded-md bg-blue-500 px-3 py-2 shadow-md'>Add</button>
        </div>

        <div className='bg-slate-200 rounded-md min-h-full max-w-md w-96'>
            <div className='text-blue-700 text-md p-3'>
                Schedule
            </div>

            <ul>
                <li className='border-current border-solid border-b-2 border-blue-800 px-3 py-2 hover:bg-slate-300 rounded-md'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <p className='text-blue-700 text-md'>12:00</p>
                            <p className='text-blue-700 text-md'>Hello World</p>
                        </div>
                        {/*toggle on off */}
                        <button className='rounded-md bg-green-400 px-3 py-2 shadow-md'>On</button>
                        <button className='rounded-md bg-blue-500 px-3 py-2 shadow-md hover:bg-blue-800 hover:text-white'>Delete</button>
                    </div>
                </li>
                <li className='border-current border-solid border-b-2 border-blue-800 px-3 py-2 hover:bg-slate-300 rounded-md'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <p className='text-blue-700 text-md'>12:00</p>
                            <p className='text-blue-700 text-md'>Hello World</p>
                        </div>
                        {/*toggle on off */}
                        <button className='rounded-md bg-green-400 px-3 py-2 shadow-md'>On</button>
                        <button className='rounded-md bg-blue-500 px-3 py-2 shadow-md hover:bg-blue-800 hover:text-white'>Delete</button>
                    </div>
                </li>
                <li className='border-current border-solid border-b-2 border-blue-800 px-3 py-2 hover:bg-slate-300 rounded-md'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <p className='text-blue-700 text-md'>12:00</p>
                            <p className='text-blue-700 text-md'>Hello World</p>
                        </div>
                        {/*toggle on off */}
                        <button className='rounded-md bg-green-400 px-3 py-2 shadow-md'>On</button>
                        <button className='rounded-md bg-blue-500 px-3 py-2 shadow-md hover:bg-blue-800 hover:text-white'>Delete</button>
                    </div>
                </li>
                <li className='border-current border-solid border-b-2 border-blue-800 px-3 py-2 hover:bg-slate-300 rounded-md'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <p className='text-blue-700 text-md'>12:00</p>
                            <p className='text-blue-700 text-md'>Hello World</p>
                        </div>
                        {/*toggle on off */}
                        <button className='rounded-md bg-green-400 px-3 py-2 shadow-md'>On</button>
                        <button className='rounded-md bg-blue-500 px-3 py-2 shadow-md hover:bg-blue-800 hover:text-white'>Delete</button>
                    </div>
                </li>
                <li className='border-current border-solid border-b-2 border-blue-800 px-3 py-2 hover:bg-slate-300 rounded-md'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <p className='text-blue-700 text-md'>12:00</p>
                            <p className='text-blue-700 text-md'>Hello World</p>
                        </div>
                        {/*toggle on off */}
                        <button className='rounded-md bg-green-400 px-3 py-2 shadow-md'>On</button>
                        <button className='rounded-md bg-blue-500 px-3 py-2 shadow-md hover:bg-blue-800 hover:text-white'>Delete</button>
                    </div>
                </li>
                <li className='border-current border-solid border-b-2 border-blue-800 px-3 py-2 hover:bg-slate-300 rounded-md'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <p className='text-blue-700 text-md'>12:00</p>
                            <p className='text-blue-700 text-md'>Hello World</p>
                        </div>
                        {/*toggle on off */}
                        <button className='rounded-md bg-green-400 px-3 py-2 shadow-md'>On</button>
                        <button className='rounded-md bg-blue-500 px-3 py-2 shadow-md hover:bg-blue-800 hover:text-white'>Delete</button>
                    </div>
                </li>
            </ul>

        </div>
        </main>
    )
}
