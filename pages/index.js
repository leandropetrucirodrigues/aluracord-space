import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router'
import appConfig from '../config.json';



function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
  //const username = 'leandropetrucirodrigues';
  const [username,setUsername] = React.useState('');
  const [nameBottomImage,setBottomImage] = React.useState('GitHub');
  const [semImagem,setImage] = React.useState('https://avatars.githubusercontent.com/u/9919?s=280&v=4')
  const roteamento = useRouter();
  
  
  return (
    <>

      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary['000'],
          backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/10/international-space-station-cupola.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '20px', padding: '30px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.novas[999],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
			onSubmit={function (event){
				event.preventDefault();
				console.log('ele clicou');
				//window.location.href ='/chat';
				roteamento.push('/chat');
			}}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.novas[100] }}>
              {appConfig.name}
            </Text>

			

            <TextField
				value={username}
				placeholder='Digite o nome do usuário no GitHub'
				onChange={function (event){
					// console.log('usuario digitou',event.target.value)
					//onde ta o valor
					const valor = event.target.value;
					// trocar o valor da variavel
					setUsername(valor);
					setBottomImage(valor)

					if (valor.length > 2) {
						setImage(`https://github.com/${valor}.png`);	
					}else{
						setBottomImage(`Github`)
						setImage('https://avatars.githubusercontent.com/u/9919?s=280&v=4')
					}
				}}
				fullWidth
				textFieldColors={{
					neutral: {
					textColor: appConfig.theme.colors.novas[999],
					mainColor: appConfig.theme.colors.neutrals[500],
					mainColorHighlight: appConfig.theme.colors.primary[500],
					backgroundColor: appConfig.theme.colors.novas[100],
                },
              }}
            />
            <Button
				type='submit'
				label='Entrar'
				fullWidth
				buttonColors={{
					contrastColor: appConfig.theme.colors.novas[999],
					mainColor: appConfig.theme.colors.novas[300],
					mainColorLight: appConfig.theme.colors.novas[100],
					mainColorStrong: appConfig.theme.colors.novas[700],
				}}	
			/>
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.novas[400],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '20px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '20px',
                marginBottom: '16px',
              }}
              src={semImagem}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.novas[999],
                padding: '3px 10px',
                borderRadius: '5px'
              }}
            >
            {nameBottomImage}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}