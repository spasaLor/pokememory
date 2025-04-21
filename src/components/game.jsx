function Card({item,onCardClick}){
    return(
        <div className="card-item" onClick={onCardClick}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
        </div>
    );
}

export default function Game({scoreIncrement, finishGame, cardList,setCardList}){
    const onCardClick = (cardName) =>{
        let pokemon=cardList.find(item =>item.name === cardName);
        if(pokemon.clicked){
            finishGame();
        }
        else{
            scoreIncrement();
            setCardList(cardList.map(item=>(item.name === cardName ? {...item, clicked:true} : item)));
        }
        setCardList(prev => (prev.sort(()=>Math.random() -0.5)));
    }

    return(
        <div className="cards-container">
            {cardList.map(item=>(
                <Card key={item.name} item={item} onCardClick={()=>onCardClick(item.name)}/>
            ))}
        </div>
    );
    
}