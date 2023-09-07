import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import CloseIcon from '@mui/icons-material/Close';

import Image from "next/image"
import Link from 'next/link';
import { Label } from '@/components/ui/label';

export default function Contact() {

    return (
        <main>
            <body className="bg-black">
                <header
                    id="header"
                    className="flex items-end rounded-t-[40px] mt-2 bg-white w-full  "
                >
                    <div className="flex w-full justify-around mt-16">
                        <Link href="/" className='font-bold text-3xl'> DevRemote</Link>

                        <div className="flex gap-6">
                            <Button

                                className="py-5 rounded-full text-sm  shadow-xl"
                            >
                                Contact us
                            </Button>
                            <Sheet>

                                <SheetTrigger> <DragHandleIcon /></SheetTrigger>
                                <SheetContent side="top" className="w-full sm:w-full bg-black h-4/6 ">
                                    <SheetHeader  >
                                        <SheetTitle className="flex  justify-around mt-4 mb-12">
                                           
                                            <Link href="/" className='font-bold text-3xl text-gray-50'> DevRemote</Link>
                                        <Button

                                            className="py-5  w-12 rounded-full text-sm font-bold  bg-white hover:bg-slate-200 text-slate-950 shadow-xl"
                                        >
                                            X
                                        </Button>
                                       
                                        </SheetTitle>
                                        <div className='flex '>
                                        <Card className='bg-black border-gray-600 w-6/12 h-28  text-gray-50 rounded-none'>
                                            <CardContent className='font-bold text-center mt-12 text-4xl'>HOME</CardContent>
                                        </Card>
                                        <Card className='bg-black border-gray-600 w-6/12 h-28  text-gray-50 rounded-none'>
                                            <CardContent className='font-bold text-center mt-12 text-4xl'>Our Process</CardContent>
                                        </Card>
                                     
                                        </div >
                                        <div className='flex '>
                                        <Card className='bg-black border-gray-600 w-6/12 h-28  text-gray-50 rounded-none'>
                                            <CardContent className='font-bold text-center mt-12 text-4xl'>HOME</CardContent>
                                        </Card>
                                        <Card className='bg-black border-gray-600 w-6/12 h-28  text-gray-50 rounded-none'>
                                            <CardContent className='font-bold text-center mt-12 text-4xl'>Our Process</CardContent>
                                        </Card>
                                     
                                        </div >
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </header>

                <section id=" Sessão como Trabalamos" className="flex flex-col  bg-white  w-full h-full  ">

                    <p className=' font-sans font-medium text-xl break-all mt-44 ml-96' >Contact us</p>
                    <h1 className=' font-sans font-medium text-5xl break-all mt-9 ml-96'>
                        Let’s work together
                    </h1>
                    <p className='mt-10 text-gray-600 text-xl ml-96 font-light'>We can’t wait to hear from you.</p>

                    <section className='grid grid-cols-2 gap-16'>

                        <div id="infoContact">
                            <p className=' font-sans font-medium text-xl break-all mt-36 ml-96' >Our offices</p>

                            <p className=' text-gray-600 text-base mt-6 ml-96 font-light'>Prefer doing things in person? We don’t but we have to list our addresses here for legal reasons.</p>

                            <div className='grid grid-cols-2 ml-96 mt-6'>

                                <div className="flex-col">
                                    <h1 className=' font-sans font-bold text-sm break-all mt-8 ' >Copenhagen</h1>
                                    <p className=' font-sans font-normal text-sm break-all mt-3 text-slate-600 '>1 Carlsberg Gate</p>
                                    <p className=' font-sans font-normal text-sm break-all mt-3 text-slate-600 '>1260, København, Denmark</p>

                                </div>
                                <div className="flex-col">
                                    <h1 className=' font-sans font-bold text-sm break-all mt-8 ' >Billund</h1>
                                    <p className=' font-sans font-normal text-sm break-all mt-3 text-slate-600 '>24 Lego Allé</p>
                                    <p className=' font-sans font-normal text-sm break-all mt-3 text-slate-600 '>7190, Billund, Denmark</p> </div>
                            </div>

                            <p className='mt-10 text-gray-200 text-xl ml-96 font-light'>__________________________________________________</p>
                            <h1 className='mt-10 text-gray-800 text-xl ml-96 font-bold'>Email us</h1>

                            <div className='grid grid-cols-2 ml-96 mt-6'>

                                <div className="flex-col">
                                    <h1 className=' font-sans font-bold text-sm break-all mt-8 ' >Careers</h1>

                                    <p className=' font-sans font-normal text-sm break-all mt-3 text-slate-600 '>careers@studioagency.com</p>

                                </div>
                                <div className="flex-col">
                                    <h1 className=' font-sans font-bold text-sm break-all mt-8 ' >Press
                                    </h1>

                                    <p className=' font-sans font-normal text-sm break-all mt-3 text-slate-600 '>press@studioagency.com</p> </div>
                            </div>

                            <p className='mt-10 text-gray-200 text-xl ml-96 font-light'>___________________________________________________</p>
                            <h1 className='mt-10 text-gray-800 text-xl ml-96 font-bold'>Follow us</h1>
                            <div className='flex gap-2 ml-96'>
                                <h1>Facebook</h1>
                                <h1>Instagram</h1>
                                <h1>GitHub</h1>
                                <h1>Linkedin</h1>

                            </div>
                        </div>


                        <div className="flex flex-col mt-36">
                            <h1 className=' font-sans font-medium text-xl break-all mb-8 '>Work inquiries</h1>
                            <Textarea className="h-24 w-8/12 rounded-tl-3xl rounded-b-none text-lg" placeholder="Name" />

                            <Textarea className="h-24 w-8/12 rounded-none  text-lg " placeholder="Email" />
                            <Textarea className="h-24 w-8/12 rounded-none  text-lg" placeholder="Company" />
                            <Textarea className="h-24 w-8/12 rounded-none text-lg" placeholder="Phone" />
                            <Textarea className="h-24 w-8/12 rounded-none text-lg" placeholder="Menssage" />
                            <Card className="h-56 w-8/12 rounded-none text-lg flex " >
                                <h1 className='ml-4  font-sans font-medium text-xl break-all mb-8 text-gray-400  mt-5'>Budget</h1>
                                <RadioGroup defaultValue="comfortable" className="grid grid-cols-2 m-5  mt-8">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="default" id="r1" />
                                        <Label htmlFor="r1">$25K – $50K</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="comfortable" id="r2" />
                                        <Label htmlFor="r2">$50K – $100K</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="compact" id="r3" />
                                        <Label htmlFor="r3">
                                            $100K – $150K</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="more" id="r4" />
                                        <Label htmlFor="r4">
                                            More than $150K</Label>
                                    </div>

                                 
                                </RadioGroup>
                            </Card>
                            <Button className='mt-12 h- w-3/12 mb-22 rounded-2xl'>Let’s work togethere</Button>
                        </div>

                    </section>

                </section>













                <footer id="Sessãofooter " className=" flex flex-col bg-white w-full h-full  ">
                    <section id="Sessão de linkd para entrar em contato " className=" bg-white w-full h-full grid grid-cols-2 gap-96" >
                        <div className='flex gap-36 justify-center ml-60'>
                            <div className='flex flex-col '> <h1 className=' font-sans font-medium text-lg break-all mt-44 mb-3 ' >Company</h1>

                                <Link href="/Contact" className='text-sm font-light text-gray-700 '> Contact us → </Link>
                            </div>

                            <div className='flex flex-col'> <h1 className=' font-sans font-medium text-lg break-all mt-44  mb-3' >Connect</h1>

                                <Link href="/" className='text-sm font-light text-gray-700 mb-2 ' >Linkedin</Link>
                                <Link href="/" className='text-sm font-light text-gray-700 mb-2'>GitHub</Link>
                                <Link href="/" className='text-sm font-light text-gray-700  '>Instagram</Link>
                            </div>


                        </div>
                        <div className='flex flex-col'> <h1 className=' font-sans font-medium text-lg break-all mt-44 ' >Sign up for our newsletter</h1>

                            <a className=' font-light text-gray-700 text-sm mt-5 mb-4' >Subscribe to get the latest design news, articles, <br /> resources and inspiration.</a>

                            <div className="flex w-full max-w-sm items-center space-x-2">
                                <Input type="email" placeholder="Email" className='py-6  rounded-lg' />
                                <Button type="submit">Subscribe</Button>
                            </div>

                        </div>

                    </section >

                    <h1 className=' flex justify-around text-gray-200 mt-36  mb-36'>______________________________________________________________________________________________________</h1>

                    <div className=' flex justify-around 
 mb-9'>

                        <h1 className='text-4xl  text-gray-950 font-bold'>DevRemote</h1>
                        <p className=' text-sm font-light text-gray-500 mt-6  '>© Studio Agency Inc. 2023</p></div>

                </footer>


            </body>

        </main>
    )
}
