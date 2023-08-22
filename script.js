function count() {
    let input = document.getElementById("Word_Input").value;
  
    let array = input.split(" ");
    document.getElementById("word_count").innerHTML = "Word Count: <br> " + array.length;

    var i;
    var count = 0;

    document.getElementById("character_count").innerHTML = "Character Count: <br>" + input.length;

    for(i of input){
        if(i== " "){
            continue;
        }
        count++;
    }
    document.getElementById("char_without_space").innerHTML = "Characters Without Space: <br>"  + count;

    
    count = 0;
    for (i of input){
        if (i == "." | i == "!" | i == "?"){
            count++;
        } 
    }
    document.getElementById("sentence_count").innerHTML = "Sentence Count: <br>" + count;

  
}
