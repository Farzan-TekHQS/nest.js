import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import logEldDocument from "./logEld.document"
import { Model } from "mongoose";

@Injectable()
export class logEldService {
    constructor(
        @InjectModel("logEld")
        private logEldModel: Model<logEldDocument>
    ) { }

    create = async (object): Promise<logEldDocument> => {
        const obj = await this.logEldModel.create(object);
        return obj;
    }

    fetchById = async (id): Promise<logEldDocument> => {
        const obj = await this.logEldModel.findById({ _id: id });
        return obj;
    }

    deleteById = async (id) => {
        const obj = await this.logEldModel.deleteOne({ _id: id });
        return obj;
    }

    updateById = async (id, body) => {
        const obj = await this.logEldModel.updateOne({ _id: id }, body);
        return obj;
    }
}