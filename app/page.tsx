import { CardContato } from '@/components/CardContato';

import { TextInfoSessãoPrice } from '@/components/textInfoSessãoPrice';

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import DragHandleIcon from '@mui/icons-material/DragHandle';

import Image from "next/image"
import Link from 'next/link';

export default function Home() {

  return (
    <>
    
      <body className="bg-black">

      <header
          id="header"
          className="flex items-end rounded-t-[40px] mt-2 bg-white w-full  "
        >
          <div className="flex w-full justify-around mt-16">
          <Link href="/Home"  className='font-bold text-3xl  '> DevRemote</Link>
         
            <div className="flex gap-6 ">
              <Button

                className="py-5 rounded-full text-sm  shadow-xl transition ease-in-out delay-150 bg-gray-950 hover:-translate-y-1 hover:scale-110 hover:bg-gray-900  hover:shadow-gray-800/50 duration-300"
              >
             <Link href="/Contact" className='text-sm font-bold text-white  '> Contact us</Link>
              </Button>
              <Sheet>

                <SheetTrigger> <DragHandleIcon /></SheetTrigger>
                <SheetContent side="top" className="w-full sm:w-full">
                  <SheetHeader>
                    <SheetTitle>Are you sure absolutely sure?</SheetTitle>h
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      
        <main id="inicioPage" className=" bg-white w-full h-[2300px] ">
          <section className=' flex flex-col h-[700px]'>
            <h1 className='scroll-m-2 font-sans font-medium text-7xl break-all mt-44 ml-80  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
              We are one
              technology <br /> company
            </h1>
            <p className='mt-10 text-gray-600 text-xl ml-80 font-normal'>"Welcome to devRemote, your gateway to cutting-edge technology solutions! <br /> We specialize in delivering exceptional web and mobile projects, transforming your ideas into reality with innovation <br /> and expertise."</p>

          </section>

          <section id='card' className="flex  rounded-t-[40px]  rounded-b-[40px]   mt-2 bg-gray-950 w-full h-[450px]"> 
          <h1></h1>
          </section>

          <h1 className=' font-sans font-medium text-5xl break-all mt-44 ml-80 text-gray-800'>
            Harnessing technology for <br /> a brighter future
          </h1>
          <p className='mt-10 text-gray-600 text-xl ml-80 font-normal'>" We specialize in delivering exceptional web and mobile projects, <br />  transforming your ideas into reality with innovatioand expertise."</p>
          <div className='flex justify-center gap-12 mt-16'>
            <Card className='w-96 rounded-t-[30px]  rounded-b-[30px] h-96'>
              <CardHeader> </CardHeader>
              <CardContent></CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className='w-96 rounded-t-[30px]  rounded-b-[30px] h-96 '>
              <CardHeader> </CardHeader>
              <CardContent></CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className='w-96 rounded-t-[30px]  rounded-b-[30px] h-96'>
              <CardHeader> </CardHeader>
              <CardContent></CardContent>
              <CardFooter></CardFooter>
            </Card>


          </div>
        </main>
       
        
        <section id="Sessão  banner devRemote" className="flex items-center justify-center    bg-gray-50 w-full h-[450px]"><h1 className=' text-gray-800 font-bold text-9xl'>DevRemote</h1> </section>

           
          


        <section id=" Sessão como Trabalamos" className="flex flex-col  bg-white  w-full h-full ">
          
          <p className=' font-sans font-medium text-2xl break-all mt-44 ml-80' >Our process</p>
          <h1 className=' font-sans font-medium text-5xl break-all mt-14 ml-80'>
            How we work
          </h1>
          <p className='mt-10 text-gray-600 text-xl ml-80 font-light'>At our technology startup,<br /> we are driven by innovation and leveraging our resources strategically to deliver exceptional value to our clients. <br /> Our core philosophy revolves around optimizing efficiency while maintaining a strong focus on customer satisfaction.<br /> To achieve this, we embrace cutting-edge technologies and agile methodologies to continually improve and evolve our products and services.</p>
          
           {/* //01 card*/}
          <div className='flex flex-row justify-center gap-20 mt-44'>
            <Card className='w-[600px] h-[700px]'></Card>
            <div className='w-[560px]'>
              <h1 className=' font-sans font-bold text-xl break-all mt-9  '>
                / 01
              </h1>
              <h2 className=' font-sans font-medium text-3xl break-all mt-1 mb-10 '>
                Discover
              </h2>
              <p className='mt-10 text-gray-600 text-xl  font-light'>At our technology startup, we adopt a customer-centric approach, collaborating closely with our clients to gain a deep understanding of their unique needs and objectives. By immersing ourselves in their operations, we seek to unravel the intricacies of their business and identify what drives their success.
                <p className='mt-10 text-gray-600 text-xl  font-light' >Our team of skilled tech experts passionately explores your technological landscape, carefully analyzing existing systems and processes to uncover areas for improvement. Instead of private investigators, we employ talented tech specialists who diligently study your digital infrastructure to ensure seamless integration of our solutions.</p>
              </p>

              <h1 className=' font-sans font-bold text-2sm break-all mt-9  ' >Included in this phase</h1>
              <div className=' gap-5 mt-5 flex-col grid grid-cols-3'>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  In-depth
                </Button>
                <Button className="py-5 px-7 rounded-full text-sm  shadow-xl" >
                  In-depth questionnaires
                </Button> <Button className="py-5  px-10 rounded-full text-sm  shadow-xl" >
                  In-depth
                </Button>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  questionnaires
                </Button>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  questionnaires
                </Button>

              </div>
            </div>
          </div>

         {/* //02 card*/}
          <div className='flex flex-row justify-center gap-20 mt-44'>
            <div className='w-[560px]'>
              <h1 className=' font-sans font-bold text-xl break-all mt-9  '>
                / 02
              </h1>
              <h2 className=' font-sans font-medium text-3xl break-all mt-1 mb-10 '>
                Discover
              </h2>
              <p className='mt-10 text-gray-600 text-xl  font-light'>At our technology startup, we adopt a customer-centric approach, collaborating closely with our clients to gain a deep understanding of their unique needs and objectives. By immersing ourselves in their operations, we seek to unravel the intricacies of their business and identify what drives their success.
                <p className='mt-10 text-gray-600 text-xl  font-light' >Our team of skilled tech experts passionately explores your technological landscape, carefully analyzing existing systems and processes to uncover areas for improvement. Instead of private investigators, we employ talented tech specialists who diligently study your digital infrastructure to ensure seamless integration of our solutions.</p>
              </p>

              <h1 className=' font-sans font-bold text-2sm break-all mt-9  ' >Included in this phase</h1>
              <div className=' gap-5 mt-5 flex-col grid grid-cols-3'>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  In-depth
                </Button>
                <Button className="py-5 px-7 rounded-full text-sm  shadow-xl" >
                  In-depth questionnaires
                </Button> <Button className="py-5  px-10 rounded-full text-sm  shadow-xl" >
                  In-depth
                </Button>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  questionnaires
                </Button>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  questionnaires
                </Button>

              </div>

            </div>
            <Card className='w-[600px] h-[700px]'></Card>

          </div>
           {/* //03 card */}
          <div className='flex flex-row justify-center gap-20 mt-44 mb-48' >
            <Card className='w-[600px] h-[700px]'></Card>
            <div className='w-[560px]'>
              <h1 className=' font-sans font-bold text-xl break-all mt-9  '>
                / 03
              </h1>
              <h2 className=' font-sans font-medium text-3xl break-all mt-1 mb-10 '>
                Discover
              </h2>
              <p className='mt-10 text-gray-600 text-xl  font-light'>At our technology startup, we adopt a customer-centric approach, collaborating closely with our clients to gain a deep understanding of their unique needs and objectives. By immersing ourselves in their operations, we seek to unravel the intricacies of their business and identify what drives their success.
                <p className='mt-10 text-gray-600 text-xl  font-light' >Our team of skilled tech experts passionately explores your technological landscape, carefully analyzing existing systems and processes to uncover areas for improvement. Instead of private investigators, we employ talented tech specialists who diligently study your digital infrastructure to ensure seamless integration of our solutions.</p>
              </p>

              <h1 className=' font-sans font-bold text-2sm break-all mt-9  ' >Included in this phase</h1>
              <div className='gap-5 mt-5 flex-col grid grid-cols-3'>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  In-depth
                </Button>
                <Button className="py-5 px-7 rounded-full text-sm  shadow-xl" >
                  In-depth questionnaires
                </Button> <Button className="py-5  px-10 rounded-full text-sm  shadow-xl" >
                  In-depth
                </Button>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  questionnaires
                </Button>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  questionnaires
                </Button>

              </div>
            </div>
          </div>
        </section >

         {/*SeSSão de preços */}

        <section id=" Sessão Preços e valores " className="flex flex-col  bg-gray-50 w-full h-full ">
        <p className=' font-sans font-medium text-2xl break-all mt-44 ml-80' > Our values</p>
          <h1 className=' font-sans font-medium text-5xl break-all mt-5 ml-80'>
          Balancing reliability <br/> and innovation
          </h1>
          
          <p className='mt-10 text-gray-600 text-xl ml-80 font-light'>We strive to stay at the forefront of emerging trends and technologies,<br/> while completely ignoring them and forking that old Rails project we feel comfortable using.<br/> We stand by our core values to justify that decision.</p>
          <TextInfoSessãoPrice/>

          {/*sessão Card Tell us about your project*/}
          <CardContato/>
          
        </section>

        

        <footer id="Sessãofooter " className=" flex flex-col bg-gray-50 w-full h-full  ">
        <section id="Sessão de linkd para entrar em contato " className=" bg-gray-50 w-full h-full grid grid-cols-2 gap-96" >
          <div className='flex gap-36 justify-center ml-60'>
            <div className='flex flex-col '> <h1 className=' font-sans font-medium text-lg break-all mt-44 mb-3 ' >Company</h1>
            
            <Link href="/Contact" className='text-sm font-light text-gray-700 '> Contact us → </Link>
              </div>
              
              <div className='flex flex-col'> <h1 className=' font-sans font-medium text-lg break-all mt-44  mb-3' >Connect</h1>
            
            <Link href="/" className='text-sm font-light text-gray-700 mb-2 ' >Linkedin</Link>
            <Link href="/" className='text-sm font-light text-gray-700 mb-2'>GitHub</Link>
            <Link  href="/" className='text-sm font-light text-gray-700  '>Instagram</Link>
            </div>

            
          </div>
          <div className='flex flex-col'> <h1 className=' font-sans font-medium text-lg break-all mt-44 ' >Sign up for our newsletter</h1>
            
            <a className=' font-light text-gray-700 text-sm mt-5 mb-4' >Subscribe to get the latest design news, articles, <br/> resources and inspiration.</a>

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

    </>
  )
}
