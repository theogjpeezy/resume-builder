import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from 'src/dto/user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    public createUser(@Body() userDTO: UserDto) {
        return this.userService.createUser(userDTO);
    }

    @Get(':id')
    public getUser(@Param() params) {
        return this.userService.getUser(params.id);
    }

    @Get()
    public getUsers() {
        return this.userService.getUsers();
    }

    @Delete(':id')
    public deleteUser(@Param() params) {
        return this.userService.deleteUser(params.id);
    }

    @Put(':id')
    public updateUser(@Param() params, @Body() userDTO: UserDto) {
        return this.userService.updateUser(params.id, userDTO);
    }
}
