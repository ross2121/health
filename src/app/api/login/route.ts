"use server"
import { NextResponse } from 'next/server';
import { Login } from '../../../components/atoms/cotrollers/route';
import { NextApiResponse } from 'next';
export const POST=async(req:Request, res: NextApiResponse)=>{
  try {
    return await Login(req, res);
  } catch (error:any) {
    console.log(error);
    return NextResponse.json({ message: 'Message not allowed',error}, { status: 405 });
  }
}
