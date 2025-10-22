import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninja')
export class NinjaController {
    @Get()
    getNinjas() {
        return 'List of ninjas';
    }
    @Get()
    GetQuery(@Query('name') name: string) {
        return `Ninja name is ${name}`;
    }

    @Get(':id')
    getNinjaById(@Param('id') id: string) {
        return `Details of a specific ninja ${id}`;
    }
    @Post()
    postNinja(@Body() CreateNinjaDto: CreateNinjaDto) {
        return {
            name: CreateNinjaDto.name,
        };
    }
    @Put(':id')
    putNinja(@Param('id') id: string, @Body() CreateNinjaDto: CreateNinjaDto) {
        return {
            id,
            name: CreateNinjaDto.name,
        };
    }
}
