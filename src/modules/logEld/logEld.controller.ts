import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { logEldService } from "./logEld.service";

@Controller("logEld")
export class logEldController {
    constructor(private logEldService: logEldService) { }

    @Post("/")
    async create(@Body() reqBody) {
        const obj = await this.logEldService.create(reqBody);
        return { data: obj }
    }

    @Get("/:id")
    async fetchById(@Param() param) {
        const obj = await this.logEldService.fetchById(param.id);
        return { data: obj }
    }

    @Put("/:id")
    async updateById(@Param() param, @Body() body) {
        const obj = await this.logEldService.updateById(param.id, body);
        return { data: obj }
    }

    @Delete("/:id")
    async deleteById(@Param() param) {
        const obj = await this.logEldService.deleteById(param.id);
        return { data: obj }
    }
}