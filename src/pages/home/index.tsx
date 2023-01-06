import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

import { Container, Hero, Preview } from './styles'

import previewImg from '../../assets/app-preview.png'
import ClaimUsernameForm from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem argendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImg}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando a aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
