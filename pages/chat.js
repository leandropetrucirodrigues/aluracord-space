import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
	const [mensagem, setMensagem] = React.useState('');
	const [listaDeMensagens, setListaDeMensagens] = React.useState([]);
	// Sua lógica vai aqui

	// ./Sua lógica vai aqui
	function handleNovaMensagem(novaMensagem) {
		const mensagem = {
			id: listaDeMensagens.length + 1,
			de: 'Leandro',
			texto: novaMensagem,
		}

		setListaDeMensagens([

			mensagem,
			...listaDeMensagens,
		])
		setMensagem('');
	}


	return (
		<Box
			styleSheet={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: appConfig.theme.colors.neutrals[600],
				backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/10/international-space-station-cupola.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundBlendMode: 'multiply',
			}}
		>
			<Box
				styleSheet={{
					display: 'flex',
					flexDirection: 'column',
					flex: 1,
					boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
					borderRadius: '20px',
					backgroundColor: appConfig.theme.colors.novas[999],
					height: '100%',
					maxWidth: '95%',
					maxHeight: '95vh',
					padding: '32px',
				}}
			>
				<Header />
				<Box
					styleSheet={{
						position: 'relative',
						display: 'flex',
						flex: 1,
						height: '80%',
						backgroundColor: appConfig.theme.colors.novas[400],
						flexDirection: 'column',
						borderRadius: '20px',
						padding: '16px',
					}}
				>

					<MessageList mensagens={listaDeMensagens} />
					{/* {listaDeMensagens.map((mensagemAtual) =>{
						return(
							<li key={mensagemAtual.id}>

								{mensagemAtual.de} :{mensagemAtual.texto}

							</li>
						)
					})} */}
					<Box
						as="form"
						styleSheet={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<TextField
							value={mensagem}
							onChange={(event) => {
								const valor = event.target.value;
								setMensagem(valor);
								// console.log(valor);
							}}
							onKeyPress={(event) => {
								if (event.key === 'Enter') {
									event.preventDefault();
									handleNovaMensagem(mensagem);
								}

							}}
							placeholder="Insira sua mensagem aqui..."
							type="textarea"
							styleSheet={{
								width: '100%',
								border: '0',
								resize: 'none',
								borderRadius: '10px',
								padding: '6px 8px',
								backgroundColor: appConfig.theme.colors.novas[100],
								marginRight: '12px',
								color: appConfig.theme.colors.novas[999],
								textColor: appConfig.theme.colors.novas[999],
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

function Header() {
	return (
		<>
			<Box
				styleSheet={{
					width: '100%',
					marginBottom: '16px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					color: appConfig.theme.colors.novas[100],
					borderRadius: '20px',
				}} >
				<Text variant='heading5'>
					Chat
				</Text>
				<Button
					variant='primary'
					label='Logout'
					href="/"
					buttonColors={{
						contrastColor: appConfig.theme.colors.novas[999],
						mainColor: appConfig.theme.colors.novas[100],
						mainColorLight: appConfig.theme.colors.novas[400],
						mainColorStrong: appConfig.theme.colors.novas[400],
					}}
				/>
			</Box>
		</>
	)
}

function MessageList(props) {
	console.log(props);
	return (
		<Box
			tag="ul"
			styleSheet={{
				overflowY: 'scroll',
				scrollbar: 'none',
				display: 'flex',
				flexDirection: 'column-reverse',
				flex: 1,
				color: appConfig.theme.colors.neutrals["000"],
				marginBottom: '16px',
			}}
		>
			{props.mensagens.map((mensagem) => {
				return (
					<Text
						key={mensagem.id}
						tag="li"
						styleSheet={{
							borderRadius: '5px',
							padding: '6px',
							marginBottom: '12px',
							hover: {
								backgroundColor: appConfig.theme.colors.neutrals[700],
							}
						}}
					>
						<Box
							styleSheet={{
								marginBottom: '8px',
							}}
						>
							<Image
								styleSheet={{
									width: '20px',
									height: '20px',
									borderRadius: '50%',
									display: 'inline-block',
									marginRight: '8px',
								}}
								src={`https://github.com/leandropetrucirodrigues.png`}
							/>
							<Text tag="strong">
								{mensagem.de}
							</Text>
							<Text
								styleSheet={{
									fontSize: '10px',
									marginLeft: '8px',
									color: appConfig.theme.colors.neutrals[300],
								}}
								tag="span"
							>
								{(new Date().toLocaleDateString())}
							</Text>
						</Box>
						{mensagem.texto}
					</Text>
				)
			})}
		</Box>
	)
}