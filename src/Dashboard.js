import React from 'react'
import { Outlet } from 'react-router-dom'

const navigate = [
  { name: "Dashboard", href: "Signin", current: true },
  // { name: "Counter Arrow", href: "counter", current: false },
  // { name: "Region Api", href: "region", current: false },
  // { name: "Country Api", href: "country", current: false },
  // { name: "Department Api", href: "department", current: false },
  // { name: "Employees Api", href: "employees", current: false },
  // { name: "History Api", href: "history", current: false },
  // { name: "Jobs Api", href: "jobs", current: false },
  // { name: "Locations Api", href: "locations", current: false },
  // { name: "Users Api", href: "users", current: false },
  // { name: "Region Api Upload", href: "upload", current: false },
  // { name: "Employee Redux", href: "EmpRedux", current: false },
  // { name: "Employee Redux Tool", href: "EmpTool", current: false },
  // { name: "Redux Saga", href: "Saga", current: false },
  { name: "Category Saga", href: "category", current: false },
  { name: "SignUp", href: "signup", current: false },
  { name: "SignIn", href: "signin", current: false },
];
export default function Dashboard() {
  return (
    <div>
      <nav id="header" class="w-full  bg-white shadow-lg border-b border-blue-400 ">
      <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label for="menu-toggle" class="cursor-pointer md:hidden block">
            <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>

         
         <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                     {navigate.map((item) => {
            return (
              <li>
                <a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" key={item.name} href={item.href}>
                  {item.name}
                </a>
              </li>
            );
           
        })}
               </ul>
            </nav>
         </div>
         
         <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            {/* <div class="auth flex items-center w-full md:w-full">
               <button class="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
               <button class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>
            </div> */}
         </div>
      </div>
   </nav>
     
        <header>
            <h1>{navigate.name}</h1>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
