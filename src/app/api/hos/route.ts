"use server"
import { NextRequest, NextResponse } from 'next/server';
import { patientmap } from '../../../components/atoms/cotrollers/hosptial';
import { NextApiRequest, NextApiResponse } from 'next';
export const GET=async(req:NextRequest, res: NextApiResponse)=>{
  try {
    return await patientmap(req, res);
  } catch (error:any) {
    console.log(error);
    return NextResponse.json({ message: 'Message not allowed',error}, { status: 405 });
  }
}
