import "./App.css";

/* =============================
   PLAYER NAMES
============================= */
const players = {
  A: "Matthew",
  B: "Iliyas",
  C: "Eli",
  D: "Cooper",
  E: "Byron",
  F: "Vinh",
  G: "Logan",
  H: "Ethan",
  I: "Nathan"
};

/* =============================
   PLAYER IMAGES
============================= */
import Aimg from "./A.png";
import Bimg from "./B.png";
import Cimg from "./C.png";
import Dimg from "./D.png";
import Eimg from "./E.png";
import Fimg from "./F.png";
import Gimg from "./G.png";
import Himg from "./H.png";
import Iimg from "./I.png";

const playerPics = {
  A: Aimg,
  B: Bimg,
  C: Cimg,
  D: Dimg,
  E: Eimg,
  F: Fimg,
  G: Gimg,
  H: Himg,
  I: Iimg
};

/* =============================
   RESULTS
============================= */

const results = {
  "Word Hunt": { playin:null,q1:null,q2:null,q3:null,q4:null,s1:null,s2:null,final:null },
  "Cup Pong": { playin:null,q1:null,q2:null,q3:null,q4:null,s1:null,s2:null,final:null },
  "8 Ball": { playin:null,q1:null,q2:null,q3:null,q4:null,s1:null,s2:null,final:null },
  "Darts": { playin:null,q1:null,q2:null,q3:null,q4:null,s1:null,s2:null,final:null },
  "Mini Golf": { playin:null,q1:null,q2:null,q3:null,q4:null,s1:null,s2:null,final:null }
};

/* =============================
   HELPER FUNCTIONS
============================= */

function name(letter){
  if(!letter) return "TBD";
  return players[letter];
}

function pic(letter){
  if(!letter) return null;
  return playerPics[letter];
}

function winClass(letter,winner){
  return letter===winner?"winner":"";
}

/* =============================
   EVENT BRACKET COMPONENT
============================= */

function EventBracket({title,r}){
  const play=r.playin;
  const q1=r.q1;
  const q2=r.q2;
  const q3=r.q3;
  const q4=r.q4;
  const q4p2=play;
  const s1p1=q1;
  const s1p2=q2;
  const s2p1=q3;
  const s2p2=q4;
  const f1=r.s1;
  const f2=r.s2;

  const PlayerDiv = ({letter, winner}) => (
    <div className={winClass(letter, winner)}>
      {letter && (
        <>
          <img src={pic(letter)} alt={name(letter)} className="player-pic"/>
          <span>{name(letter)}</span>
        </>
      )}
      {!letter && "TBD"}
    </div>
  );

  return (
    <div className="event">
      <h2>{title}</h2>
      <div className="bracket-grid">

        {/* PLAY IN */}
        <div className="round">
          <div className="round-title">Play-In</div>
          <div className="match">
            <PlayerDiv letter="H" winner={play}/>
            <PlayerDiv letter="I" winner={play}/>
          </div>
        </div>

        {/* QUARTERS */}
        <div className="round">
          <div className="round-title">Quarterfinals</div>
          <div className="match">
            <PlayerDiv letter="A" winner={q1}/>
            <PlayerDiv letter="B" winner={q1}/>
          </div>
          <div className="match">
            <PlayerDiv letter="C" winner={q2}/>
            <PlayerDiv letter="D" winner={q2}/>
          </div>
          <div className="match">
            <PlayerDiv letter="E" winner={q3}/>
            <PlayerDiv letter="F" winner={q3}/>
          </div>
          <div className="match">
            <PlayerDiv letter="G" winner={q4}/>
            <PlayerDiv letter={q4p2} winner={q4}/>
          </div>
        </div>

        {/* SEMIS */}
        <div className="round">
          <div className="round-title">Semifinals</div>
          <div className="match">
            <PlayerDiv letter={s1p1} winner={r.s1}/>
            <PlayerDiv letter={s1p2} winner={r.s1}/>
          </div>
          <div className="match">
            <PlayerDiv letter={s2p1} winner={r.s2}/>
            <PlayerDiv letter={s2p2} winner={r.s2}/>
          </div>
        </div>

        {/* FINAL */}
        <div className="round">
          <div className="round-title">Final</div>
          <div className="match final">
            <PlayerDiv letter={f1} winner={r.final}/>
            <PlayerDiv letter={f2} winner={r.final}/>
          </div>
          <div className="champion">
            Champion: {name(r.final)}
          </div>
        </div>

      </div>
    </div>
  );
}

/* =============================
   APP
============================= */

export default function App(){
  return (
    
    <div className="container">
      <div className="header">
       
        <div className="live">
          <div className="live-dot"></div>
          LIVE
        </div>
      
  <h2 className = "mb-10">8 Figures Game Pigeon Tournament 2026</h2>


      </div>
 
      {Object.entries(results).map(([event,r])=>
        <EventBracket key={event} title={event} r={r}/>
      )}
    </div>
  );
}