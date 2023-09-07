import Divider from "@mui/material/Divider"
import { Card } from "../ui/card"

export const TextInfoSessãoPrice = () =>{
    return(
        <>
        <div className="ml-80  mt-8 mb-28 flex ">
            <div className=" flex  gap-3 grid grid-cols-3 " >
            <Card className="w-96  p-8">
            <p className="text-zinc-950 font-semibold">Meticulous.</p>
            <p> The first part of any partnership is getting our designer to put your logo in our template.
             The second step is getting them to do the colors.</p>
             </Card>
             <Card className="w-96  p-8">
            <p className="text-zinc-950 font-semibold">Efficient. </p>
            <p>  We pride ourselves on never missing a deadline which is easy because most of the work was done years ago.</p>
             </Card> 
             <Card className="w-96  p-8">
            <p className="text-zinc-950 font-semibold">Adaptable.</p>
            <p> Every business has unique needs and our greatest challenge is shoe-horning those needs into something we already built.</p>
             </Card>

             <Card className="w-96  p-8 mt-8">
            <p className="text-zinc-950 font-semibold">Honest. </p>
            <p> We are transparent about all of our processes, banking on the simple fact our clients never actually read anything.</p>
             </Card>
             <Card className="w-96  p-8 mt-8">
            <p className="text-zinc-950 font-semibold">Loyal. </p>
            <p> We foster long-term relationships with our clients that go beyond just delivering a product, allowing us to invoice them for decades.</p>
             </Card> 
             <Card className="w-96  p-8 mt-8">
            <p className="text-zinc-950 font-semibold">Innovative. </p>
            <p> The technological landscape is always evolving and so are we. We are constantly on the lookout for new open source projects to clone.</p>
             </Card>
             </div>
        </div>
        </>
    )
}