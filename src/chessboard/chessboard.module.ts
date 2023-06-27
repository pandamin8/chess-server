import { Module } from '@nestjs/common'

import { ChessboardGateway } from './chessboard.gateway'

@Module({
    providers: [ChessboardGateway]
})
export class ChessboardModule {}