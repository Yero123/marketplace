import { PrismaClient } from "@prisma/client";

// import PostgresLib from "../../lib/pg";
import { prisma } from "./../lib/prisma"


class BaseService{
    // static #pg:PostgresLib;
    static db:PrismaClient;

    constructor(){
        // if(!BaseService.#pg){
        //     BaseService.#pg = new PostgresLib();
        // }
        BaseService.db = prisma;
    }

}

export default BaseService;