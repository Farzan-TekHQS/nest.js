import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { logEldSchema } from "./logEld.schema";
import { logEldController } from "./logEld.controller";
import { logEldService } from "./logEld.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'logEld', schema: logEldSchema }])],
    controllers: [logEldController],
    providers: [logEldService]
})
export class logEldModule { }