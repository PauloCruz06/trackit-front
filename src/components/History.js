import Top from "./Top";
import Menu from "./Menu";

import { Screen, Div } from "./Stylehabits";

export default function History(){ 
    return(
        <Screen>
            <Top />
            <Div>
                <h3>Histórico</h3>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Div>
            <Menu />
        </Screen>
    );
}
