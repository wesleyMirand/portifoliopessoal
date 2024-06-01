import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/wesley-miranda-3962702b8/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="wesleyubuntujs@gmail.com" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="Mensagem(whatssap):1191311-2441" 
        />
      </Content>
    </Container>
  )
}
