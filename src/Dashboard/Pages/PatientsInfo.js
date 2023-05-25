
const PatientsInfo = () => {
     return (
         <div className="w-full h-[80vh] bg-metal mx-auto grid lg:grid-rows-2 lg:grid-flow-col gap-2 md:grid-col-1">
             <div className="lg:row-span-2 rounded-sm  border-[2px] border-[#f8f8f8] bg-white shadow-xl">
                    <div className="info bg-eswasthyaprim text-white p-3">
                          General information
                    </div>

                    <div className="grid grid-cols-2 pl-5 pr-5  mt-2">
                            <div className="info p-1 pb-3">
                            <img class="w-40 h-40 sm:w-15 sm:h-15 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                            </div>
                            <div className="info p-1">
                                <h1 class="text-gray-500">Birth Date</h1>
                                <span class="text-gray-900">9 Feb 2000 (65years)</span>
                            </div>
                    </div> 
                    
                     <div className="grid grid-cols-2 pl-5 pr-5  pb-3">
                            <div className="info p-1">
                                <span class="block">John Smith</span>
                                <span class="block">john@example.com</span>
                            </div>
                            <div className="info p-1">
                                <h1 class="text-gray-500" >Birth Date</h1>
                                <span class="text-gray-900">9 Feb 2000 (65years)</span>
                            </div>
                    </div> 
                    <div className="grid grid-cols-2 pl-5 pr-5  pb-3">
                            <div className="info p-1">
                                <span class="text-gray-500 block">Health Id</span>
                                <button class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">E-0125</button>
                            </div>
                            <div className="info p-1">
                                <h1 class="text-gray-500" >Gender</h1>
                                <button class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">Male</button>
                            </div>
                    </div>
                    <div className="grid grid-cols-2 pl-5 pr-5  pb-3">
                            <div className="info p-1">
                                <span class="block">Blood group</span>
                                <button class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">A+</button>
                            </div>
                            <div className="info p-1">
                                <h1 class="text-gray-500" >Gender</h1>
                                <button class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">Male</button>
                            </div>
                    </div> 
                    <div className="grid grid-cols-2  pl-5 pr-5  pb-3">
                            <div className="info p-1">
                                <span class="block">Tele no</span>
                                <span class="text-gray-900">+977-9843807294</span>
                            </div>
                            <div className="info p-1">
                                <h1 class="text-gray-500" >Gender</h1>
                                <button class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">Male</button>
                            </div>
                    </div> 
             </div>
             <div className="lg:col-span-12 rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl">
                    jsjqdjajs
             </div>
             <div className="lg:col-span-12 rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl">
                    jsjqdjajs
         </div>
     )
}

export default PatientsInfo;