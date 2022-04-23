import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../home/home";
import { Container, Header, Img} from "./style";
import Logo from '../imgs/logo.png'

export default function Rotas() {
  return (
  <Container>
    <Header>
			<Img src={Logo} alt="logo"/>
			<h1>International information about COVID</h1>
    </Header>
    <BrowserRouter>
				<Routes>
					<Route exact path="*" element={<Home />} />
				</Routes>
			</BrowserRouter>
    
	</Container>
)
}