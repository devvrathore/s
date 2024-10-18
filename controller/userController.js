const express = require("express");
const user = require('../model/usermodel');

const {faker} = require('@faker-js/faker');

const seeder = async(req,res)=>{
    try {
        let numUser = 25;

        const users = []
        while(users.length < numUser) {
            const userName = faker.person.fullName();
            const password = faker.internet.password();
            const email = faker.internet.email();


            const existinguser = await user.findOne();
            if (!existinguser){
                users.push({userName,password,email})
            }
        }

        await user.insertMany(users);
        console.log(`${users.length} user seeded`);
        res.status(200).json({message : `${users.length} user seeded`})
        
    } catch (error) {


        console.error('Error:', error);
        res.status(500).json({error:'Failed to fetch user', details: error.message})
        
        
        
    }
}

const userController = {
  seeder}

module.exports = userController