import { Logger } from '@nestjs/common'
import { OnGatewayInit, WebSocketGateway } from "@nestjs/websockets"
import { Module } from '@nestjs/common'

@WebSocketGateway()
export class ChessboardGateway implements OnGatewayInit {

    private readonly logger = new Logger(ChessboardGateway.name)

    afterInit(server: any) {
        this.logger.log('Websocket Gateway initialized')
    }
}