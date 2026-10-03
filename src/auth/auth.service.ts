import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}
    async Login(body: LoginDto) {
        const user = await this.usersService.findUserByEmail(body.email);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        const isValid = await bcrypt.compare(body.password, user.password);
        if (!isValid) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload = { sub: user.id, email: user.email };
        const token = this.jwtService.sign(payload);
        return { access_token: token };
    }
}
