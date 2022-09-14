import React from "react";
import {useSession, signIn, signOut, getSession} from 'next-auth/react'
import Image from 'next/image'
import { redirect } from "next/dist/server/api-utils";

const Login = () => {
    const {data: session} = useSession()

    if (session) {
        return (
            <div className="mx-40">
                <h3 className="text-center text-stone-200 font-bold font-xl">
                    You're signed in as
                </h3>
                <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-stone-400 bg-opacity-20">
                    <div className="absolute left-0 right-0 -top-14">
                        <Image 
                        src={session.user.image}
                        alt={session.user.name}
                        unoptimized
                        height="150px"
                        width="150px"
                        className="align-middle rounded-full" />
                    </div>
                    <h3 className="text-stone-200 mt-14 pt-3 text-xl">
                        {session.user.name}
                        <br/>
                        {session.user.email}
                    </h3>
                    <button onClick={() => signOut()}
                    className="transition duration-500 ease hover:bg-stone-600 inline-block bg-orange-400 text-lg font-medium rounded-full text-white px-8 py-3 mt-7 cursor-pointer">
                        Sign out
                    </button>
                </div>
            </div>
            
        )
    } else {
        return (
            <div className="text-stone-200">
                 You are not signed in
                 <button onClick={() => signIn()}>Sign in</button>
            </div>
        )
    }
}

export default Login

export const getServerSideProps = async (context) => {
    const session = await getSession(context)
    if(!session) {
        return {
            redirect: {
                destination: '/'
            }
        }
    }
    return {
        props: {session}
    }
}