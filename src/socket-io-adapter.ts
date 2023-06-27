import { INestApplicationContext, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IoAdapter } from '@nestjs/platform-socket.io'
import { ServerOptions } from 'socket.io'

export class SocketIoAdapter extends IoAdapter {
	private readonly logger = new Logger(SocketIoAdapter.name)

	constructor(
		private app: INestApplicationContext,
		private configService: ConfigService,
	) {
		super(app)
	}

	createIOServer(port: number, options: ServerOptions) {
		const clientPort = this.configService.get<number>('CLIENT_PORT')

		const cors = {
			origin: [
				`http://localhost:${clientPort}`,
				new RegExp(`/^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):${clientPort}$/`),
			],
		}

		this.logger.log('Configuring SocketIo server with custom CORS options', {
			cors,
		})

		const optionsWithCors: ServerOptions = {
			...options,
			cors,
		}

        return super.createIOServer(port, optionsWithCors)
	}
}
