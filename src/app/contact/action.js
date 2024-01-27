"use server"
import dbConnect from "@/utils/dbConnect";
import Contact from "@/models/contact";

export const submitContact = async (data) => {
    try {
        await dbConnect();
        await Contact.create(data);
        return{status: 'OK', message:'Message sent successfully'}
    }
    catch(e) {
        return{status: 'ERROR', message:'Server Error, Please Try Again'}
    }
}