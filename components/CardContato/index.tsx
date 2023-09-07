import { Card } from "@mui/material"
import { CardHeader } from "../ui/card"
import { Button } from "../ui/button"

export const CardContato =()=>{
    return(
        <>
        <div className="flex justify-center">

       
        <Card className="w-[1200px] h-[500px] bg-black rounded-3xl  " >
            <CardHeader className="ml-44 ">
                <h1 className="text-white font-normal text-4xl  mb-5 mt-28">Tell us about your project</h1>
                <Button className="  w-28 py-5 bg-slate-50 text-black rounded-3xl font-bold ">Say Hei</Button>
                <h1 className=' flex justify-around text-zinc-800 mr-96 mt-36 '>____________________________________________________________________________</h1>
               
               <div className="mt-16 grid  grid-cols-2">
                <div><h1 className="text-white font-normal text-xl  mt-9 mb-7 ">Our offices</h1>
              <h1 className="text-white font-bold text-sm mb-2">Copenhagen</h1>
              <p  className="text-white font-light text-sm mb-2" >1 Carlsberg Gate</p>
              <p  className="text-white font-light text-sm mb-2" >1260, København, Denmark</p>
              </div> 
              <div className="mt-24"> 
                 <h1 className="text-white font-bold text-sm mb-2">Billund</h1>
              <p  className="text-white font-light text-sm mb-2" >24 Lego Allé</p>
              <p  className="text-white font-light text-sm mb-2" >7190, Billund, Denmark</p>/div>
               </div>
               </div>
               
            </CardHeader>
        
        </Card>
        </div>
        </>
    )
}