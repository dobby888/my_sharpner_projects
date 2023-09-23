let x="john";
console.log(x);
console.log(typeof(x));
let y=new String("john");//string as object
console.log(y);
console.log(typeof(y));
let str="hello \"world!\" \n i am the \'most\' happiest \\person\\ in the world.";
console.log(str);
console.log(x==y);//value:john=john
console.log(x===y);//value:john=john but type:string!=object
let alp="ABCDEFGHIJK LMNOPQRSTUVWXYZ";
console.log(alp.length)//27(includes space in length)
let num="hello world!";
console.log(num);

// String length:
// String slice():slice(start, end)
let text = "Apple, Banana, Kiwi";
console.log(text.slice(7, 13));//(+):counts from start of the string
console.log(text.slice(7));
console.log(text.slice(-12));//(-):counts from end of the string
console.log(text.slice(-12,-6));

// String substring():substring(start, end)
console.log(text.substring(7, 13));//(-):are treated as "0"

// String substr():substr(start, length)
console.log(text.substr(7, 6));//second parameter is the/ lenght to be extracteed from start
console.log(text.substr(7));//if second parameter not given, it will slic eout rest of the string
console.log(text.substr(-4));//if first parameter if "-ve" the position counts from the end

// String replace():returns new string,doesnt modify the original string,first match replaced,case sensitive
let replace = "Please visit Microsoft and Microsoft!";
console.log(replace.replace("Microsoft", "W3Schools"));
let replacesensitive = "Please visit Microsoft!";//"//i" flag: to avoid case sensitivity
console.log(replacesensitive.replace(/MICROSOFT/i, "W3Schools"));
let replace0 = "Please visit Microsoft and Microsoft!";//"//g" flag:replace all matches using regu;ar expression
console.log(replace0.replace(/Microsoft/g, "W3Schools"));

// String replaceAll():doesnt work in internet explorer
let replaceall="cats are my fav pets.";
console.log(replaceall.replaceAll("cats","dogs"));
console.log(replaceall.replaceAll(/cats/g,"dogs"));

// String toUpperCase()
// String toLowerCase()
let uporlow="HEllo WoRld!";
console.log(uporlow.toUpperCase());
console.log(uporlow.toLowerCase());

// String concat()
let concat1="concat";
let concat2="string";
console.log(concat1+" "+concat2);
console.log(concat1.concat(" ",concat2));

// String trim()
let trim="             trimming white spaces         ";
console.log(trim.trim());

// String trimStart()
let trimstart="             trimming starting spaces         ";
console.log(trimstart.trimStart());

// String trimEnd()
let trimend="             trimming ending spaces         ";
console.log(trimend.trimEnd());

// String padStart()//not for internet explorer
let padstart = "5";
console.log(padstart.padStart(4,"0"));
console.log(padstart.padStart(4,"x"));

// String padEnd()
let padend="5";
console.log(padend.padEnd(4,"0"));
console.log(padend.padEnd(4,"x"));

// String charAt()
let char="hello js!";
console.log(char.charAt(90));
console.log(char.charAt(0));
char[0]="y";//no error,but wouldnt work
console.log(char[90]);//works but cant

// String charCodeAt()
let charcode="hello js!";
console.log(charcode.charCodeAt(0));

// String split():converts string into an array("(split the string into array on which basis:""," ",",","|")")
let split="hello world!";
console.log(split.split(" "));
console.log(split.split(""));

// String indexOf():returns "-1" if the text is not found
// String lastIndexOf()
// String search()
let indexof="please locate where 'locate' occurs!";
console.log(indexof.indexOf("locate"));//0th index start, spaces are also included
console.log(indexof.lastIndexOf("locate"));//0th index end, spaces or "!" are also included
console.log(indexof.search("locate"));
console.log(indexof.search(/locate/));

// String match()
let match= "The rain in SPAIN stays mainly in the plain";
console.log(match.match("ain"));
console.log(match.match(/ain/));
console.log(match.match(/ain/g));//just return the count and the counted words in an array
console.log(match.match(/ain/gi));//removes case sensitivity

// String matchAll():prints each and every variable of the string separately in separate lines
let matchall="I love cats. Cats are very easy to love. Cats are very popular."
let iterator=Array.from(matchall.matchAll(/Cats/gi));
for(let matches of iterator){//replace iterator with matchall and it prints all the variables in separate 
    console.log(matches[0])
}
console.log(Array.from(matchall));//prints each and every variable of the string separately in a single array with ','

// String includes():all three are case sensitive
// String startsWith()
// String endsWith()
let include="Hello world, welcome to the universe.";
console.log(include.includes("world"));
console.log(include.includes("world",6));//starts searching from the given numbered index
console.log(include.startsWith("Hello"));
console.log(include.startsWith("world",6));
console.log(include.endsWith("."));
console.log(include.endsWith("world",11))//starts counting from start and the 11th indexed letter is:'d' from world==>ends with world:true

