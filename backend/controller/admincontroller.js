import {admin}  from  "../model/admin.js"
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import "dotenv/config"
import { event } from "../model/event.js";
const createAdmin=async(req,res)=>{
    const {username,email,password}=req.body;
    try{
        const Admin=await admin.findOne({email})
        if(Admin){
            return res.status(400).json({error:"Admin already exists"})
        }
        const hashedPassword=await argon2.hash(password)
        const newAdmin=new admin({
            username,
            email,
            password:hashedPassword,
            
        })
        await newAdmin.save();
        res.status(200).json({message:"Admin created successfully"});
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Server error"})
    }
}
const adminlogin =async(req,res)=>{
    try{
    const {email,password}=req.body

    const Admin=await admin.findOne({email})
    
    if(!Admin){
       return res.status(404).json({message:"Admin not found"})
    }
    const vaild=await argon2.verify(Admin.password,password)
    if(vaild){
        const token=jwt.sign({_id:Admin._id,email:Admin.email},process.env.KEY,{
            expiresIn:"1 day"
        })
        return res.status(200).json({msg:"user login",token:token})
    }
    res.status(200).json({message:"login success"})
    }catch(err){
        res.status(500).json({msg:"jot",err})
    }
}



const deleteEvent = async (req, res) => {
    const token = req.headers.authorization;

    try {
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        // Verify the JWT token and extract details
        const tokendetail = jwt.verify(token, process.env.KEY);

        // Ensure you delete an event based on a valid identifier, e.g., title, eventId, etc.
        const eventToDelete = await event.deleteOne({ email: tokendetail.email });

        // Check if an event was found and deleted
        if (eventToDelete.deletedCount === 0) {
            return res.status(404).json({ message: "No event found to delete" });
        }

        res.status(200).json({ message: "Event deleted successfully" });

    } catch (err) {
        res.status(500).json({ message: "Error in deleting event", err: err.message });
    }
};

export {createAdmin,adminlogin,deleteEvent}