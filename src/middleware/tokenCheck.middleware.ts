import { BadRequestException, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class TokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['token'] !== 'test-token') {
      throw new BadRequestException('Token is not valid!');
    }
    next();
  }
}
