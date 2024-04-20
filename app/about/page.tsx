"use client";

import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <h1 className="text-2xl font-bold leading-10 tracking-tight text-neutral-800">Something went wrong</h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600">
                    <code>An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.</code>
                </p>
                <Link href={'/login'}>
                <button className="mt-8 h-10 rounded-md bg-red-500 px-6 font-semibold text-white">Try again</button>
                </Link>
            </div>
        </div>
    )
}
