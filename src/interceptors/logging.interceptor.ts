import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const { method, path: url } = request;

    this.logger.log(
      `${method} ${url} invoked ${context.getClass().name} ${
        context.getHandler().name
      }()`,
    );

    const now = Date.now();
    return next.handle().pipe(
      tap((res) => {
        const response = context.switchToHttp().getResponse<Response>();
        const { statusCode } = response;

        this.logger.log(
          `Request from ${method} ${url} returned ${statusCode} took ${
            Date.now() - now
          }ms`,
        );
        this.logger.debug('Response:', res);
      }),
      catchError((err) => {
        this.logger.error(err);
        return throwError(() => err);
      }),
    );
  }
}
