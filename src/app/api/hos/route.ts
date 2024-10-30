"use server"
import { NextRequest, NextResponse } from 'next/server';
import { patientmap } from '../../../components/atoms/cotrollers/hosptial';

export const GET=async(req:NextRequest,)=>{
  try {
    return await patientmap(req);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Message not allowed',error}, { status: 405 });
  }
}
