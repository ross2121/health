import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const hospital = async (req: Request, res: NextApiResponse) => {
    try {
        const body = await req.json();
        // const {email}=body;
        const { email,Name,Disease,Precaution,Severe,Address,lat,lng,admin_email,patient_email} = body;
        const admin = await prisma.admin.findUnique({
            where: { 
                email:admin_email, 
            },
        });
        if (!admin) {
            return NextResponse.json({ error:"Admin not found" }, { status: 404 });
        }
        const newHospital=await prisma.disease.create({
            data:{
                Name,
                Disease,
                Precaution,
                Severe,
                lat,
                lng,
                admin_email,
                patient_email,
                Address,
              adminid:admin.id
            }
        })
        return NextResponse.json({ newHospital }, { status: 200 });
    } catch (error) {
        console.error("Error creating disease:", error);
        return NextResponse.json({ error:"Internal service error" }, { status: 500 });
    }
};
export const patient=async(req:Request,res:NextApiResponse)=>{
   try{ const body=await req.json();
    const {email}=body;
    const admin=prisma.admin.findMany({
        where:{
            email:email
        }
    })
    return NextResponse.json({admin},{status:200});}
    catch (error) {
        console.error("Error creating disease:", error);
        return NextResponse.json({ error:"Internal service error" }, { status: 500 });
    }

}
export const patientmap=async(req:NextRequest,res:NextApiResponse)=>{
try {
    // const body=await req.json();
    const email=req.nextUrl.searchParams.get("email");
    
    if (!email || typeof email !== "string") {
        return  NextResponse.json({error:"String iss not"},{status:500});
    }
    
    const admin=await prisma.disease.findMany({
        where:{
            admin_email:email
        }
    })
    return NextResponse.json({admin},{status:200});
    
} catch (error) {
     console.log("Error fetching all the users",error);
}
}
