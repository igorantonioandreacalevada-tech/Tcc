import axios from "axios"
import { useState, type CSSProperties } from "react"
import './Tcc.css'

type EventItem = 
{
    year: number
    text: string
}

function Tcc(){
    const [event, setEvents] = useState<EventItem[]>([])
    const [dia, setDia] = useState("")
    const [mes, setMes] = useState("")

    async function Acontecimento() {
    if(!dia || !mes)
        return(
            alert("Você precisa colocar a data")
        )

    try {
        const resposta = await axios.get(
            `https://api.wikimedia.org/feed/v1/wikipedia/pt/onthisday/events/${mes}/${dia}`
        )

        const info = resposta.data

        if (info.events && info.events.length > 0) {
            setEvents(info.events)
        } else {
            setEvents([])
        }
    } catch (err) {
        console.log(err)
        setEvents([])
    }
}

    function ChangeColor(){
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    const LetterStyleH1:CSSProperties = {
        fontFamily: "monospace",
        fontSize: "5vh",
        justifySelf: "center",
        color: "rgb(0, 0, 0)"
    }

    const LetterStyleH3:CSSProperties = {
        fontFamily: "cursive",
        fontSize: "3.3vh",
        justifySelf: "center",
        color: "rgb(0, 0, 0)",
        marginLeft: "40px"
    }

    const DivStyle:CSSProperties = {
        justifySelf: "center"
    }

    const inputStyle:CSSProperties = {
        borderRadius: "24px",
        backgroundColor: "rgb(255, 255, 255)",
        padding: "1vh",
        color: "rgb(0, 0, 0)",
        borderColor: "rgb(0, 0, 0)",
        margin: "5px"
    }

    const ButtonStyle:CSSProperties = {
        padding: "2vh",
        borderRadius: "24px",
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgb(255, 0 , 0)",
        cursor: "pointer",
        margin: "10px",
        borderColor: "rgb(0, 0, 0)",
        borderStyle: "solid"
    }

    const LetterStyle:CSSProperties = {
        fontFamily: "monospace",
        justifySelf: "center",
    }

    const ExplicantionDiv:CSSProperties = {
        backgroundColor: "rgb(255, 255, 255)",
        width: "100vh",
        justifySelf: "center",
        border: "5px solid rgb(0, 0, 0)"
    }

    const DivAdd:CSSProperties = {
        display: "flex",
        justifySelf: "center"
    }

    const iframeL:CSSProperties = {
        position: "fixed",
        left: "1px",
        bottom: "200px"
    }

    const iframeR:CSSProperties = {
        position: "fixed",
        right: "1px",
        bottom: "200px"
    }

    const Aviso:CSSProperties = {
        position: "fixed",
        right: "1px",
        fontSize: "10px",
        bottom: "150px",
        cursor: "default",
        color: "rgb(255, 255, 255)"
    }

    const EasterEgg:CSSProperties = {
        fontSize: "9px",
        color: "rgb(255, 255, 255)",
        cursor: "default"
    }



    return(
        <div>
            <div className="backgroundImgDiv">
                <img src="https://thumbs.dreamstime.com/b/mezuz%C3%A1-uma-umbral-%C3%A9-um-peda%C3%A7o-de-pergaminho-frequentemente-contido-num-estojo-decorativo-inscrito-com-vers%C3%ADculos-espec%C3%ADficos-8320539.jpg" alt="" className="backgroundImg"/>
            </div>
            <h1 style={LetterStyleH1}>Browser de acontecimentos históricos</h1>
            <div style={ExplicantionDiv}>
                <div>
                    <a href="https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal" style={EasterEgg}>a</a>
                    <h3 style={LetterStyleH3}>Esse site é um projeto TCC feito usando TypeScript e React, 
                        ele traz a proposta de um site que você 
                        pode pesquisar acontecimentos históricos</h3>
                </div>
                
                <div style={DivAdd}>
                    <iframe style={iframeR} width="200" height="315" src="https://www.youtube.com/embed/gx-zPheFnHo?si=oP8-5F8LhMoI7ssB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <h2 style={LetterStyle}>Acontecimento do
                        dia  -{dia}- mês  -{mes}-
                    </h2>
                    <iframe style={iframeL} width="200" height="315" src="https://www.youtube.com/embed/XINImbZzU7I?si=SRpzc0HG1y8VM2Dz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <p onClick={ChangeColor} style={Aviso}>não clique</p>
                </div>
            </div>
            <br/>
            <div style={DivStyle}>
                <input style={inputStyle} type="number" placeholder="Digite o dia" value={dia} onChange={(e) => setDia(e.target.value)}/>
                <input style={inputStyle} type="number" placeholder="Digite o mês" value={mes} onChange={(e) => setMes(e.target.value)}/>
            </div>
            <div style={DivStyle}>
                <button style={ButtonStyle} onClick={Acontecimento}>Gerar acontecimentos</button>
            </div>
            

            {event.map((events, index) => (
                <div key={index}>
                    <h4 style={LetterStyle}>{events.year} - {events.text}</h4>
                </div>
            ))}
        </div>
    )
}

export default Tcc
