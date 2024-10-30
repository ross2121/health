"use server"
import { NextResponse } from 'next/server';
import {hospital} from '../../../components/atoms/cotrollers/hosptial';
import { NextApiResponse } from 'next';
export const POST=async(req:Request, res: NextApiResponse)=>{
  try {
    return await hospital(req, res);
  } catch (error:any) {
    console.log(error);
    return NextResponse.json({ message: 'Message not allowed',error}, { status: 405 });
  }
}
