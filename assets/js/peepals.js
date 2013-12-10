function myFunction()
{
var x;
var r=confirm("Are you ready to pee?");
if (r==true)
  {
  x="You pressed OK!";
  }
else
  {
  x="You pressed Cancel!";
  }
document.getElementById("demo").innerHTML=x;
}
