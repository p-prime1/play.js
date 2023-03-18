const marksMass = 78;
const marksHeight = 1.69;
const johnsHeight = 1.95;
const JohnsMass = 92;

var markHigherBMI;
var markBMI;
markBMI = marksMass / (marksHeight ** 2 );
var johnsBMI;
johnsBMI = JohnsMass / (johnsHeight * johnsHeight);

if (markBMI > johnsBMI)
{
    markHigherBMI = markBMI;
    console.log(markBMI);
    console.log(markBMI, johnsBMI);
}
else
{
    console.log(markBMI, johnsBMI);
    console.log(`Johns BMI ${johnsBMI} is larger.`)
}
