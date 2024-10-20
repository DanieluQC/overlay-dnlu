import { useEffect, useState } from "react";
import { WebsocketService } from "./services/websocketService";
import { WebsocketContext } from "./contexts/WebsocketContext";
import { Overlay } from "./scenes/Overlay";
import { GameContext } from "./models/contexts/GameContext";
import { DEFAULT_GAME_INFO, GameInfoContext } from "./contexts/GameInfoContext";

function App() {
  useEffect(() => {
    WebsocketService.init(49322,false)
  })
  const [gameInfo, setGameInfo] = useState<GameContext>(DEFAULT_GAME_INFO);
  return (
    <WebsocketContext.Provider value={WebsocketService}>
      <GameInfoContext.Provider value={{gameInfo:gameInfo,setGameInfo:setGameInfo}}>
        <Overlay   />
      </GameInfoContext.Provider>
    </WebsocketContext.Provider>
  );
}
export default App;
