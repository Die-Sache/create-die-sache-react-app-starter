import sache from '../../assets/sache.jpg';
import styled from "styled-components";

const DieSache = styled.div`
      display: flex;
      flex-direction: column;
      height: 100%;
      font-size: 16px;
    `;

const GermanFlagPart = styled.div`
      display: flex;
      flex: 1;
      height:0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${({black, red, gold}) => pickFlagColor(black, red, gold)};
    `;

const Image = styled.img`
      height: 100%;
    `;

const EmphasizedText = styled.em`
      font-size: 200%;
      font-weight: bold;
    `;

const Welcome = styled.header`
      text-align: center;
      color: white;
      font-size: 200%;
    `;

const Description = styled.footer`
      text-align: center;
      font-size: 200%;
    `;

function pickFlagColor(black, red, gold) {
    if (black && !(red || gold)) return 'black';
    if (red && !(black || gold)) return 'red';
    if (gold && !(red || black)) return 'yellow;'
    throw new Error("Invalid color for German flag");
}

export default function () {
    return (
        <DieSache>
            <GermanFlagPart black>
                <Welcome>
                    Willkommen bei der React-Entwicklung für
                    <br/><br/>
                    <EmphasizedText>Die Sache</EmphasizedText>
                </Welcome>
            </GermanFlagPart>
            <GermanFlagPart red>
                <Image src={sache}/>
            </GermanFlagPart>
            <GermanFlagPart gold>
                <Description>
                    Entwickel deine App für den Widerstand! <br/>
                    Finde weitere Informationen zu den Entwicklungsguidelines auf <br/>
                    <a href="https://github.com/Die-Sache/create-die-sache-react-app-starter/blob/main/README.md">
                        GitHub
                    </a>
                </Description>
            </GermanFlagPart>
        </DieSache>
    )
}
