import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='w-3/4 h-3/4 text-center p-16 mx-auto'>
            <p className='text-4xl font-bold font-serif text-error my-12'>You have entered into the wrong directory.</p>
            <Link href='/' className='btn btn-outline btn-accent'><button>Go Back</button></Link>
        </div>
    );
};

export default NotFoundPage;