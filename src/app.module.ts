import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { ChessboardModule } from './chessboard/chessboard.module'

@Module({
	imports: [ConfigModule.forRoot(), ChessboardModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
