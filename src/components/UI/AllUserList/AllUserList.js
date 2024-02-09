"use client"
import { useGetAllUserQuery, useMakeAdminMutation } from '@/redux/api';
import React from 'react';

const AllUserList = () => {
    const {data} = useGetAllUserQuery('', { refetchOnMountOrArgChange: true, pollingInterval: 1000 })
    const [makeAdmin] = useMakeAdminMutation()
    // console.log(data);

    const handleAdmin = id =>{
        makeAdmin(id)
    }

    return (
        <div>
            <div className="w-11/12 mx-auto">
          

            <div className="overflow-x-auto bg-white lg:px-20 lg:py-10 my-16 rounded text-black w-full">
                <div className="flex justify-center my-5 lg:text-[22px]">

                    <p>Total User: {data?.length}</p>

                </div>
                <table className="table">
                    {/* head */}
                    <thead className="bg-accent font-bold text-lg text-white">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                           
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {data?.map((user, index) =>
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td className="lowercase">{user.email}</td>
                                <td>
                                    {user.role === 'admin' ?
                                        <p className="bg-success w-16 p-1 font-semibold text-center rounded-md">Admin</p>
                                        :
                                        <button onClick={() => handleAdmin(user._id)}
                                            className="btn btn-outline btn-success">
                                            Make Admin
                                        </button>}

                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline btn-error">
                                        Delet User 
                                    </button>
                                </td>

                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default AllUserList;