import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { SocketIoAdapter } from './socket-io-adapter'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = app.get(ConfigService)

	app.useWebSocketAdapter(new SocketIoAdapter(app, config))

	const port = config.get<number>('PORT') || 4000

	await app.listen(4000, () => {
		console.log('[WEB]', `http://localhost:${port}`)
	})
}
bootstrap()
