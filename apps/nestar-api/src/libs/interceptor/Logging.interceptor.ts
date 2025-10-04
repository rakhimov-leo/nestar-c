
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly logger: Logger = new Logger();

    public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const recordTime = Date.now();
        const requestType = context.getType<GqlContextType>();

        if (requestType === 'http') {
            /* DEVELOP IF NEEDED! */
        } else if (requestType === 'graphql') {
            /* (1) PRINT REQUEST **/
            const gqlContext = GqlExecutionContext.create(context);
            this.logger.log(`${this.stringify(gqlContext.getContext().req?.body)}`, 'Request');

            /* (2) Error handling via QraphQL */
            /* (3) No Error, giving Response below */
            return next
                .handle()
                .pipe(
                    tap((context) => {
                        const responseTime = Date.now() - recordTime
                        this.logger.log(`${this.stringify(context)} - ${responseTime}ms \n\n`, 'RESPOSE');
                    }),
                );
        }

    }
    private stringify(context: ExecutionContext): string {
        return JSON.stringify(context).slice(0, 75);
    }
}
