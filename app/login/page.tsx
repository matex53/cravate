"use client";

import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <main className='flex-1'>
            <section className='mx-auto max-w-7xl p-8'>
                <div className='mx-auto mt-16 w-full max-w-lg'>
                    <form className='rounded border p-8 shadow-md' action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you're trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
                        <div className='mb-2'>
                            <label className='sr-only' htmlFor="email">Email</label>
                            <input placeholder='Email' className='w-full rounded border bg-neutral-50 px-4 py-2' type="email" name="email" id="" />
                            <input/>
                        </div>
                        <div className='mb-4'>
                        <label className="sr-only" htmlFor="password">Password</label>
                        <input placeholder="Password" autoCapitalize="off" autoComplete="off" className="w-full rounded border bg-neutral-50 px-4 py-2" type="password" name="password" />
                        </div>
                        <Link href={'/about'}>
                        <button className="rounded bg-neutral-800 px-4 py-2 text-neutral-200 hover:bg-neutral-700" type="submit">Log In</button>
                        </Link>
                    </form>
                    <div></div>
                </div>
            </section>
        </main>
    )
}
