import React from "react";
import {useNavigate} from "react-router-dom";

export default function MenuBar() {
    const navigate = useNavigate();

    const logOut = () => {
        navigate('/')
    }

    return (
        <div className="min-w-full mb-5">
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <button onClick={event => navigate('/main-page')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        {
                                            'Devices Owned'
                                        }
                                    </button>
                                    <button onClick={event => navigate('/admin-page')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        {
                                            'Admin Page'
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button onClick={logOut} className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                {
                                    'Logout'
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
