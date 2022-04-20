import Head from "next/head";
import Topo from "../components/topo";
import Home from "../components/home";
import Intro from "../components/intro";
import Metas from "../components/metas";

export default function Tudo(){
    return(
        <>
        <Head>
        <title>Os Objetivos de Desenvolvimento Sustentável no Brasil</title>
        </Head>
        <Topo></Topo>
        <Home titulo="OS OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL NO BRASIL" texto="Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil."></Home>
        <Intro titulo="Objetivo 1" texto="Erradicação da pobreza"></Intro>
        <Metas></Metas>
        </>
    )
}