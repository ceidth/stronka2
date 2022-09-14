import React, {useState, useEffect} from "react";
import { useSession, signIn } from "next-auth/react";
import Link from 'next/link';

import { getCategories } from "../services";

const Header = () => {

  const {data: session} = useSession()
  
  const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, [])

    if(session) {
      return (
        <div className="container mx-auto px-10 mb-8">
          <div className="border-b w-full inline-block border-orange-400 pt-8 pb-4">
            <div className="md:float-left block">
              <Link href="/">
                <span className="cursor-pointer font-bold text-4xl text-orange-500">Deeper</span>
              </Link>
            </div>
            <div className="md:float-left mt-1">
              <Link href='/forum'>
                <span className="md:float-right mt-2 align-middle text-stone-200 ml-6 font-semibold cursor-pointer">
                  FORUM
                </span>
              </Link>
              <Link href='/login/account'>
                <span className="md:float-right mt-2 align-middle text-stone-400 ml-6 font-semibold cursor-pointer">
                  YOUR ACCOUNT
                </span>
              </Link>
            </div>
            <div className="hidden md:float-left md:contents">
              {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-stone-200 ml-6 font-semibold cursor-pointer">{category.name}</span></Link>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container mx-auto px-10 mb-8">
          <div className="border-b w-full inline-block border-orange-400 pt-8 pb-4">
            <div className="md:float-left block">
              <Link href="/">
                <span className="cursor-pointer font-bold text-4xl text-orange-500">Deeper</span>
              </Link>
            </div>
            <div className="md:float-left mt-1">
              <Link href='/forum'>
                <span className="md:float-right mt-2 align-middle text-stone-200 ml-6 font-semibold cursor-pointer">
                  FORUM
                </span>
              </Link>
              <button onClick={() => signIn()}>
                <span className="transition duration-500 ease hover:bg-stone-600 inline-block md:float-right align-middle text-white bg-orange-500 rounded-lg p-2 mb-8 ml-6 font-semibold cursor-pointer">
                  SIGN IN
                </span>
              </button>
            </div>
            <div className="hidden md:float-left md:contents">
              {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-stone-200 ml-6 font-semibold cursor-pointer">{category.name}</span></Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
    };

export default Header