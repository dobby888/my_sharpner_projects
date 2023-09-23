var number1 = 2;

var number2 = 5

…or create a new repository on the command line
echo "# new" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dobby888/new.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/dobby888/new.git
git branch -M main
git push -u origin main
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.



function add(a, b){

var answer = a + b; //line 1

return answer;

}

var sum = add(number1, number2); // line 2



//console.log(sum) //line 3



console.log(answer) //line 4