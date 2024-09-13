import { LogOut, User2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';
import axios from 'axios';
import { USER_API_ENDPOINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

function Navbar() {
    const dispatch = useDispatch(); 

    const { user } = useSelector(store => store.auth);

    const logoutHandler = async (event) => {
        const res = await axios.get(`${USER_API_ENDPOINT}/logout`);
        dispatch(setUser(null))
        toast.success(res.data.message);
    }
    return (
        <div className='bg-white flex justify-between p-2 mx-auto items-center max-w-7xl'>
            <div>
                <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
            </div>
            <div className='flex gap-5'>
                <ul className='flex font-medium gap-5 items-center'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/jobs'><li>Jobs</li></Link>
                    <Link to='/browse'><li>Browse</li></Link>

                </ul>
                {
                    !user ? (
                        <div className='flex'>
                            <Link to='/login'>
                                <Button variant="outline" >Login</Button>
                            </Link>
                            <Link to='/signup'>
                                <Button variant="outline" className="bg-[#6A38C2] text-white hover:bg-[#5b30a7] hover:text-white" >Signup</Button>
                            </Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar>
                                    <AvatarImage src="https://avatar.iran.liara.run/public/boy" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-88" >
                                <div className='flex gap-5 space-y-2'>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className='font-bold'>{user.fullname}</h4>
                                        <p>{user.profile.bio}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 my-2 text-gray-600'>
                                    <div className='flex w-fit items-center gap-2 cursor-pointer outline-none'>
                                        <User2 />
                                        <Button variant="link">Profile</Button>
                                    </div>
                                    <div className='flex w-fit gap-2 items-center cursor-pointer'>
                                        <LogOut />
                                        <Link onClick={logoutHandler}>
                                            <Button  variant="link">Logout</Button>
                                        </Link>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )
                }
                <div>


                </div>
            </div>


        </div>

    )
}

export default Navbar;