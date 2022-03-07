import React from "react";
import Cards from "./Card";
import emojipedia from "./emojipedia";

// function CreateCard(emoji) {
//   return (
//     <Card
//       key={emoji.id}
//       emoji={emoji.emoji}
//       name={emoji.name}
//       meaning={emoji.meaning}
//     />
//   );
// }

function App(){
  return(
    <div>
    <h1>
      <span>AsianFood-EmojiPedia</span>
    </h1>
    <dl className="dictionary">
    {/* //map function  */}
    {emojipedia.map(emojiTerm => (
          <Cards
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        ))}
      </dl>
    {/* <Card 
      emoji = {emojipedia[0].emoji}
      name = {emojipedia[0].name}
      meaning = {emojipedia[0].meaning}
    />
     <Card 
      emoji = {emojipedia[1].emoji}
      name = {emojipedia[1].name}
      meaning = {emojipedia[1].meaning}
    />
     <Card 
      emoji = {emojipedia[2].emoji}
      name = {emojipedia[2].name}
      meaning = {emojipedia[2].meaning}
    /> */}

    </div>
  )
}

export default App;