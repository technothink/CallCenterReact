import React from "react";
import SpeakerLabels from "./SpeakerLabels";

const style = {
  overflow: "scroll",
  overflowX: "hidden"
};

const TranscribeArea = props => {
  /*const myArray = [10];
    myArray[0] = 'Marcos Rojo explains what Lionel Messi told Argentina at half-time against Nigeria';
    myArray[1] = 'As always with the public beta, we warn you not to download it on your main device';
    myArray[2] = 'As always with the public beta, we warn you not to download it on your main device';
    myArray[3] = 'As always with the public beta, we warn you not to download it on your main device';
    myArray[4] = 'As always with the public beta, we warn you not to download it on your main device';
    myArray[5] = 'As always with the public beta, we warn you not to download it on your main device';
    
    */
  let speakerLabels = null;
  let speakers = props.Speakers;
  if (null != speakers) {
    speakerLabels = [speakers.length];
    speakers.forEach(function(item, index) {
      console.log(item);
      let content = item.speakerLabel + ":" + item.content;
      console.log(content);
      speakerLabels[index] = <SpeakerLabels content={content} />;
    });
  }

  return <div style={style}>{speakerLabels}</div>;
};
//

export default TranscribeArea;
